from flask import Blueprint, request, jsonify
from app.extensions import db
from app.models.UsuariosModel import RolModel

roles_bp = Blueprint('roles', __name__)

@roles_bp.route('/roles', methods=['GET'])
def obtener_roles():
    # Hacer querys desde instancia
    # query = db.session.query().filter()
    roles = RolModel.query.all() # Query en Python con Flask usando sqlalchemy

    # Convertir los datos a un JSON
    roles_json = [ {
        'id': r.id,
        'nombre_rol': r.nombre_rol,
        'usuarios' : [u.nombre_usuario for u in r.usuarios]
    
    } for r in roles_bp
    ]
    return jsonify(roles_json), 200

# Investigar como agregar un registro en la base de datos mediante sqlalchemy