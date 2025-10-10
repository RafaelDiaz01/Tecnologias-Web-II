# En este archivo iran las rutas o EndPoints que tengan que ver con el CRUD de usuarios.

from flask import Blueprint, jsonify, request
from app.data import usuarios

# Se crea el Blueprint
usuarios_bp = Blueprint('usuarios', __name__)

# Listar usuarios
@usuarios_bp.route('/usuarios', methods=['GET'])
def obtener_todos():
    return jsonify(usuarios)

# Crear usuarios
@usuarios_bp.route('/usuarios', methods=['POST'])
def crear_usuario():
    nuevo = request.get_json()
    
    if not nuevo.get('nombre') or not nuevo.get('password'):
        return jsonify({'error': 'Faltan campo obligatorios'}), 400
    
    nuevo ['id'] = len(usuarios) + 1
    usuarios.append(nuevo)
    
    return jsonify({'mensaje' : 'Usuario creado exitosamente ', 'usuario' : nuevo}),201

# Correr app
# Probar en Postman
# Buscar un usuario por id

# Actualizar informacion de un usuario