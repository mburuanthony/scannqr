import { useState, useEffect } from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { BarCodeScanner } from "expo-barcode-scanner";
import * as Haptics from "expo-haptics";
import * as WebBrowser from "expo-web-browser";
import * as Clipboard from "expo-clipboard";
import Lottie from "lottie-react-native";
import { useScanHistoryCtx } from "../context/scanhistoryctx";
import { qrDataIsUrl } from "../helpers/urlregex";
import {
  CancelIcon,
  ChevronIcon,
  CopiedIcon,
  CopyIcon,
  RefreshIcon,
} from "../assets/icons";
import { container, text } from "../assets/sharedstyles";
import { colors } from "../assets/colors";

export default function Scanner() {
  const [hasPermission, setHasPermission] = useState(false);
  const [scanned, setScanned] = useState(false);
  const [qrData, setQrData] = useState("");
  const [textCopied, setTextCopied] = useState(false);
  const { updateScanHistory } = useScanHistoryCtx();

  const navigation = useNavigation();

  const onGoBack = () => navigation.goBack();

  const onQrCodeScanned = ({ data }) => {
    const now = new Date();
    updateScanHistory({ scanUrl: data, scanDate: now });

    setScanned(true);
    setQrData(data);

    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
  };

  const onCopyQrTextToClipboard = async () => {
    await Clipboard.setStringAsync(qrData);

    setTextCopied(true);
  };

  const onOpenQrUrl = async () => {
    await WebBrowser.openBrowserAsync(qrData);
  };

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted" ? true : false);
    };

    getBarCodeScannerPermissions();
  }, []);

  return (
    <SafeAreaView style={[container, styles.xtrcontainer]}>
      <View
        style={[
          styles.scannerctr,
          { borderColor: hasPermission ? colors.dividerlight : "" },
        ]}
      >
        {hasPermission ? (
          <BarCodeScanner
            onBarCodeScanned={scanned ? undefined : onQrCodeScanned}
            style={StyleSheet.absoluteFillObject}
          />
        ) : (
          <Text style={[text, styles.xtrtext]}>
            Allow Camera access to start scanning
          </Text>
        )}

        {hasPermission && scanned && (
          <TouchableOpacity
            style={styles.cancelbtnctr}
            onPress={() => setScanned(false)}
          >
            <View style={styles.cancelbutton}>
              <RefreshIcon />
            </View>
            <Text style={[text, styles.xtrtext, { marginTop: 12 }]}>
              Scan Again
            </Text>
          </TouchableOpacity>
        )}
      </View>

      <View
        style={[
          styles.actions,
          { flexDirection: scanned ? "column" : "column-reverse" },
        ]}
      >
        {scanned && (
          <TouchableOpacity
            onPress={
              qrDataIsUrl(qrData) ? onOpenQrUrl : onCopyQrTextToClipboard
            }
            style={styles.openlink}
          >
            <Text style={[text, styles.xtrtext]}>
              {qrData.length > 32 ? `${qrData.substring(0, 31)}...` : qrData}
            </Text>

            <View style={styles.open}>
              <Text style={[text, styles.xtrtext]}>
                {qrDataIsUrl(qrData) ? "Open" : textCopied ? "Copied" : "Copy"}
              </Text>
              {qrDataIsUrl(qrData) ? (
                <ChevronIcon width={4} height={9} color={colors.white} />
              ) : textCopied ? (
                <CopiedIcon />
              ) : (
                <CopyIcon />
              )}
            </View>
          </TouchableOpacity>
        )}

        <View style={styles.animated}>
          <View style={styles.animationctr}>
            {scanned ? (
              <Lottie
                source={require("../assets/animations/success.json")}
                autoPlay
                loop={false}
                style={styles.animation}
              />
            ) : (
              <Lottie
                source={require("../assets/animations/scanning.json")}
                autoPlay
                loop={true}
                style={styles.animation}
              />
            )}
          </View>

          <TouchableOpacity style={styles.cancelbutton} onPress={onGoBack}>
            <CancelIcon />
          </TouchableOpacity>
        </View>
      </View>
      <StatusBar style="light" animated={true} backgroundColor="transparent" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  xtrcontainer: {
    backgroundColor: colors.primary,
    justifyContent: "space-between",
  },
  xtrtext: { color: colors.white },
  scannerctr: {
    width: "94%",
    height: "60%",
    marginTop: 64,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderRadius: 8,
  },
  actions: {
    width: "100%",
    height: "19%",
    justifyContent: "space-between",
    padding: 8,
  },
  openlink: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 10,
    paddingHorizontal: 8,
    borderWidth: 0.5,
    borderRadius: 6,
    borderColor: colors.dividerdark,
    backgroundColor: colors.skyblue,
  },
  open: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    paddingVertical: 8,
    paddingHorizontal: 24,
    borderRadius: 6,
    backgroundColor: colors.skybluedark,
  },
  animated: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  animationctr: {
    width: 54,
    height: 54,
    alignItems: "center",
    justifyContent: "center",
  },
  animation: {
    width: 55,
    height: 55,
  },
  cancelbtnctr: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  cancelbutton: {
    alignItems: "center",
    justifyContent: "center",
    width: 50,
    height: 50,
    borderWidth: 0.5,
    borderColor: colors.yellow,
    borderRadius: 500,
    backgroundColor: colors.yellow,
  },
});
