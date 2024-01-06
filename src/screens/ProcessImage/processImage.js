/**
 *   Written by Resul Çalışkan on 4.10.2023
 * This page uses the recognizeImage native module I wrote to convert the image
 * I'm thinking of adding an animation here while waiting
 *
 */

import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import TextRecognition from "@react-native-ml-kit/text-recognition";
import myColor from "../../constants/colors";

const ProcessImageScreen = ({ route }) => {
  const [recognizedText, setRecognizedText] = useState(
    " Fotoğraf Taranıyor..."
  );
  const uri = route.params.uri;

  useEffect(() => {
    if (uri) {
      proccessImage(uri);
    }
  }, [uri]);
  const handlerGonder = () => {};
  const proccessImage = async (url) => {
    if (url) {
      try {
        const result = await TextRecognition.recognize(uri);
        setRecognizedText(result.text);
      } catch (error) {
        console.log(error);
        setRecognizedText(
          "Fotoğraf Taranamadı Lütfen Fotoğrafı Daha Düzgün Ve Kaliteli Çekin"
        );
      }
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.question}>
          <Text style={styles.text}>{recognizedText}</Text>
        </View>
      </ScrollView>
    </View>
  );
};
export default ProcessImageScreen;

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    paddingVertical: 24,
    paddingHorizontal: 4,
    backgroundColor: myColor.blackBack,
    flex: 1,
  },
  question: {
    padding: 16,
    borderRadius: 16,
    borderColor: myColor.anticWhite,
    borderWidth: 1,
    backgroundColor: myColor.secondaryBlack,
  },
  text: {
    fontSize: 14,
    fontWeight: "500",
    color: myColor.lavanta,
    letterSpacing: 0.6,
  },
});
