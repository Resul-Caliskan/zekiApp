import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
} from "react-native";
import myColor from "../../constants/colors";
import { zekiApi } from "../../api/zekiApi";

const Cozum = ({ route }) => {
  const [inputText, setInputText] = useState(route.params.soru);
  const [response, setResponse] = useState(null);
  useEffect(() => {
    // Call zekiApi function here and update inputText
    zekiApi(inputText)
      .then((result) => {
        setResponse(result);
      })
      .catch((error) => {
        console.error("Error calling zekiApi:", error);
      });
  }, []);
  return (
    <View style={styles.container}>
      <ScrollView>
        {response == null ? (
          <View style={styles.question}>
            <ActivityIndicator size={"large"} color={myColor.lavanta} />
            <Text style={[styles.text, { color: myColor.lightGreen }]}>
              Zeki soruyu çözüyor....{"\n"}Sabrınız için Teşekkürler
            </Text>
          </View>
        ) : (
          <View style={styles.question}>
            <Text style={styles.text}>{response}</Text>
          </View>
        )}
        <View style={styles.buttonsContainer}>
          {/*** BUraya testler ve videolar filan gelecek */}
        </View>
      </ScrollView>
    </View>
  );
};
export default Cozum;

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
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },
  button: {
    padding: 10,
    backgroundColor: myColor.secondaryBlack,
    borderRadius: 10,
    borderBottomWidth: 1,
    borderColor: myColor.lavanta,
    borderEndWidth: 0.5,
  },
  buttonText: {
    color: myColor.lavanta,
    fontSize: 18,
    padding: 2,
  },
});
