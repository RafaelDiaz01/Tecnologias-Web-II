from flask import Flask
from app.routes.usuarios_routes import usuarios_bp
# Crear e iniciar nuestra aplicación, devolver una instancia de la clase Flask cn las configuraciones asignadas.

# Definimos la función
def create_app():
    # Instancear la clase
    app = Flask(__name__)
    
    # Cargar una configuracion
    app.config.from_object('config.Config')
    
    # Registrar blueprint
    app.register_blueprint(usuarios_bp, url_prefix='/usuarios')
    
    return app