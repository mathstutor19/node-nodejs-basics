import fs from 'node:fs';
import zlib from 'node:zlib';
import { fileURLToPath } from 'node:url';
import path, { dirname } from 'node:path';
import { pipeline } from 'node:stream';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compress = async () => {
  const pathFile = path.join(__dirname, 'files', 'fileToCompress.txt');
  const pathDirectionFile = path.join(__dirname, 'files', 'archive.gz');

  const readStream = fs.createReadStream(pathFile);
  const writingStream = fs.createWriteStream(pathDirectionFile);

  const gzip = zlib.createGzip();

  // pipeline(srcPathFile, gzip, dstPathZFile, (error) => console.log(error));
  readStream.pipe(gzip).pipe(writingStream);
};

await compress();