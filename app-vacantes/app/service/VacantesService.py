from app.models.VacantesModel import VacantesModel
from flask import jsonify
from app.extensions import db
from datetime import datetime

class VacantesService:
    @staticmethod
    def obtener_vacantes():
        vacantes = VacantesModel.query.all()
        return [v.to_dict() for v in vacantes]
    
    # Listar detalles de una vacante por id
    @staticmethod
    def obtener_vacante_por_id(vacante_id):
        vacante = VacantesModel.query.get(vacante_id)

        if not vacante:
            return None

        # Solo mostrar nombre, detalles y fecha
        detalles = {
            'nombre_vacante': vacante.nombre_vacante,
            'detalles': vacante.detalles,
            'fecha_publicacion': vacante.fecha_publicacion.isoformat() if vacante.fecha_publicacion else None,
            'fecha_edicion': vacante.fecha_edicion.isoformat() if vacante.fecha_edicion else None
        }

        return detalles

    @staticmethod
    def obtener_vacantes_por_usuario(usuario_id):
        vacantes = VacantesModel.query.filter_by(creador=usuario_id).all()
        return [v.to_dict() for v in vacantes]
    
    # Obtener vacantes disponibles
    @staticmethod
    def obtener_vacantes_disponibles(todas):

        if todas:
            vacantes = VacantesModel.query.filter_by(estado='disponible').all()
            return [v.to_dict() for v in vacantes]
        else:
            vacantes = VacantesModel.query.filter_by(estado='disponible').order_by(VacantesModel.fecha_publicacion.desc()).limit(3).all()
            return [v.to_dict() for v in vacantes]
    

    @staticmethod
    def crear_vacante(nombre_vacante, descripcion, detalles, fecha_publicacion, fecha_edicion, estado, creador, postulador):
        
        # Validar campos obligatorios
        if not nombre_vacante or not descripcion:
            return jsonify({'error': 'Faltan campos obligatorios'}), 400
        
        # Verificar si ya existe un usuario en VacantesModel
        if VacantesModel.query.filter_by(nombre_vacante=nombre_vacante).first():
            return jsonify({'error': 'El nombre de la vacante ya existe'}), 400
        
        # Crear la nueva vacante
        nueva_vacante = VacantesModel(
            nombre_vacante=nombre_vacante,
            descripcion=descripcion,
            detalles=detalles,
            fecha_publicacion=fecha_publicacion,
            fecha_edicion=fecha_edicion,
            estado=estado,
            creador=creador,
            postulador=postulador
        )

        # Try except para manejar los errores al guardar en la base de datos
        try:
            # Add sirve para agregar el objeto a la sesión actual
            db.session.add(nueva_vacante)

            # Commit guarda los cambios en la base de datos
            db.session.commit()
            return jsonify({'mensaje': 'Vacante creada exitosamente', 'vacante': nueva_vacante.to_dict()}), 201
        except Exception as e:
            return jsonify({'error': 'Error al guardar la vacante en la base de datos', 'detalle': str(e)}), 500

    # Asignar vacante a postulante
    @staticmethod
    def asignar_vacante(vacante_id, datos_actualizados):
        vacante = VacantesModel.query.get(vacante_id)
        
        if not vacante:
            return jsonify({'error': 'Vacante no encontrada'}), 404
        
        # Actualizar el postulador de la vacante
        if 'postulador' in datos_actualizados:
            vacante.postulador = datos_actualizados['postulador']
            vacante.estado = 'Ocupada'
        
        try:
            db.session.commit()
            return jsonify({'mensaje': 'Vacante asignada exitosamente', 'vacante': vacante.to_dict()}), 200
        except Exception as e:
            return jsonify({'error': 'Error al asignar la vacante en la base de datos', 'detalle': str(e)}), 500

    @staticmethod
    def actualizar_vacante(vacante_id, datos_actualizados):
        vacante = VacantesModel.query.get(vacante_id)
        
        if not vacante:
            return jsonify({'error': 'Vacante no encontrada'}), 404
        
        # Actualizar los campos de la vacante
        if 'nombre_vacante' in datos_actualizados:
            vacante.nombre_vacante = datos_actualizados['nombre_vacante']
        if 'descripcion' in datos_actualizados:
            vacante.descripcion = datos_actualizados['descripcion']
        if 'detalles' in datos_actualizados:
            vacante.detalles = datos_actualizados['detalles']
        
        # Actualizar la fecha de edición a la fecha actual
        vacante.fecha_edicion = datetime.utcnow()
        
        try:
            db.session.commit()
            return jsonify({'mensaje': 'Vacante actualizada exitosamente', 'vacante': vacante.to_dict()}), 200
        except Exception as e:
            return jsonify({'error': 'Error al actualizar la vacante en la base de datos', 'detalle': str(e)}), 500