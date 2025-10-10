from app import create_app

app = create_app() # Devuelve una instancia de la aplicación Flask.

if __name__ == 'main':
    app.run(port=app.config['PORT']) # Llama al método de la clase Flask.
    