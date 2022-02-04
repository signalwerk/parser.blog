import fs from "fs";
import { Head } from "@fsoc/dhow";

import { baseHeader } from "./_document";

import { parse } from "../packages/signalwerk.documentation.md/src/md-parser/index.js";
import { typeProcessor } from "../packages/signalwerk.documentation.md/src/jsx-writer/index";

// https://github.com/sethen/markdown-include
const includePattern = /#include\s("|')([^"']+)\1/gi;

function readMD(path) {
  const content = fs.readFileSync(path, "utf8");
  const withIncludes = `${content}`.replace(
    includePattern,
    (str, _, includePath) => {
      console.log(`include: '${includePath}'`);
      return readMD(includePath);
    }
  );
  return withIncludes;
}

const Home = () => {
  const data = parse(readMD("./content/index.md"));

  fs.writeFileSync("./render.json", JSON.stringify(data, null, 2));

  // console.log(data);

  return (
    <>
      <Head>
        {baseHeader}
        <title>{data.title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {data.description && (
          <meta name="description" content={data.description} />
        )}
      </Head>
      {typeProcessor(data)}
    </>
  );
};

export default Home;
