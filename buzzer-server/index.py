from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


buzzers = []
state = False


@app.route('/getlatestbuzz', methods=["POST"])
def buzzname():
    bz = ""
    try:
        bz = buzzers[0]
    except:
        bz = ""

    return jsonify(bz)

# add new user to buzzer list


@app.route('/buzz', methods=["POST"])
def add_buzzer():
    if state:
        buzzer = request.get_json()
        print(buzzer['name'])
        buzzers.append(buzzer['name'])
        print(buzzers)
        return jsonify(buzzers[0] == buzzer['name'])

# get first buzz in list


@app.route('/getlatestbuzz', methods=["POST"])
def get_first_buzz():
    bz = ""
    try:
        bz = buzzers[0]
    except:
        bz = ""

    return jsonify(bz)


@app.route("/enablebuzzer", methods=["POST"])
def enable_buzzer():
    global state
    state = True
    return jsonify(state)


@app.route("/disablebuzzer", methods=["POST"])
def disable_buzzer():
    global state
    state = False
    global buzzers
    buzzers = []

    return jsonify(state)


if __name__ == '__main__':
    app.run(debug=True, port=3000, host="0.0.0.0")
