# En este archivo iran las tablas o modelos que se van a crear en la base de datos.
from app.extensions import db  # Importar la instancia de db
from datetime import datetime

class VacantesModel(db.Model):
    __tablename__ = 'vacantes'  # Nombre de la tabla en la base de datos.
    
    id = db.Column (db.Integer, primary_key = True) # Llave primaria.
    nombre_vacante = db.Column (db.String(50), nullable = False, unique = True)
    descripcion = db.Column (db.Text)
    detalles = db.Column(db.Text)
    fecha_publicacion = db.Column(db.DateTime, default=datetime.utcnow)
    fecha_edicion = db.Column(db.DateTime, default=datetime.utcnow)
    estado = db.Column(db.String(20), default = "Disponible")
    creador = db.Column(db.String(50))
    postulador = db.Column(db.String(50))
    
    # def to_dict sirve para retornar un diccionario
    def to_dict(self):
        return {
            'id': self.id,
            'nombre_vacante': self.nombre_vacante,
            'descripcion': self.descripcion,
            'detalles': self.detalles,
            # En esta parte se serializa a ISO8601 para que JSON muestre fecha y hora correctamente.
            'fecha_publicacion': self.fecha_publicacion.isoformat() if self.fecha_publicacion else None,
            'fecha_edicion': self.fecha_edicion.isoformat() if self.fecha_edicion else None,
            'estado': self.estado,
            'creador': self.creador,
            'postulador': self.postulador
        }
    