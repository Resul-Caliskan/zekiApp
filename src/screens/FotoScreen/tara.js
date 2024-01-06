import { View, Text } from "react-native";
import React, { useState } from "react";
import styles from "./styles";
import NavigationBar from "../../components/navigationBar";
import SpecialButton from "./components/buton";
import { onButtonPress, onProcessImage } from "../../utils/imageFunctions";
import FotografKaresi from "./components/fotoModal";

export default function Tara({ navigation }) {
  const [response, setResponse] = useState(null);
  const [cropped, setCropped] = useState("");
  const [modal, setModal] = useState(true);

  const closeModal = () => {
    setModal(false);
    setResponse(null);
  };

  const handleButtonPress = async (type) => {
    await onButtonPress(type, setResponse, setCropped, setModal, navigation);
    console.log("Cropped uri:", cropped);
  };

  const handleProcessImage = () => {
    onProcessImage(response, cropped, navigation);
  };
  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <NavigationBar state={true} navigation={navigation} />
      </View>

      <View style={styles.buttonContainer}>
        <SpecialButton
          iconName={"photo"}
          iconSize={45}
          statue={0}
          text={"Galeriden\n      Seç"}
          onPress={() => {
            handleButtonPress("library");
          }}
        />
        <SpecialButton
          iconName={"camera"}
          iconSize={45}
          statue={1}
          text={"Fotoğraf \n     Çek"}
          onPress={() => {
            handleButtonPress("capture");
          }}
        />
      </View>
      {cropped != "" && modal && (
        <FotografKaresi
          uri={cropped}
          closeModal={closeModal}
          onProcessImage={handleProcessImage}
          modal={modal}
        />
      )}
    </View>
  );
}
