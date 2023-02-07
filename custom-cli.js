const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");
const { mkdir } = require("./directory");
const {
  generateComponentFiles,
  generateStoreFiles,
  generateModelFiles,
} = require("./file");
const { version } = require("./package.json");

yargs(hideBin(process.argv))
  .version(version)
  .command({
    command: ["generate", "g"],
    describe: "Generate a new file",
    builder: {
      name: {
        describe: "File name",
        demandOption: false,
        type: "string",
      },
      type: {
        describe: "React file type : component | store | model",
        demandOption: false,
        type: "string",
        default: "component",
      },
    },
    handler: function ({ name, type }) {
      console.log("asdasdasd", process.cwd());
      if (type !== "store" && type !== "model" && type !== "component") {
        throw Error("Check your types.");
      }
      const [pathName, fileName] = mkdir(type, name);

      if (type === "store") {
        generateStoreFiles(pathName, fileName);
      } else if (type === "model") {
        generateModelFiles(pathName, fileName);
      } else if (type === "component") {
        generateComponentFiles(pathName, fileName);
      } else {
        throw Error("Check your types.");
      }
    },
  })
  .option("help", {
    alias: "h",
  })
  .option("version", {
    alias: "v",
  })
  .option("name", {
    alias: "n",
    demandOption: true,
    type: "string",
    describe: "파일명",
  })
  .option("type", {
    alias: "t",
    type: "string",
    describe: `파일 타입 : component | store | model
- component: 컴포넌트 파일
- store: 글로벌 상태
- model: 모델`,
    default: "component",
  })
  .parse();
