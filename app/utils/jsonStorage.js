import electron from "electron";
import path from "path";
import fs from "fs";

const userPath = (electron.app || electron.remote.app).getPath("userData");
const activePath = path.join(userPath, "store.json");

const getFile = () => {
  try {
    const file = fs.readFileSync(activePath);

    return JSON.parse(file);
  } catch (e) {
    // If we have nothing we should just get undefined and let the store config itself, should happen the first run only
    return undefined;
  }
};

const saveFile = (state: {}) => {
  fs.writeFileSync(activePath, JSON.stringify(state));
};

export default { getFile, saveFile };
