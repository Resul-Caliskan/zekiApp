import {
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
  Dimensions,
} from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import myColor from "../../../constants/colors";
const SpecialButton = ({
  iconName,
  iconSize,
  text,
  isRow,
  onPress,
  statue,
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={statue == 0 ? styles.container1 : styles.container2}>
        <View style={isRow == true ? styles.row : styles.column}>
          <Icon
            name={iconName}
            size={iconSize}
            color={statue == 0 ? myColor.anticWhite : myColor.lightGreen}
          />
          <Text style={statue == 0 ? styles.text1 : styles.text2}>{text}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
export default SpecialButton;
const widthS = Dimensions.get("window").width;
const styles = StyleSheet.create({
  container1: {
    alignItems: "center",
    justifyContent: "center",
    width: widthS / 2.9,
    height: widthS / 2.9,
    margin: 16,
    padding: 16,
    backgroundColor: myColor.secondaryBlack,
    borderRadius: 12,
    borderRightWidth: 4,
    borderLeftWidth: 4,
    borderRightColor: myColor.anticWhite,
    borderLeftColor: myColor.anticWhite,
  },
  container2: {
    alignItems: "center",
    justifyContent: "center",
    width: widthS / 2.9,
    height: widthS / 2.9,
    margin: 16,
    padding: 16,
    backgroundColor: myColor.secondaryBlack,
    borderRadius: 16,
    borderBottomWidth: 4,
    borderRightWidth: 4,
    borderLeftWidth: 4,
    borderRightColor: myColor.lightGreen,
    borderLeftColor: myColor.lightGreen,
    borderBottomColor: myColor.lightGreen,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  column: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  text1: { fontSize: 18, fontWeight: "500", color: myColor.anticWhite },
  text2: { fontSize: 18, fontWeight: "500", color: myColor.lightGreen },
});
