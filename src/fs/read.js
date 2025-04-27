import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// __dirname yaratish
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const read = async () => {
    const filePath = path.join(__dirname, 'files', 'fileToRead.txt');

  try {
    // Tekshiramiz: fayl mavjudmi
    if (!fs.existsSync(filePath)) {
      throw new Error('FS operation failed');
    }

    // Fayl kontentini o'qiymiz
    const content = await fs.promises.readFile(filePath, 'utf-8');

    console.log(content);
  } catch (error) {
    throw new Error('FS operation failed');
  }
};

await read();