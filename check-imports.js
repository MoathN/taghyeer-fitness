import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the current file's directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to recursively search for .jsx files
function findJsxFiles(directory) {
  const files = [];

  // Read the directory
  const items = fs.readdirSync(directory);

  for (const item of items) {
    const itemPath = path.join(directory, item);
    const stats = fs.statSync(itemPath);

    if (stats.isDirectory()) {
      // Recursively search subdirectories
      files.push(...findJsxFiles(itemPath));
    } else if (itemPath.endsWith('.jsx')) {
      files.push(itemPath);
    }
  }

  return files;
}

// Find all .jsx files in the src directory
const jsxFiles = findJsxFiles(path.join(__dirname, 'src'));

// Check each .jsx file for .tsx imports
let foundTsxImports = false;

jsxFiles.forEach(filePath => {
  const content = fs.readFileSync(filePath, 'utf8');

  // Check for .tsx imports
  const tsxImportMatch = content.match(/from\s+(['"])(.+?\.tsx)(['"])/g);

  if (tsxImportMatch) {
    console.log(`Found .tsx import in ${filePath}:`);
    console.log(tsxImportMatch);
    foundTsxImports = true;
  }
});

if (!foundTsxImports) {
  console.log('No .tsx imports found in any .jsx files!');
}
