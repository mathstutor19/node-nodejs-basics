import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// __dirname yaratish
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const list = async () => {
    const folderPath = path.join(__dirname, 'files');

    try {
      // Tekshiramiz: papka mavjudmi
      if (!fs.existsSync(folderPath)) {
        throw new Error('FS operation failed');
      }
  
      // Papkadagi barcha fayllarni o'qiymiz
      const files = await fs.promises.readdir(folderPath);
  
      console.log(files);
    } catch (error) {
      throw new Error('FS operation failed');
    }
};

await list();