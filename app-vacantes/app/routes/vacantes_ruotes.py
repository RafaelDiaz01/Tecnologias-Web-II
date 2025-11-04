# En este archivo iran las rutas o EndPoints que tengan que ver con el CRUD de vacantes.
from flask import Blueprint, jsonify, request
from app.service.VacantesService import VacantesService
from flask_jwt_extended import get_jwt_identity, jwt_required, get_jwt

# Se crea el Blueprint
vacantes_bp = Blueprint('vacantes', __name__)

# Listar vacantes
@vacantes_bp.route('/', methods=['GET'])
def obtener_todas():
    vacantes = VacantesService.obtener_vacantes()

    if not vacantes:
        return jsonify({'mensaje': 'No hay vacantes disponibles'}), 404

    return jsonify(vacantes)

# Listar detalles de una vacante por id
@vacantes_bp.route('/<int:vacante_id>', methods=['GET'])
@jwt_required() # Proteger la ruta con JWT
def obtener_vacante_por_id(vacante_id):

    # Obtener el rol del usuario para verificar si tiene permisos
    rol = get_jwt().get('role')

    if rol != 'postulante':
        return jsonify({'error': 'No tienes permisos para ver los detalles de la vacante'}), 403

    vacante = VacantesService.obtener_vacante_por_id(vacante_id)

    if not vacante:
        return jsonify({'mensaje': 'Vacante no encontrada'}), 404

    return jsonify(vacante)


# Listar vacantes creadas por el usuario
@vacantes_bp.route('/mis_vacantes', methods=['GET'])
@jwt_required() # Proteger la ruta con JWT
def obtener_mis_vacantes():
    usuario_id = get_jwt().get('id_usuario')
    print("ID del usuario desde el token JWT:", usuario_id)
    vacantes = VacantesService.obtener_vacantes_por_usuario(usuario_id)

    if not vacantes:
        return jsonify({'mensaje': 'No has creado vacantes'}), 404

    return jsonify(vacantes)

# Listar vacantes disponible
@vacantes_bp.route('/disponibles', methods=['GET'])
@jwt_required() # Proteger la ruta con JWT
def obtener_disponibles():

    # Obtener el id del usuario para verificar si es un postulante (solo el postulante puede ver vacantes disponibles)
    rol = get_jwt().get('role')

    if rol != 'postulante':
        return jsonify({'error': 'No tienes permisos para ver vacantes disponibles'}), 403

    vacantes = VacantesService.obtener_vacantes_disponibles(todas=True)

    if not vacantes:
        return jsonify({'mensaje': 'No hay vacantes disponibles'}), 404

    return jsonify(vacantes)

# Listar ultimas 3 vacantes disponibles
@vacantes_bp.route('/disponibles/ultimas', methods=['GET'])
@jwt_required() # Proteger la ruta con JWT
def obtener_ultimas_disponibles():

    # Obtener el id del usuario para verificar si es un postulante (solo el postulante puede ver vacantes disponibles)
    rol = get_jwt().get('role')

    if rol != 'postulante':
        return jsonify({'error': 'No tienes permisos para ver vacantes disponibles'}), 403

    vacantes = VacantesService.obtener_vacantes_disponibles(todas=False)

    if not vacantes:
        return jsonify({'mensaje': 'No hay vacantes disponibles'}), 404

    return jsonify(vacantes)

# Crear vacantes
@vacantes_bp.route('/crear', methods=['POST'])
@jwt_required() # Proteger la ruta con JWT
def crear_vacante():

    # Obtener el id de usuario para verificar si es un reclutador (solo el reclutador puedo crear vacantes)
    rol = get_jwt().get('role')

    # Obtener el id del usuario para asignarlo a creador
    creador = get_jwt().get('id_usuario')


    if rol != 'reclutador':
        return jsonify({'error': 'No tienes permisos para crear vacantes'}), 403

    # Se obtienen los datos para crear la nueva vacante
    nueva = request.get_json() or {}
    
    respuesta = VacantesService.crear_vacante(
        nombre_vacante = nueva.get('nombre_vacante'),
        descripcion = nueva.get('descripcion'),
        detalles = nueva.get('detalles'),
        fecha_publicacion = nueva.get('fecha_publicacion'),
        fecha_edicion = nueva.get('fecha_edicion'),
        estado = nueva.get('estado'),
        creador = creador,
        postulador = nueva.get('postulador')
    )
    return respuesta

# Asignar vacante a postulante
@vacantes_bp.route('/asignar/<int:vacante_id>', methods=['PUT'])
@jwt_required() # Proteger la ruta con JWT
def asignar_vacante(vacante_id):
    # Obtener el id de usuario para verificar si es un reclutador (solo el reclutador puedo asignar vacantes)
    rol = get_jwt().get('role')

    if rol != 'reclutador':
        return jsonify({'error': 'No tienes permisos para asignar vacantes'}), 403

    # Obtener los datos para asignar la vacante
    datos_actualizados = request.get_json() or {}

    # Llamar al servicio para asignar la vacante
    vacante = VacantesService.asignar_vacante(vacante_id, datos_actualizados)

    return vacante

# Editar vacantes
@vacantes_bp.route('/<int:vacante_id>', methods=['PUT'])
@jwt_required() # Proteger la ruta con JWT
def actualizar_vacante(vacante_id):
    # Obtener los datos actualizados de la vacante desde la solicitud
    datos_actualizados = request.get_json() or {}

    # Llamar al servicio para actualizar la vacante
    vacante = VacantesService.actualizar_vacante(vacante_id, datos_actualizados)

    return vacante