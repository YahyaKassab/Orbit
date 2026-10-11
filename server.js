// Run: node server.js  ->  open http://localhost:3000
const http = require("http");

const page = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Orbit</title>
<style>
  :root { --bg:#0e1a2b; --a:#ffd166; --b:#ef476f; --c:#06d6a0; --d:#8ecae6; }
  html,body { height:100%; margin:0; background:var(--bg); overflow:hidden; }
  .stage { height:100%; display:grid; place-items:center; }
  .sun { position:absolute; width:56px; height:56px; border-radius:50%; background:var(--a);
    box-shadow:0 0 60px 12px rgba(255,209,102,.55); animation:pulse 3s ease-in-out infinite; }
  .ring { position:absolute; border-radius:50%; border:1px solid rgba(142,202,230,.18);
    animation:spin linear infinite; }
  .ring i { position:absolute; top:-9px; left:50%; width:18px; height:18px; margin-left:-9px;
    border-radius:50%; background:currentColor; box-shadow:0 0 18px currentColor; }
  .r1 { width:160px; height:160px; animation-duration:4s; color:var(--b); }
  .r2 { width:280px; height:280px; animation-duration:8s; color:var(--c); animation-direction:reverse; }
  .r3 { width:400px; height:400px; animation-duration:14s; color:var(--d); }
  @keyframes spin { to { transform:rotate(360deg); } }
  @keyframes pulse { 50% { transform:scale(1.2); } }
</style>
</head>
<body>
<div class="stage">
  <div class="sun"></div>
  <div class="ring r1"><i></i></div>
  <div class="ring r2"><i></i></div>
  <div class="ring r3"><i></i></div>
</div>
</body>
</html>`;

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.end(page);
  })
  .listen(3000, () => console.log("Running at http://localhost:3000"));
