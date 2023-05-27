from flask import Flask, request, jsonify, send_file, make_response
from flask_cors import CORS
from pymongo import MongoClient # Para conectarse a MongoDB
from bson import json_util # Para darle formato al query
from bson.json_util import dumps # Para darle formato al query
from operator import itemgetter
from bson.objectid import ObjectId
import random
import json
import urllib
import os
import sys


app = Flask(__name__) # Initialize flask App
CORS(app) # Enable CORS on server side

client = MongoClient() # Crea una instancia de cliente para MongoDB
# Definimos ruta a conectarse, usuario y password
mongouri = "mongodb://" + urllib.parse.quote_plus(sys.argv[1]) + ":"\
        + urllib.parse.quote_plus(sys.argv[2]) + "@127.0.0.1:27017/"
client = MongoClient(mongouri) # Creamos conexion
db = client['QuizzApp'] # Reemplaza database por el nombre de la base de datos

# Index route and most basic example
@app.route('/questions', methods=['POST'])
def questions():
    req = request.get_json()
    no_questions = req["questions"]
    data = db.QuizzAppQA.find() # Se hace el query find, cambia test por la coleccion
    data = json.loads(json_util.dumps(data)) # Se le da formato en diccionario
    for i in data:
        i["_id"] = str(i["_id"]["$oid"])
    new_questions = data[:]
    random.shuffle(new_questions)
    sliced_questions = new_questions[:no_questions]
    return sliced_questions

@app.route('/leaderboard', methods=['GET'])
def leaderboard():
    data = db.QuizzAppLeaderboard.find()
    data = json.loads(json_util.dumps(data))
    for i in data:
        i["_id"] = str(i["_id"]["$oid"])
    sorted_data = sorted(data, key=itemgetter('score'), reverse=True)
    return sorted_data

@app.route('/set_score', methods=['POST'])
def set_score():
    data = request.get_json()
    db.QuizzAppLeaderboard.insert_one(data)
    return "Score added"

if __name__ == '__main__':
    from waitress import serve
    # For local testing
    app.run(use_reloader=True, port=3001, threaded=True)
    # For deployment
    #tl.start()
    #serve(app, host="0.0.0.0", port=3001, url_scheme='https')

