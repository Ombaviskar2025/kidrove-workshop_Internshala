const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

function copyDir(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  const entries = fs.readdirSync(src, { withFileTypes: true });
  for (let entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

try {
  console.log('📦 Installing client dependencies...');
  execSync('npm install', { cwd: path.join(__dirname, 'client'), stdio: 'inherit' });

  console.log('🏗️ Building client...');
  execSync('npm run build', { cwd: path.join(__dirname, 'client'), stdio: 'inherit' });

  console.log('📂 Copying build output to root dist...');
  const distPath = path.join(__dirname, 'dist');
  if (fs.existsSync(distPath)) {
    fs.rmSync(distPath, { recursive: true, force: true });
  }
  copyDir(path.join(__dirname, 'client', 'dist'), distPath);
  console.log('✅ Build complete!');
} catch (error) {
  console.error('❌ Build failed:', error);
  process.exit(1);
}
