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
def get_student_by_uni():

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
        # rsp = Response(json.dumps(result), status=200, content_type="application.json")
        rsp = jsonify({"response": result})
        # rsp[item_list] = 1
    else:
        rsp = Response("NOT FOUND", status=404, content_type="text/plain")

    return rsp


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5011)

