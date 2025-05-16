# -*- coding: utf-8 -*-
"""
Created on Sun Dec  23 10:20:04 2023

@author: resul
"""

from ChatGptBot import ChatGPTAutomation 
from flask import Flask, request, jsonify
from flask_cors import CORS  # CORS ekleyin

app = Flask(__name__)
CORS(app)  # CORS'u uygulamaya ekle

@app.route('/ask_zeki', methods=['POST'])
def process_image():
    print("Current URL:", request.base_url)
    try:
        json_data = request.get_json()  # JSON verisini al
        if json_data and 'text' in json_data:
            prompt = json_data['text']  # 'text' anahtarını kontrol et ve al
        else:
            return jsonify({"error": "No text in the request"})
        
        # Chrome sürücüsünün bilgisayarınıza yüklendiği yolu tanımlayın
        chrome_driver_path = r"C:\Users\resul\.spyder-py3\drivers\chromedriver-win64\chromedriver.exe"

        # r'"..."' söz dizimi gereklidir çünkü "Program Dosyaları" içindeki alan 
        # chrome_path'ımdaki
        chrome_path = r'"C:\Program Files\Google\Chrome\Application\chrome.exe"' 
        print("girdi")
        # Bir örnek oluştur
        chatgpt = ChatGPTAutomation(chrome_path, chrome_driver_path)
        print("girmedi")
        # Bir istem tanımlayın ve onu chatGPT'ye gönderin
        soru=str(prompt)
        print(soru)
        chatgpt.send_prompt_to_chatgpt(soru) 

        # ChatGPT'den son yanıtı al
        response = chatgpt.return_last_response() 
        print (response) 
        return jsonify({"result": response})

        # Görüşmeyi bir metin dosyasına kaydedin
        file_name = "conversation.txt"
        chatgpt.save_conversation(file_name) 

        # Tarayıcıyı kapatın ve WebDriver oturumunu sonlandır
        chatgpt.quit()

    except Exception as e:
        print(e)
        return jsonify({"error": str(e)})

if __name__ == '__main__':
    app.run(host='192.168.43.184',port='5001',debug=False)
