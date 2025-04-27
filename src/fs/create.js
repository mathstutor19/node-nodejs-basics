import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const create = async () => {
    const filePath = path.join(__dirname, 'files', 'fresh.txt');

    try {
      if (fs.existsSync(filePath)) {
        throw new Error('FS operation failed');
      }
  
      await fs.promises.writeFile(filePath, 'I am fresh and young');
    } catch (error) {
      throw new Error('FS operation failed');
    }
};

await create();