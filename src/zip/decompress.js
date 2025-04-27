import fs from "node:fs";
import zlib from "node:zlib";
import { fileURLToPath } from "node:url";
import path, { dirname } from "node:path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const decompress = async () => {
  const pathFile = path.join(__dirname, "files", "archive.gz");
  const pathDirectionFile = path.join(__dirname, "files", "fileToCompress.txt");

  const readStream = fs.createReadStream(pathFile);
  const writingStream = fs.createWriteStream(pathDirectionFile);
  const unzip = zlib.createUnzip();

  readStream.pipe(unzip).pipe(writingStream);
};

await decompress();
