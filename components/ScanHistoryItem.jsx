import { useState } from "react";
import {
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  View,
  Text,
} from "react-native";
import * as WebBrowser from "expo-web-browser";
import * as Clipboard from "expo-clipboard";
import { qrDataIsUrl } from "../helpers/urlregex";
import { getTimediff } from "../helpers/dates";
import { ChevronIcon, CopiedIcon, CopyIcon } from "../assets/icons";
import { colors } from "../assets/colors";
import { text, textlight } from "../assets/sharedstyles";

const { width: WINDOW_WIDTH } = Dimensions.get("window");

export const ScanHistoryItem = ({ qrUrl, scanDate }) => {
  const [textCopied, setTextCopied] = useState(false);

  const onCopyQrTextToClipboard = async () => {
    await Clipboard.setStringAsync(qrUrl);

    setTextCopied(true);
  };

  const onOpenQrUrl = async () => {
    await WebBrowser.openBrowserAsync(qrUrl);
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={qrDataIsUrl(qrUrl) ? onOpenQrUrl : onCopyQrTextToClipboard}
    >
      <Text style={[text, styles.text]}>
        {qrDataIsUrl(qrUrl) ? "Link" : "Text"}
      </Text>
      <Text style={[text, styles.text]}>
        {qrUrl.length > 26 ? `${qrUrl.substring(0, 25)}...` : qrUrl}
      </Text>

      <Text style={[text, styles.text, { marginTop: 14 }]}>Scanned</Text>
      <Text style={[textlight, styles.text]}>{getTimediff(scanDate)}</Text>

      <View style={styles.touchable}>
        <Text style={text}>
          {qrDataIsUrl(qrUrl) ? "Open" : textCopied ? "Copied" : "Copy"}
        </Text>

        {qrDataIsUrl(qrUrl) ? (
          <ChevronIcon />
        ) : textCopied ? (
          <CopiedIcon color={colors.primary} />
        ) : (
          <CopyIcon color={colors.primary} />
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: WINDOW_WIDTH / 2 - 12,
    marginHorizontal: 2,
    marginBottom: 8,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderRadius: 4,
    borderColor: colors.divider,
    backgroundColor: colors.skyblue,
  },
  text: {
    marginTop: 5,
    marginHorizontal: 8,
  },
  touchable: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 8,
    paddingBottom: 4,
    marginTop: 24,
    borderTopWidth: 0.5,
    borderTopColor: colors.divider,
  },
});
