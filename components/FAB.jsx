import { StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ScanIcon } from "../assets/icons";
import { colors } from "../assets/colors";

export const FAB = () => {
  const navigation = useNavigation();

  const onGotoScan = () => navigation.navigate("scan");

  return (
    <TouchableOpacity style={styles.container} onPress={onGotoScan}>
      <ScanIcon />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    width: 54,
    height: 54,
    position: "absolute",
    bottom: 8,
    right: 8,
    borderWidth: 0.5,
    borderColor: colors.yellow,
    borderRadius: 500,
    backgroundColor: colors.yellow,
  },
});
