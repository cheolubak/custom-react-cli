const fs = require("fs");
const path = require("path");

const {
  componentData,
  styledData,
  propsData,
  indexData,
  storeData,
  modelData,
} = require("./data");

module.exports = {
  generateComponentFiles: (pathName, fileName) => {
    fs.writeFileSync(
      path.join(pathName, `${fileName}.tsx`),
      componentData(fileName)
    );
    fs.writeFileSync(
      path.join(pathName, `${fileName}Styled.tsx`),
      styledData(fileName)
    );
    fs.writeFileSync(
      path.join(pathName, `${fileName}Props.tsx`),
      propsData(fileName)
    );
    fs.writeFileSync(path.join(pathName, "index.ts"), indexData(fileName));

    console.log("Generate a new file!");
    console.log(`${pathName}/${fileName}.tsx`);
    console.log(`${pathName}/${fileName}Styled.tsx`);
    console.log(`${pathName}/${fileName}Props.tsx`);
    console.log(`${pathName}/index.ts`);
  },
  generateStoreFiles: (pathName, fileName) => {
    fs.writeFileSync(
      path.join(pathName, `${fileName}State.tsx`),
      storeData(fileName)
    );
  },
  generateModelFiles: (pathName, fileName) => {
    fs.writeFileSync(
      path.join(pathName, `${fileName.toLowerCase()}.tsx`),
      modelData(fileName)
    );
  },
};
