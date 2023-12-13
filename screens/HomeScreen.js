import { useEffect, useCallback, useState } from "react";
import { StyleSheet, FlatList, RefreshControl, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useIsFocused } from "@react-navigation/native";
import Lottie from "lottie-react-native";
import { useScanHistoryCtx } from "../context/scanhistoryctx";
import { FAB } from "../components/FAB";
import { ScanHistoryItem } from "../components/ScanHistoryItem";
import { container, title } from "../assets/sharedstyles";
import { colors } from "../assets/colors";

export default function HomeScreen() {
  const [isrfreshing, setisrefreshing] = useState(false);
  const isFocused = useIsFocused();
  const { fetchScanHistory, scanHistory, isProcessing } = useScanHistoryCtx();

  const onRefresh = useCallback(() => {
    setisrefreshing(true);

    fetchScanHistory();

    setisrefreshing(false);
  }, []);

  useEffect(() => {
    fetchScanHistory();
  }, [isFocused]);

  return (
    <SafeAreaView style={container}>
      <Text style={[title, styles.title]}>QR Scanner</Text>

      {isProcessing ? (
        <Lottie
          source={require("../assets/animations/loading.json")}
          autoPlay
          loop={false}
          style={styles.animation}
        />
      ) : (
        <>
          <FlatList
            style={{
              alignSelf: "stretch",
              marginTop: 18,
            }}
            data={scanHistory}
            keyExtractor={(item, index) => item?.dateTime + index}
            showsVerticalScrollIndicator={false}
            numColumns={2}
            renderItem={({ item }) => (
              <ScanHistoryItem qrUrl={item?.Url} scanDate={item?.dateTime} />
            )}
            refreshControl={
              scanHistory.length !== 0 && (
                <RefreshControl
                  refreshing={isrfreshing}
                  onRefresh={onRefresh}
                  colors={[colors.skyblue, colors.skybluedark]}
                  progressBackgroundColor={colors.primary}
                />
              )
            }
          />
        </>
      )}

      <FAB />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  title: {
    marginTop: 16,
  },
});
