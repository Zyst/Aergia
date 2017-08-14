import electron from "electron";
import path from "path";
import fs from "fs";

const userPath = (electron.app || electron.remote.app).getPath("userData");
const workPath = path.join(userPath, "work.mp3");
// const breakPath = path.join(userPath, "break.mp3");

const getWorkFile = () => {
  try {
    if (fs.existsSync(workPath)) {
      return workPath;
    }

    // Download the sound file from github
    return null;
  } catch (e) {
    // If we have nothing we should just get undefined and let the store config itself, should happen the first run only
    return undefined;
  }
};

const playWorkFile = () => {
  if (fs.existsSync(workPath)) {
    const audio = new Audio();

    audio.play();
  }
};

export default { getWorkFile, playWorkFile };
