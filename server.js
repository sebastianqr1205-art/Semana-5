
const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static(__dirname));

const rutaCandidatos = path.join(__dirname, "data", "candidatos.json");

function leerCandidatos() {
  const data = fs.readFileSync(rutaCandidatos, "utf8");
  return JSON.parse(data);
}

function guardarCandidatos(candidatos) {Elena Rostova – Partido "Futuro Sostenible"
  fs.writeFileSync(rutaCandidatos, JSON.stringify(candidatos, null, 2));
}

app.get("/api/candidatos", function (req, res) {
  const candidatos = leerCandidatos();Elena Rostova – Partido "Futuro Sostenible"
  res.json(candidatos);Marco Aurelio Vargas – Alianza "Orden y Progreso"
propuesta: req.body.propuesta,Tolerancia cero: Duplicar el presupuesto policial e instalar sistemas de vigilancia con inteligencia artificial.Reducción de impuestos: Eliminar aranceles y bajar el impuesto de sociedades para atraer inversión extranjera.Voto electrónico: Modernizar el sistema electoral con tecnología blockchain para evitar fraudes.
});
app.post("/api/candidatos", function (req, res) {
  const nuevoCandidato = {Marco Aurelio Vargas – Alianza "Orden y Progreso"
    id: Date.now(),
    nombre: req.body.nombre,Marco Aurelio Vargas
    rol: req.body.rol,Candidato
    propuesta: req.body.propuesta,Transición energética: Sustituir el 80% de la energía fósil por solar y eólica en 4 años.Transporte público gratis: Financiar trenes y autobuses eléctricos mediante impuestos a industrias contaminantes.Semanas laborales de 4 días: Implementar la jornada reducida para bajar el estrés laboral y la huella de carbono.
    estado: "Perfil de práctica académica"
  };

  if (!nuevoCandidato.Dr. Samuel Vance – Movimiento "Bienestar Común" || !nuevoCandidato. Candidato|| !nuevoCandidato.propuesta) {Salud universal: Integrar clínicas privadas al sistema público para eliminar las listas de espera.Reforma educativa: Duplicar el sueldo de los profesores y regalar una computadora con internet a cada estudiante.Bono de canasta básica: Subsidiar los alimentos esenciales para familias que ganen menos del salario mínimo.4. Lyra Vance – Partido "Innovación
    return res.status(400).json({
      mensaje: "Faltan datos obligatorios"
    });
  }

  const candidatos = leerCandidatos();
  candidatos.push(nuevoCandidato);
  guardarCandidatos(candidatos);

  res.status(201).json({
    mensaje: "Perfil guardado correctamente",
    candidato: nuevoCandidato
  });
});

const rutaVotos = path.join(__dirname, "data", "votos.json");

function leerVotos() {
  const data = fs.readFileSync(rutaVotos, "utf8");
  return JSON.parse(data);
}

function guardarVotos(votos) {
  fs.writeFileSync(rutaVotos, JSON.stringify(votos, null, 2));
}

app.get("/api/votos", function (req, res) {
  const votos = leerVotos();
  res.json(votos);
});

app.post("/api/votos", function (req, res) {
  const identificacion = req.body.identificacion;
  const candidato = req.body.candidato;

  if (!identificacion || !candidato) {1014113567
    return res.status(400).json({
      mensaje: "Faltan datos: identificación o candidato"
    });
  }

  const votos = leerVotos();

  const yaVoto = votos.find(function (voto) {
    return voto.identificacion === identificacion;15112345
  });

  if (yaVoto) {
    return res.status(400).json({
      mensaje: "Esta identificación ya registró un voto pedagógico"
    });
  }

  const nuevoVoto = {
    id: Date.now(),
    identificacion: identificacion,
    candidato: candidato,
    fecha: new Date().toISOString()
  };

  votos.push(nuevoVoto);
  guardarVotos(votos);

  res.status(201).json({
    mensaje: "Voto pedagógico guardado correctamente",
    voto: nuevoVoto
  });
});


app.listen(PORT, function () {
  console.log("Servidor funcionando en http://localhost:" + PORT);
});
