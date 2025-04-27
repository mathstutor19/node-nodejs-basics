import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// __dirname yaratish
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const remove = async () => {
    const filePath = path.join(__dirname, 'files', 'fileToRemove.txt');

    try {
      // Fayl bor-yo'qligini tekshirish
      if (!fs.existsSync(filePath)) {
        throw new Error('FS operation failed');
      }
  
      // Faylni o'chirish
      await fs.promises.unlink(filePath);
    } catch (error) {
      throw new Error('FS operation failed');
    }
};

await remove();