import { createContext, useContext, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const scanHistoryCtx = createContext({
  isProcessing: false,
  scanHistory: [],
  fetchScanHistory: () => {},
  updateScanHistory: ({ scanUrl, scanDate }) => {},
});

export const ScanHistoryProvider = ({ children }) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [scanHistory, setScanHistory] = useState([]);

  const fetchScanHistory = () => {
    setIsProcessing(true);

    AsyncStorage.getItem("scanhistory").then((res) => {
      const data = JSON.parse(res);

      if (data) {
        setScanHistory(data);
        setIsProcessing(false);
      } else {
        setIsProcessing(false);
      }
    });
  };

  const updateScanHistory = ({ scanUrl, scanDate }) => {
    setIsProcessing(true);

    AsyncStorage.getItem("scanhistory").then((res) => {
      const data = JSON.parse(res);
      const updatedData = data.push({ scanUrl: scanUrl, scanDate: scanDate });

      AsyncStorage.setItem("scanhistory", JSON.stringify(updatedData));
    });
  };

  return (
    <scanHistoryCtx.Provider
      value={{ isProcessing, scanHistory, fetchScanHistory, updateScanHistory }}
    >
      {children}
    </scanHistoryCtx.Provider>
  );
};

export const useScanHistoryCtx = () => useContext(scanHistoryCtx);
