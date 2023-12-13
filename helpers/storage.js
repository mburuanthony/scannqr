import * as FileSystem from "expo-file-system";

const base_uri = FileSystem.documentDirectory + "data/";
const FILENAME = "scanhistoryitems.json";

export async function checkDirExists(dirUri = base_uri) {
  const dirInfo = await FileSystem.getInfoAsync(dirUri);

  if (!dirInfo.exists) {
    await FileSystem.makeDirectoryAsync(dirUri, { intermediates: true });
  }
}

export async function getFileInfo(fileName) {
  checkDirExists(base_uri);

  return FileSystem.getInfoAsync(base_uri + fileName);
}

export async function readFile() {
  checkDirExists(base_uri);

  const uri = base_uri + FILENAME;
  const fileInfo = await FileSystem.getInfoAsync(uri);

  if (!fileInfo.exists) {
    return Promise.reject("File does not exist!");
  }

  if (fileInfo.isDirectory) {
    return Promise.reject("Should not be a directory! Only files allowed");
  }

  return new Promise((resolve, reject) => {
    FileSystem.readAsStringAsync(uri, {
      encoding: FileSystem.EncodingType.UTF8,
    })
      .then((data) => {
        resolve(JSON.parse(data));
      })
      .catch((e) => {
        reject(e);
      });
  });
}

export async function writeFile(fileName, data) {
  checkDirExists(base_uri);

  const uri = base_uri + fileName;

  return FileSystem.writeAsStringAsync(uri, JSON.stringify(data), {
    encoding: FileSystem.EncodingType.UTF8,
  });
}
