from flask import Flask, Response, request, jsonify
from datetime import datetime
import json
from flask_cors import CORS
from shopping_details import Shop

# Create the Flask application object.
app = Flask(__name__,
            static_url_path='/',
            static_folder='static/class-ui/',
            template_folder='web/templates')

CORS(app)

@app.route("/api/health", methods=["GET"])
def get_health():
    t = str(datetime.now())
    msg = {
        "name": "6156_team_project_shoppinglist_microservice",
        "Status": "Connected",
        "at time": t
    }

    # DFF TODO Explain status codes, content type, ... ...
    result = Response(json.dumps(msg), status=200, content_type="application/json")

    return result


@app.route("/api/summary", methods=["GET"])
def showSummary():

    result = Shop.get_by_key(None)

    if result:
        rsp = Response(json.dumps(result), status=200, content_type="application.json")
    else:
        rsp = Response("NOT FOUND", status=404, content_type="text/plain")

    return rsp

@app.route("/shopping_list", methods=["GET"])
def get_all_items():
    result = Shop.get_by_key(None)

    if result:
        rsp = jsonify({"response": result})
    else:
        rsp = Response("NOT FOUND", status=404, content_type="text/plain")

    return rsp

@app.route("/show_list", methods=["GET"])
def showList():
    result = Shop.get_list()

    if result:
        rsp = jsonify({"response": result})
    else:
        rsp = Response("NOT FOUND", status=404, content_type="text/plain")

    return rsp


@app.route("/show_product/<id>", methods=["GET"])
def showProduct(id):
    result = Shop.get_product(id)

    if result:
        rsp = jsonify({"response": result})
    else:
        rsp = Response("NOT FOUND", status=404, content_type="text/plain")

    return rsp



""" 
Post body format:
        {
            "id": 3,
            "name": "Sample"
        }
POST request add new product
DELTE request delete existing product
"""
@app.route("/product", methods=["POST", "DELETE"])
def product_request():
        req_data = request.get_json()
        id = req_data['id']
        product = req_data['name']
        if request.method == "POST":
            Shop.add_product(product, id)
        if request.method == "DELETE":
            Shop.delete_product(product, id)
        return "I have your post request"

""" 
{
	"id": 5,
	"address": "Wesasdasdasdasday",
    "date": "2022-11-16"
}
POST request add new list
DELTE request delete existing list
GET request update date of existing list
"""

@app.route("/list", methods=["POST", "DELETE", "GET"])
def list_request():
        req_data = request.get_json()
        id = req_data['id']
        address = req_data['address']
        date = req_data['date']
        print("Request have id:{}, and the product:{}".format(id, address))
        if request.method == "POST":
            Shop.add_list(id, address, date)
        if request.method == "DELETE":
            Shop.delete_list(id, address, date)
        if request.method == "GET":
            Shop.update_list(id, date)
        return "I have your post request"


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5011)

