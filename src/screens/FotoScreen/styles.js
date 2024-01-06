import { StatusBar, StyleSheet } from "react-native";
import myColor from "../../constants/colors";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: myColor.blackBack,
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  topBar: {
    width: "100%",
    position: "absolute",
    top: StatusBar.currentHeight,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default styles;
