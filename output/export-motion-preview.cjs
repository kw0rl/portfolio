const fs = require('node:fs');
const path = require('node:path');
const fragment = fs.readFileSync(path.join(__dirname, 'collecting-navbar.html'), 'utf8');
const document = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex">
<title>Azrul — Motion preview</title>
<style>
:root { color-scheme:light; }
body { margin:0; padding:40px 20px; background:#e5e0d8; color:#242720; font-family:Arial,sans-serif; }
main { max-width:736px; margin:auto; }
h1 { font-size:24px; margin:0 0 12px; }
.intro { font-size:15px; line-height:1.6; margin:0 0 24px; }
.cursor-interaction { cursor:pointer; }
.back { display:inline-block; margin-top:26px; color:inherit; font-size:14px; }
@media(max-width:480px) { body { padding:24px 12px; } }
</style>
</head>
<body><main>
<h1>The collecting navbar</h1>
<p class="intro">Press <strong>Play journey</strong> below. Watch each section’s dot fly into the navbar, gently stretch it, and fill the ring.</p>
${fragment}
<a class="back" href="/">← Back to portfolio</a>
</main></body></html>`;
fs.writeFileSync(path.join(__dirname, '../frontend/public/motion-preview.html'), document, 'utf8');
console.log('Created public/motion-preview.html');
