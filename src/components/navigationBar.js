import React from "react";
import { View, TouchableOpacity, StyleSheet, Text } from "react-native";
import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";
import myColor from "../constants/colors";
import width from "../constants/dimension";

//state ilk camerada ise true değeri alacak keyboarda ise false
const NavigationBar = ({ navigation, state }) => {
  const onPressHandlerTara = () => {
    navigation.navigate("Tara");
  };
  const onPressHandlerYaz = () => {
    navigation.navigate("Yazma");
  };
  const onPressHandlerMenu = () => {
    navigation.navigate("Menu");
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.menu} onPress={onPressHandlerMenu}>
        <Icon name="menu" size={30} color={myColor.white} />
      </TouchableOpacity>
      <View
        style={
          state
            ? [styles.middleContainer, { backgroundColor: myColor.orange }]
            : [styles.middleContainer, { backgroundColor: myColor.turquaz }]
        }
      >
        <TouchableOpacity onPress={onPressHandlerTara}>
          <View
            style={
              state
                ? [styles.buton, { backgroundColor: myColor.darkOrange }]
                : styles.buton
            }
          >
            <Icon
              name="camera"
              size={30}
              color={state ? myColor.white : myColor.black}
            />
            <Text style={state ? styles.textSelected : styles.textUnselected}>
              Tara
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={onPressHandlerYaz}>
          <View
            style={
              !state
                ? [styles.buton, { backgroundColor: myColor.darkTurquaz }]
                : styles.buton
            }
          >
            <Icon
              name="keyboard"
              size={30}
              color={state ? myColor.white : myColor.black}
            />
            <Text style={state ? styles.textSelected : styles.textUnselected}>
              Yaz
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    padding: 10,
  },
  menu: {
    position: "absolute",
    left: 15,

    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  middleContainer: {
    justifyContent: "space-around",
    flexDirection: "row",
    height: width / 7,
    width: width / 2.7,
    borderTopLeftRadius: 110,
    borderBottomLeftRadius: 110,
    borderTopRightRadius: 110,
    borderBottomRightRadius: 110,
    alignItems: "flex-start",
  },
  buton: {
    width: width / 7,
    height: width / 7,
    borderRadius: width / 15,
    justifyContent: "center",
    marginHorizontal: 8,
    alignItems: "center",
  },
  textSelected: {
    color: myColor.white,
    fontSize: 16,
    fontWeight: "400",
  },
  textUnselected: {
    color: myColor.black,
    fontSize: 16,
    fontWeight: "400",
  },
});

export default NavigationBar;
