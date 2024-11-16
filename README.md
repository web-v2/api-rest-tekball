<a href="https://node.org/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nodejs-colored.svg" width="200" height="200" alt="Angular" /></a>
<a href="https://www.typescriptlang.org/" target="_blank"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/typescript-colored.svg" width="200" height="200" alt="TypeScript" /></a>

# TekBall Backend - Node,Express, Typescript - SamirV2

<h2 align="center">
:construction: Proyecto en construcción :construction:
</h2>

## Development server 🚀

Run `npm start` for a dev server. Navigate to `http://localhost:3000/api/`. The application will automatically reload if you change any of the source files.

## Build 🚀

Run `npx tsc` to build the project. The build artifacts will be stored in the `dist/` directory.

URL: [https://api-rest-tekball-production.up.railway.app/api](https://api-rest-tekball-production.up.railway.app/api)

## API Reference

#### Get all users

```http
  GET /api/auth/usernames
```

#### POST Login

```http
  POST /api/auth/login
```

| Parameter  | Type     | Description                         |
| :--------- | :------- | :---------------------------------- |
| `username` | `string` | **Required**. user of item to fetch |
| `password` | `string` | **Required**. pass of item to fetch |

#### POST Register

```http
  POST /api/auth/register
```

| Parameter  | Type     | Description                         |
| :--------- | :------- | :---------------------------------- |
| `username` | `string` | **Required**. user of item to fetch |
| `password` | `string` | **Required**. pass of item to fetch |

#### Get All results challenge

```http
  GET /api/challenge/results
```

#### Get results challenge by username

```http
  GET /api/challenge/user/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

#### POST results challenge

```http
  POST /api/challenge/results
```

| Parameter     | Type     | Description                                |
| :------------ | :------- | :----------------------------------------- |
| `usuario`     | `string` | **Required**. usuario of item to fetch     |
| `n_aciertos`  | `string` | **Required**. n_aciertos of item to fetch  |
| `n_fallidos`  | `string` | **Required**. n_fallidos of item to fetch  |
| `totalPuntos` | `string` | **Required**. totalPuntos of item to fetch |

## Technologies

---

A list of technologies used within the project:

- [Node](https://node.org/): Version 22.9.0
- [Express](https://expressjs.com/es/): Version 4.21.1
- [Typescript](https://www.typescriptlang.org/): Version 5.6.3

## Skills 🛠 
bcrypt,body-paser,cors,express,fs-extra,serverless-http,uuid

## Autores ✒️

- **Samir Vergara V** - _Desarrollo_ - [web-v2](https://github.com/web-v2)

### Desarrollado por

```
Samir Vergara V - Elaboración propia
```

### 📁 Acceso al proyecto ⌨️

**Descarga o accede al código fuente del proyecto mediante el siguiente enlace:**

URL:[https://github.com/web-v2/api-rest-tekball](https://github.com/web-v2/api-rest-tekball)

## Licencia 📄

Este proyecto está bajo la Licencia (Tu Licencia) - mira el archivo [LICENSE.md](LICENSE.md) para detalles
[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)

## Expresiones de Gratitud 🎁

- Comenta a otros sobre este proyecto 📢
- Invita una cerveza 🍺 o un café ☕ a alguien del equipo.
- Da las gracias públicamente 🤓.

---

⌨️ con ❤️ por [web-v2](https://github.com/web-v2) 😊
