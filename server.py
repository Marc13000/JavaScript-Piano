from flask import Flask, request, jsonify
from flask import send_from_directory
app = Flask(__name__,
            static_url_path='', 
            static_folder='static',)
@app.route('/piano/<path:path>')
def send_report(path):
    return send_from_directory('static', path)

@app.route('/api/nextnote', methods=['GET', 'POST'])
def add_message(uuid):

    content = request.json
    print(content['mytext'])
    return jsonify({"uuid":uuid})

if __name__ == '__main__':
    app.run(host= '0.0.0.0',debug=True, port=9031)