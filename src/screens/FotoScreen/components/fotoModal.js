import {
  View,
  Text,
  Modal,
  StyleSheet,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React from "react";
import width from "../../../constants/dimension";
import myColor from "../../../constants/colors";

const FotografKaresi = ({
  modal,
  uri,
  closeModal,
  onProcessImage,
  sendApi,
}) => {
  return (
    <Modal
      animationType="slide"
      visible={modal}
      transparent={true}
      //onRequesClose android ve apple tv de geri butonuna basılınca ne olacağına karar verir
      onRequestClose={() => {
        closeModal();
      }}
    >
      <View key={uri} style={styles.container}>
        <Image
          resizeMode="contain"
          resizeMethod="scale"
          style={styles.image}
          source={{ uri: uri }}
        />
        {sendApi ? (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color={myColor.blackBack} />
            <Text style={styles.loadingText}>Resim Çözümleniyor...</Text>
          </View>
        ) : (
          <View style={styles.innerConatiner}>
            <TouchableOpacity
              onPress={() => {
                closeModal();
              }}
            >
              <Text style={styles.textGeri}> Geri</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                onProcessImage();
              }}
            >
              <Text style={styles.textIsle}> Resmi Tara</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </Modal>
  );
};
export default FotografKaresi;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: width / 4,
    left: width / 15,
    padding: 12,
    width: width / 1.12,
    height: width * 1.15,
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: myColor.lavanta,
    borderRadius: 4,
  },
  innerConatiner: {
    width: width / 1.2,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  image: {
    marginBottom: 15,
    width: width / 1.2,
    height: width / 1.12,
    borderRadius: 4,
  },
  textGeri: {
    marginRight: 20,
    marginBottom: 15,
    fontSize: 20,
    fontWeight: "700",
    color: myColor.red,
  },
  textIsle: {
    marginLeft: 10,
    fontSize: 20,
    marginBottom: 15,
    fontWeight: "700",
    color: myColor.blackBack,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: "600",
    color: myColor.blackBack,
  },
});
