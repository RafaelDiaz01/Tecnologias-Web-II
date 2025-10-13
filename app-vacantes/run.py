from app import create_app

app = create_app() # Devuelve una instancia de la aplicación Flask.

if __name__ == '__main__':
    # Usar puerto por defecto si no está en la configuración
    port = app.config.get('PORT', 5000)
    host = app.config.get('HOST', '127.0.0.1')
    debug = app.config.get('DEBUG', True)
    app.run(host=host, port=port, debug=debug)
    