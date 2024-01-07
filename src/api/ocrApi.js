import mime from "mime";

// Api ye bağlanarak resmi apiye gönderen ve cevabı alan fonksiyonum
export const ocrApi = async (
  image,
  setSendApi,
  setModal,
  navigation
) => {
  console.log("uri:" + image.uri + "\ntpye:" + mime.getType(image.uri));
  const formData = new FormData();
  formData.append("image", {
    uri: image.uri,
    type: mime.getType(image.uri),
    name: "selectedImage.jpg",
  });
  setSendApi(true);
  try {
    /// buradaki adres benim laptobun ip adresi ve portu da 5000 olarak ağ duvarında ayarladım
    const response = await fetch("http://192.168.43.184:5000/process_image", {
      method: "POST",
      body: formData,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    const result = await response.json();
    console.log("Python Response:", result);
    setSendApi(false);
    setModal(false);
    navigation.navigate("Cikti", { text: result.result });
  } catch (error) {
    console.error("Error sending image to Python:", error);
  } finally {
    setSendApi(false);
    setModal(false);
  }
};