const express = require("express");
const path = require("path");
const objDiscos = require("../discos.json");
const PORT = 3000;
const app = express();
const home = path.join(__dirname, "../client", "index.html");

// Middleware para archivos de imagen, css, scripts, etc ("recursos estáticos")
app.use(express.static(path.join(__dirname , "../client")));


app.get("/", (req, res) => {
    res.sendFile(home);
});

app.get("/discos", (req, res) => {
    const titulo = req.query.titulo;
    const artista = req.query.artista;
    const lanzamiento = parseInt(req.query.lanzamiento);
    let resultado = objDiscos.discos;
    

    if (titulo) {
        resultado = resultado.filter(elemento => elemento.titulo.toLowerCase().includes(titulo.toLowerCase()));
    }

    if (artista) {
        resultado = resultado.filter(elemento => elemento.artista.toLowerCase().includes(artista.toLowerCase()));
    }

    if (lanzamiento) {
        resultado = resultado.filter(elemento => elemento.lanzamiento === lanzamiento);
    }
    
    res.json(resultado);
    
});

app.listen(PORT, () => {
    console.log(`Escuchando en el puerto ${PORT}`);
})
