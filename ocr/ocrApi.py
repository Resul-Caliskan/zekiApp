"""
Created on Sun Dec  18 14:23:04 2023

@author: resul
"""
from pix2text import Pix2Text, merge_line_texts
from flask import Flask, request, jsonify
from flask_cors import CORS  # CORS ekleyin

app = Flask(__name__)
CORS(app)  # CORS'u uygulamaya ekle

@app.route('/process_image', methods=['POST'])
def process_image():
    try:
        # Gelen resmi al
        image = request.files['image']
        p2t = Pix2Text(analyzer_config=dict(model_name='mfd'))
        outs = p2t(image, resized_shape=600)
        only_text = merge_line_texts(outs, auto_line_break=True)
        return jsonify({"result": only_text})

    except Exception as e:
        return jsonify({"error": str(e)})

if __name__ == '__main__':
    app.run(host='192.168.43.184',port=5000,debug=False)
