import { StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { container, title } from "../assets/sharedstyles";
import { colors } from "../assets/colors";

export default function Scanner() {
  return (
    <SafeAreaView style={[container, styles.xtrcontainer]}>
      <Text style={[title, styles.xtrtitle]}>QR Scanner</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  xtrcontainer: { backgroundColor: colors.primary },
  xtrtitle: { color: colors.white },
});
