from flask import Flask, jsonify

app = Flask(__name__)

usuarios = [
    {"id" : 1, "nombre" : "Rafael"},
    {"id" : 2, "nombre" : "Ángel"},
    {"id" : 3, "nombre" : "Ricardo"}
    ]

# Decorador route
@app.route('/')

# Función de la ruta
def home():
    return "Hola, desde flask"

@app.route('/usuarios')
def obtener_usuarios():
    return jsonify(usuarios)

# Si se activa el Debug, el servidor se reinicia cuando se guarden los cambios
# app.run(debug=True, port=5001), asi se puede cambiar el servidor
if __name__ == '__main__':
    app.run(debug=True)