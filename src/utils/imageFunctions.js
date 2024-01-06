import * as ImagePicker from "expo-image-picker";
import mime from "mime";

// Api ye bağlanarak resmi apiye gönderen ve cevabı alan fonksiyonum
export const sendImageToPython = async (image, setSendApi) => {
  console.log("uri:" + image.uri + "\ntype: " + mime.getType(image.uri));
  const formData = new FormData();
  formData.append("image", {
    uri: image.uri,
    type: mime.getType(image.uri),
    name: "selectedImage.jpg",
  });
  setSendApi(true);
  try {
    const response = await fetch("http://192.168.43.184:5000/process_image", {
      method: "POST",
      body: formData,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    const result = await response.json();
    console.log("Python Response:", result);
  } catch (error) {
    console.error("Error sending image to Python:", error);
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
