import * as ImagePicker from "expo-image-picker";
import mime from "mime";

// Api ye bağlanarak resmi apiye gönderen ve cevabı alan fonksiyonum
export const sendImageToPython = async (
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

export const onButtonPress = async (
  type,
  setResponse,
  setCropped,
  setModal,
  navigation
) => {
  let result;
  //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  // CROP İŞLEMİNDE BİR HATA VAR FAKAT DAHA DÜZELTEMEDİM ASPECT DEĞERİ DAHA BÜYÜK OLABİLİR BUNA BAK
  if (type === "capture") {
    result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
    });
  } else {
    result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
    });
  }

  if (!result.canceled) {
    const uri = result.assets[0].uri;
    setCropped(uri);
    setResponse(result.assets[0]);
    setModal(true);
  }
};
