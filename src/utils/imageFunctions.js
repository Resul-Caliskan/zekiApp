import * as ImagePicker from "expo-image-picker";

export const onProcessImage = (response, cropped, navigation) => {
  if (response) {
    setModal(false);
    navigation.navigate("ProcessImage", {
      uri: cropped,
    });
    setResponse(null);
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
    setModal(true);
  }
};
