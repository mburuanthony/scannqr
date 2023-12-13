import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { container, title } from "../assets/sharedstyles";

export default function HomeScreen() {
  return (
    <SafeAreaView style={container}>
      <Text style={title}>QR Scanner</Text>
    </SafeAreaView>
  );
}
