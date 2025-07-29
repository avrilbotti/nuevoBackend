const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const proyecto = {
  nombre: "WorkNow",
  descripcion: "Una plataforma que conecta soluciones tecnológicas con personas y empresas.",
  estado: "En desarrollo"
};

const equipo = [
  {
    id: 1,
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
    name: "María Rodríguez",
    role: "CEO & Fundadora",
    bio: "Visionaria tecnológica con más de 15 años de experiencia en desarrollo de software y gestión de equipos.",
    socialLinks: [
      { platform: "GitHub", url: "https://github.com" },
      { platform: "LinkedIn", url: "https://linkedin.com" },
      { platform: "Portfolio", url: "https://example.com" }
    ]
  },
  {
    id: 2,
    photo: "https://randomuser.me/api/portraits/men/32.jpg",
    name: "Carlos Sánchez",
    role: "CTO",
    bio: "Especialista en arquitectura de sistemas y soluciones escalables. Apasionado por la inteligencia artificial.",
    socialLinks: [
      { platform: "GitHub", url: "https://github.com" },
      { platform: "LinkedIn", url: "https://linkedin.com" }
    ]
  },
  {
    id: 3,
    photo: "https://randomuser.me/api/portraits/women/65.jpg",
    name: "Laura Fernández",
    role: "Frontend Lead",
    bio: "Experta en React y diseño UX/UI. Crea interfaces que combinan belleza y funcionalidad.",
    socialLinks: [
      { platform: "GitHub", url: "https://github.com" },
      { platform: "Dribbble", url: "https://dribbble.com" }
    ]
  },
  {
    id: 4,
    photo: "https://randomuser.me/api/portraits/men/75.jpg",
    name: "David González",
    role: "Backend Engineer",
    bio: "Especialista en Node.js y bases de datos. Construye la columna vertebral de nuestras soluciones.",
    socialLinks: [
      { platform: "GitHub", url: "https://github.com" }
    ]
  },
  {
    id: 5,
    photo: "https://randomuser.me/api/portraits/women/90.jpg",
    name: "Ana Martínez",
    role: "DevOps Engineer",
    bio: "Gurú de la infraestructura en la nube y automatización de despliegues.",
    socialLinks: [
      { platform: "GitHub", url: "https://github.com" },
      { platform: "Twitter", url: "https://twitter.com" }
    ]
  },
  {
    id: 6,
    photo: "https://randomuser.me/api/portraits/men/22.jpg",
    name: "Jorge López",
    role: "AI Specialist",
    bio: "Desarrolla algoritmos de aprendizaje automático que potencian nuestras soluciones.",
    socialLinks: [
      { platform: "GitHub", url: "https://github.com" },
      { platform: "Kaggle", url: "https://kaggle.com" }
    ]
  }
];

app.get('/', (req, res) => {
  res.send('Servidor funcionando correctamente ✅');
});

app.get('/equipo', (req, res) => {
  res.json(equipo);
});

app.get('/proyecto', (req, res) => {
  res.json(proyecto);
});

app.post('/contacto', (req, res) => {
  const { nombre, email, mensaje } = req.body;

  console.log("📬 Nuevo mensaje de contacto:");
  console.log("Nombre:", nombre);
  console.log("Email:", email);
  console.log("Mensaje:", mensaje);

  res.json({ success: true, message: "Mensaje recibido correctamente." });
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});
