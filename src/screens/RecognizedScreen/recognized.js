import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import myColor from "../../constants/colors";

const Cikti = ({ navigation, route }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [inputText, setInputText] = useState(route.params.text);
  const [question, setQuestion] = useState(null);

  return (
    <View style={styles.container}>
      {isEditing ? (
        <Text
          style={{ color: myColor.lightGreen, fontSize: 14, marginLeft: 20 }}
        >
          Metin Düzenleme modu açık metne tıklayın
        </Text>
      ) : (
        <Text
          style={{ color: myColor.lavanta, fontSize: 14, marginLeft: 20 }}
        ></Text>
      )}
      <ScrollView>
        <View style={styles.question}>
          <Text style={{ color: myColor.orange, fontSize: 14 }}>Metin:</Text>
          {isEditing ? (
            <TextInput
              style={styles.text}
              onChangeText={setInputText}
              value={inputText}
              onEndEditing={() => setIsEditing(false)}
              multiline
            />
          ) : (
            <Text style={styles.text}>{inputText}</Text>
          )}
        </View>
        <View style={[styles.question, { margin: 10 }]}>
          <Text style={{ color: myColor.orange, fontSize: 14 }}>Sorgu:</Text>
          <TextInput
            style={[styles.text, { color: myColor.lightGreen }]}
            onChangeText={setQuestion}
            value={question}
            placeholder="Çöz veya Özetle gibi Zekiye ne yapacağını yazın..."
            placeholderTextColor={myColor.blackBack}
          />
        </View>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            onPress={() => setIsEditing(!isEditing)}
            style={
              isEditing
                ? [styles.button, { borderColor: myColor.lightGreen }]
                : [styles.button]
            }
          >
            <Text
              style={
                isEditing
                  ? [styles.buttonText, { color: myColor.lightGreen }]
                  : [styles.buttonText]
              }
            >
              Metni Düzenle
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            disabled={question == null || isEditing ? true : false}
            onPress={() => {
              const soru = inputText + " " + question;
              // bilerek replace yaptım gerii gelip gelip sorgu gönderilmesin
              navigation.replace("Cozum", { soru: soru });
            }}
            style={
              question == null || isEditing
                ? [styles.button, { borderColor: myColor.red }]
                : [styles.button,{borderColor:myColor.lightGreen}]
            }
          >
            <Text
              style={
                question == null || isEditing
                  ? [styles.buttonText, { color: myColor.red }]
                  : [styles.buttonText,{color:myColor.lightGreen}]
              }
            >
              Zeki'ye Sor
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};
export default Cikti;

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
