import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the current file's directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Paths
const uiDir = path.join(__dirname, 'src', 'components', 'ui');
const uiJsxBackupDir = path.join(__dirname, 'src', 'components', 'ui-jsx-backup');

// Create backup directory if it doesn't exist
if (!fs.existsSync(uiJsxBackupDir)) {
  fs.mkdirSync(uiJsxBackupDir, { recursive: true });
}

// Get all original .tsx files from ui directory
const tsxFiles = fs.readdirSync(uiDir)
  .filter(file => file.endsWith('.tsx'))
  .map(file => path.join(uiDir, file));

// Read button.jsx from the ui-jsx directory as a reference
const buttonJsxPath = path.join(__dirname, 'src', 'components', 'ui-jsx', 'button.jsx');
if (fs.existsSync(buttonJsxPath)) {
  const buttonJsxContent = fs.readFileSync(buttonJsxPath, 'utf8');
  console.log('Found existing button.jsx for reference');
}

// Function to convert TypeScript to JavaScript
function convertTsxToJsx(content) {
  // Make a backup of the content
  const backup = content;

  try {
    // Step 1: Remove type imports and type annotations
    let result = content
      // Remove type keyword in imports
      .replace(/import\s+.*?{\s*.*?type\s+.*?}\s+from\s+["'].*?["'];?/g, match => {
        return match.replace(/type\s+/g, '');
      })
      // Remove entire type-only imports
      .replace(/import\s+type\s+.*?from\s+["'].*?["'];?/g, '')

      // Remove interface declarations
      .replace(/export\s+(default\s+)?interface\s+\w+(\s+extends\s+.*?)?\s*{[\s\S]*?}/g, '')

      // Remove type declarations
      .replace(/export\s+(default\s+)?type\s+\w+(\s+)?=[\s\S]*?;/g, '')

      // Remove type parameters from generics
      .replace(/<.*?>/g, '')

      // Remove type annotations from variables and parameters
      .replace(/:\s*\w+(\[\])?(\s*\|\s*\w+(\[\])?)*\s*(?=[,)])/g, '')
      .replace(/:\s*\w+(\[\])?(\s*\|\s*\w+(\[\])?)*\s*(?=[=;])/g, '')

      // Remove "as const" expressions
      .replace(/\s+as\s+const/g, '')

      // Make sure all JSX elements don't have semicolons inside them
      .replace(/<\w+;/g, match => match.replace(';', ''))
      .replace(/\s+;/g, ';')

      // Fix the string that was erroneously truncated
      .replace(/"inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible(,|\n)/g,
               '"inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0"\n');

    // Fix missing quotes around variant values
    result = result.replace(/variant: {\s+default,/g, 'variant: {\n        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",')
      .replace(/destructive,/g, 'destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",')
      .replace(/outline,/g, 'outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",')
      .replace(/secondary,/g, 'secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",')
      .replace(/ghost,/g, 'ghost: "hover:bg-accent hover:text-accent-foreground",')
      .replace(/link,/g, 'link: "text-primary underline-offset-4 hover:underline",');

    // Fix missing quotes around size values
    result = result.replace(/size: {\s+default,/g, 'size: {\n        default: "h-9 px-4 py-2",')
      .replace(/sm,/g, 'sm: "h-8 rounded-md px-3 text-xs",')
      .replace(/lg,/g, 'lg: "h-10 rounded-md px-8",')
      .replace(/icon,/g, 'icon: "h-9 w-9",');

    // Fix defaultVariants
    result = result.replace(/defaultVariants: {\s+variant,\s+size,/g, 'defaultVariants: {\n      variant: "default",\n      size: "default"');

    // Remove semi-colons in JSX tags
    result = result.replace(/<Comp;/g, '<Comp')
      .replace(/className={.*?};/g, match => match.replace(';', ''))
      .replace(/ref={.*?};/g, match => match.replace(';', ''))
      .replace(/{\.\.\.props};/g, '{...props}');

    // Remove any remaining TypeScript interface syntax that might have been missed
    result = result.replace(/export interface.*?{.*?}/gs, '');

    // Fix import for utils
    result = result.replace(/from ["']@\/lib\/utils\.jsx["']/g, 'from "@/lib/utils"');

    // Remove all semicolons between import statements
    result = result.replace(/import.*?;(\s*import)/g, match => match.replace(';', ''));

    return result;
  } catch (error) {
    console.error(`Error converting file: ${error.message}`);
    return backup; // Return the original content in case of an error
  }
}

// Process each file
for (const tsxPath of tsxFiles) {
  try {
    // Read TSX file
    const tsxContent = fs.readFileSync(tsxPath, 'utf8');

    // Create backup of original TSX file
    const backupPath = path.join(uiJsxBackupDir, path.basename(tsxPath));
    fs.writeFileSync(backupPath, tsxContent);

    // Convert to JSX
    const jsxContent = convertTsxToJsx(tsxContent);

    // Write JSX file (replacing the .tsx extension with .jsx)
    const jsxPath = tsxPath.replace('.tsx', '.jsx');
    fs.writeFileSync(jsxPath, jsxContent);

    console.log(`Converted ${path.basename(tsxPath)} to ${path.basename(jsxPath)}`);
  } catch (error) {
    console.error(`Error processing ${tsxPath}: ${error.message}`);
  }
}

console.log('All files have been processed!');
