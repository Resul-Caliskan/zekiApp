// Api ye bağlanarak metni apiye gönderen ve cevabı alan fonksiyonum
export const zekiApi = async (text) => {
  console.log("text:" + text);
  const formData = new FormData();
  formData.append("text", text);
  try {
    const response = await fetch("http://192.168.43.184:5001/ask_zeki", {
      method: "POST",
      body: formData,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    const result = await response.json();
    console.log("Python Response:", result);
  } catch (error) {
    console.error("Error sending text to Python:", error);
  }
};
