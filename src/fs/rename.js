import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// __dirname yaratish
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rename = async () => {
    const oldPath = path.join(__dirname, 'files', 'wrongFilename.txt');
  const newPath = path.join(__dirname, 'files', 'properFilename.md');

  try {
    // Tekshiramiz: eski fayl mavjudmi
    if (!fs.existsSync(oldPath)) {
      throw new Error('FS operation failed');
    }

    // Tekshiramiz: yangi fayl allaqachon mavjudmi
    if (fs.existsSync(newPath)) {
      throw new Error('FS operation failed');
    }

    // Fayl nomini o'zgartiramiz
    await fs.promises.rename(oldPath, newPath);
  } catch (error) {
    throw new Error('FS operation failed');
  }
};

await rename();