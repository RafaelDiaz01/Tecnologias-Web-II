import os
class Config:
    DEBUG = True  # Para que se recargue la app al guardar (ctrl + s).
    PORT = 5000  # Se puede cambiar el puerto.

    # Construir la URI con valores por defecto razonables para evitar 'None' en la cadena
    DB_USER = os.getenv('DB_USER', 'root')
    DB_PASSWORD = os.getenv('DB_PASSWORD', '')
    DB_HOST = os.getenv('DB_HOST', 'localhost')
    DB_PORT = os.getenv('DB_PORT', '3306')
    DB_NAME = os.getenv('DB_NAME', 'vacantes')

    SQLALCHEMY_DATABASE_URI = (
        f"mysql+pymysql://{DB_USER}:{DB_PASSWORD}@{DB_HOST}:{DB_PORT}/{DB_NAME}"
    )