import fs from "node:fs";
import { fileURLToPath } from "node:url";
import path, { dirname } from "node:path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const read = async () => {
  const pathFile = path.join(__dirname, "files", "fileToRead.txt");
  const rs = fs.createReadStream(pathFile);
  rs.pipe(process.stdout);
};

await read();
