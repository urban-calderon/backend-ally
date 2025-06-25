# **Backend Service** 🏗️🚀

---

🔹 **API** en **Node.js** + **Express** + **TypeScript** para servicios de autenticación y **endpoints** esenciales para la aplicación **Dashboard Ally**.

---

## **🛠️ Tecnologías Utilizadas**

Estas son las tecnologías principales con las que se construyó este proyecto:

* **Node.js** (v18+) 🟢
* **Express** (Framework web para Node.js) ⚡
* **Prisma** (ORM para Node.js y TypeScript) 💿

---

## **⚙️ Requisitos Previos**

Asegúrate de tener instalado lo siguiente antes de empezar:

* **Node.js** (v18 o superior) 📦
* **npm** (administrador de paquetes de Node.js) 🌐
* **Docker** (para la base de datos) 🐳

---

## **⚡ Configuración Rápida**

Sigue estos pasos para levantar el proyecto en tu entorno local:

1.  **Clona el repositorio:**

    ```bash
    git clone [https://github.com/urban-calderon/backend-ally](https://github.com/urban-calderon/backend-ally)
    cd backend-ally
    ```

2.  **Configura las variables de entorno:**
    * Crea un archivo `.env` en la raíz del proyecto.
    * Agrega las siguientes variables:

    ```bash
    POSTGRES_URL=postgresql://postgres:admin123@localhost:5433/newDB
    POSTGRES_USER=postgres
    POSTGRES_DB=ALLYDB
    POSTGRES_PORT=5432
    POSTGRES_PASSWORD=admin123

    JWT_SEED=ASDhkjasdhkjaSHDKJASHDKJ18923
    NODE_ENV=development
    ```

3.  **Instala las dependencias:**

    ```bash
    npm install
    ```

4.  **Ejecuta Docker para la base de datos:**

    ```bash
    docker compose up -d
    ```

5.  **Ejecuta las migraciones de Prisma:**

    ```bash
    npx prisma migrate dev --name init
    ```

6.  **Inicia el proyecto:**

    ```bash
    npm run dev
    ```

---

## **📡 Endpoints de la API**

Aquí se detallan los **endpoints** disponibles y cómo interactuar con ellos:

### Autenticación 🔑

* **`POST /api/auth/login`**: Autenticación de usuarios.
    ```json
    {
        "email": "user@email.com",
        "password": "algun-pass"
    }
    ```
* **`POST /api/auth/register`**: Registro de nuevos usuarios.
    ```json
    {
        "name": "User New",
        "email": "user@email.com",
        "password": "algun-pass"
    }
    ```

### Gestión de Usuarios 🧑‍💻

* **`GET /api/users`**: Obtiene la lista completa de usuarios.
    ```json
    {
        "success": true,
        "users": [
            {
                "id": 3,
                "fullName": "Fernando Perez",
                "email": "fere@email.com",
                "createdAt": "2025-06-25T05:09:38.385Z",
                "lastLoginAt": null
            },
            {
                "id": 4,
                "fullName": "Eva Luna",
                "email": "eva@email.com",
                "createdAt": "2025-06-25T05:21:00.885Z",
                "lastLoginAt": null
            }
        ]
    }
    ```

### Gestión de Tareas (TODOs) ✅

* **`GET /api/tasks`**: Obtiene la lista de tareas (TODOs).
    ```json
    {
        "success": true,
        "data": [
            {
                "id": 1,
                "text": "Realizar curso de springboot",
                "completed": false
            },
            {
                "id": 3,
                "text": "Refactorizar la aplicación",
                "completed": false
            }
        ]
    }
    ```

### Información de Países 🌎

* **`GET /api/countries`**: Obtiene la lista de países.
    ```json
    {
        "success": true,
        "data": [
            {
                "id": 1,
                "code": "MX",
                "name": "México",
                "city": "Ciudad de Mexico"
            },
            {
                "id": 2,
                "code": "US",
                "name": "Estados Unidos",
                "city": "Washington D. C."
            }
        ]
    }
    ```
