const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000; // O el puerto que prefieras

// Servir archivos estáticos desde la carpeta "public"
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});