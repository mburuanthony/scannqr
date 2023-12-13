import { createContext, useContext, useState } from "react";
import { getFileInfo, readFile, writeFile } from "../helpers/storage";

const scanHistoryCtx = createContext({
  isProcessing: false,
  scanHistory: [],
  fetchScanHistory: async () => {},
  updateScanHistory: async ({ scanUrl, scanDate }) => {},
});

const FILENAME = "scanhistoryitems.json";

export const ScanHistoryProvider = ({ children }) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [scanHistory, setScanHistory] = useState([]);

  const fetchScanHistory = async () => {
    setIsProcessing(true);

    try {
      const fileInfo = await getFileInfo(FILENAME);

      if (!fileInfo.exists) {
        await writeFile(FILENAME, []);
      }

      const data = await readFile(FILENAME);

      setScanHistory(data);
      setIsProcessing(false);
      return data;
    } catch (e) {
      setIsProcessing(false);
    }
  };

  const updateScanHistory = async ({ scanUrl, scanDate }) => {
    setIsProcessing(true);

    try {
      const prevdata = await fetchScanHistory();
      await writeFile(FILENAME, [
        ...prevdata,
        { Url: scanUrl, dateTime: scanDate },
      ]);
      setIsProcessing(false);
    } catch (e) {
      console.log(e);
      setIsProcessing(false);
    }
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
