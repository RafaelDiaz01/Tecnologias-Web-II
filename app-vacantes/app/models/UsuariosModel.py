from app.extensions import db # Importar la instancia de db

# Extiende de db.Model
class UsuariosModel(db.Model):
    __tablename__ = 'usuarios'  # Nombre de la tabla en la base de datos, si no se define, SQLAlchemy lo genera automáticamente.

    id = db.Column(db.Integer, primary_key=True) # Llave primaria, por defecto es autoincremental
    nombre_usuario = db.Column(db.String(50), nullable=False, unique=True) # Campo obligatorio
    password = db.Column(db.String(100), nullable=False) # Se puede agregar más campos según sea necesario.

    def to_dict(self):
        return {
            'id': self.id,
            'nombre_usuario': self.nombre_usuario,
            'password': self.password
        }