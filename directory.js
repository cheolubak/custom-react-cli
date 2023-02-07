const fs = require("fs");
const path = require("path");

module.exports = {
  mkdir: (type, name) => {
    if (type === "store") {
      mkdirForStore(name);
    } else if (type === "model") {
      return mkdirForModel(name);
    } else if (type === "component") {
      return mkdirForComponent(name);
    }
  },
};

function mkdirCommon(name) {
  const temp = name.split("/");

  for (let i = 0; i < temp.length - 1; i++) {
    let tempPaths = [];
    for (let j = 0; j <= i; j++) {
      tempPaths.push(temp[j]);
    }
    const tempPathName = path.join(process.cwd(), ...tempPaths);
    const existsPath = fs.existsSync(tempPathName);
    if (!existsPath) {
      fs.mkdirSync(tempPathName);
    }
  }
}

function getFileNameForStore(name) {
  const temp = name.split("/");
  return temp[temp.length - 1].toLowerCase();
}

function getFileNameForComponent(name) {
  const temp = name.split("/");
  const tempName = temp[temp.length - 1].toLowerCase();
  return tempName
    .split("-")
    .map((x) => x.charAt(0).toUpperCase() + x.slice(1))
    .join("");
}

function mkdirForStore(name) {
  const temp = name.split("/");
  const fileName = getFileNameForStore(name);

  if (temp.length > 1) {
    const pathName = path.join(
      process.cwd(),
      temp.slice(0, temp.length - 1).join("/")
    );

    mkdirCommon(name);

    return [pathName, fileName];
  } else {
    const pathName = path.join(process.cwd(), "stores");
    const existsPath = fs.existsSync(pathName);
    if (!existsPath) {
      fs.mkdirSync(pathName);
    }
    return [pathName, fileName];
  }
}

function mkdirForModel(name) {
  const temp = name.split("/");
  const fileName = getFileNameForComponent(name);

  if (temp.length > 1) {
    const tempPath = temp.slice(0, temp.length - 1).join("/") + "/" + fileName;
    const pathName = path.join(
      process.cwd(),
      tempPath.charAt(0) === "/" ? tempPath.slice(1) : tempPath
    );

    mkdirCommon(name);

    const existsPath = fs.existsSync(pathName);
    if (!existsPath) {
      fs.mkdirSync(pathName);
    }
    return [pathName, fileName];
  } else {
    const pathName = path.join(process.cwd(), "models");
    const existsPath = fs.existsSync(pathName);
    if (!existsPath) {
      fs.mkdirSync(pathName);
    }
    return [pathName, fileName];
  }
}

function mkdirForComponent(name) {
  const temp = name.split("/");
  const fileName = getFileNameForComponent(name);
  const tempPath = path.join(process.cwd(), ...temp.slice(0, temp.length - 1));
  const pathName = path.join(tempPath, fileName);

  mkdirCommon(name);

  const existsPath = fs.existsSync(pathName);
  if (!existsPath) {
    fs.mkdirSync(pathName);
  }
  return [pathName, fileName];
}
