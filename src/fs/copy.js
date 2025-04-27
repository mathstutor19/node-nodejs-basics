import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const copy = async () => {
    const sourceDir = path.join(__dirname, 'files');
  const destinationDir = path.join(__dirname, 'files_copy');

  try {
    // Check if source folder exists
    if (!fs.existsSync(sourceDir)) {
      throw new Error('FS operation failed');
    }

    // Check if destination folder already exists
    if (fs.existsSync(destinationDir)) {
      throw new Error('FS operation failed');
    }

    // Create destination folder
    await fs.promises.mkdir(destinationDir, { recursive: true });

    // Read files from source directory
    const files = await fs.promises.readdir(sourceDir);

    // Copy each file
    for (const file of files) {
      const sourceFile = path.join(sourceDir, file);
      const destinationFile = path.join(destinationDir, file);

      await fs.promises.copyFile(sourceFile, destinationFile);
    }
  } catch (error) {
    throw new Error('FS operation failed');
  }
};

await copy();
