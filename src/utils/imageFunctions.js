import * as ImagePicker from "expo-image-picker";
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
