# Backend - Servidor de Usuarios

Servidor Node.js con Express que proporciona una API REST para obtener datos de usuarios.

## 🚀 Características

- API REST con Express.js
- Datos de usuarios con información completa (foto, nombre, rol, biografía, enlaces sociales)
- CORS habilitado para integración con frontend
- Múltiples endpoints para diferentes necesidades
- Respuestas JSON estructuradas

## 📋 Endpoints

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| GET | `/` | Información del servidor y endpoints disponibles |
| GET | `/api/users` | Obtener todos los usuarios |
| GET | `/api/users/:id` | Obtener usuario específico por ID |
| GET | `/api/users/random` | Obtener un usuario aleatorio |

## 🔧 Instalación

1. Instala las dependencias:
```bash
npm install
```

2. Inicia el servidor:
```bash
npm start
```

El servidor estará disponible en `http://localhost:3000`

## 📊 Formato de Datos

Cada usuario tiene la siguiente estructura:

```javascript
{
  id: 1,
  photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
  name: "Juan Pérez",
  role: "Frontend Developer",
  bio: "Desarrollador apasionado por crear experiencias de usuario excepcionales. Especializado en React y tecnologías modernas de frontend.",
  socialLinks: [
    { platform: "GitHub", url: "https://github.com/juanperez" },
    { platform: "LinkedIn", url: "https://linkedin.com/in/juanperez" },
    { platform: "Portfolio", url: "https://juanperez.dev" }
  ]
}
```

## 🛠️ Tecnologías

- **Node.js** - Runtime de JavaScript
- **Express.js** - Framework web
- **CORS** - Cross-Origin Resource Sharing

## 📝 Uso

### Obtener todos los usuarios
```bash
curl http://localhost:3000/api/users
```

### Obtener usuario por ID
```bash
curl http://localhost:3000/api/users/1
```

### Obtener usuario aleatorio
```bash
curl http://localhost:3000/api/users/random
```

## 🔄 Respuestas

Todas las respuestas exitosas tienen el formato:
```javascript
{
  "success": true,
  "data": {...}, // o [...] para arrays
  "total": 3 // solo en listados
}
```

Respuestas de error:
```javascript
{
  "success": false,
  "message": "Descripción del error"
}
```
