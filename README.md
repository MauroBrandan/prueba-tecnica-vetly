# Prueba Técnica - Frontend

### Tecnologías

- Vite + React
- Auth0
- Wouter
- Tailwind CSS
- Eslint con StandarJS

### Uso

Instalar dependencias

```bash
npm install
```

Crear un archivo `.env.local`. Con las siguientes variables de entorno:

```bash
VITE_AUTH0_DOMAIN=
VITE_AUTH0_CLIENT_ID=
VITE_API_URL=http://localhost:5555
```

Correr servidor:

```bash
npm run server
```

Correr aplicación en modo de desarrollo

```bash
npm run dev
```

# Mi solución

Comencé decidiéndome por usar Vite, para tener un entorno configurado donde usar React.

Para los estilos use Tailwind CSS, para poder estilar rapido y centrarme en la lógica.

Para las rutas use Wouter. Una alternativa a React Router, mas liviana y practica. Mejorando el tamaño de la aplicación, y por ende su rendimiento. Además que implementa react hooks.

Agregue mi propio “formulario” y contexto para elegir el tipo de usuario y manejar el usuario dentro de la aplicación. Ya que según la documentación de Auth0, no es recomendable usar el formulario embebido. Por lo que use mi formulario para guardar los datos en el LocalStorage (para simular una petición a una base de datos). Igualmente se hace la autenticación con Auth0.

### Estructura del proyecto

En el punto de entrada de la aplicaciones (`main.jsx`) tenemos dos providers:

- `<Auth0Provider />` : Para poder realizar la autenticación con `Auth0`. Y acceder a la información del usuario autenticado y si este esta autenticado o no.
- `<UserProvider />`: Para administrar el estado del usuario dentro de la aplicación, a través del contexto, y realizar interacciones con una API fake de usuarios para registrar y actualizar usuarios.

Después tenemos las paginas:

- `Home`: Donde tenemos las categorías, el contenido de la categoría seleccionada y un mensaje de bienvenida personalizado para usuarios autenticados. También maneja la redirección de usuarios no autenticados o sin un tipo asignado.
- `Login`: Maneja el formulario de inicio de sesión o registro, y redirige a los usuarios según su estado de autenticación y tipo de usuario. También permite a los usuarios autenticados seleccionar su tipo y continuar como invitado si no están autenticados.
- `User`: Permite al usuario ver y editar su información de perfil, incluido el tipo de usuario. También proporciona la opción de entrar como administrador y muestra un formulario de administrador si se selecciona esa opción.

Use dos APIs fake para obtener los datos:

- `users`: Para gestionar la creación, búsqueda y actualización de usuarios en el LocalStorage.
- `categories`: Para administrar y acceder a las categorías de la aplicación. Permite personalizar las categorías disponibles según el tipo de usuario.

### Challenges

> 1- Inicio de sesión

- ✅ Al presionar el botón `Iniciar sesión` mostrar Auth0
- ✅ Permitir ingresar como Invitado
- ✅ Al crear una nueva cuenta elegir el tipo de usuario
  - Esto lo realizo después de la autenticación y lo guardo en el objeto `user` del `UserContext`. Ya que Auth0 no me permite guardar esta información.
- ✅ Cargar variables de sesión
  - Las tengo en `user` del `UserContext`.
- ✅ Cambios en la UI dependiendo si esta autenticado o no
- ✅ Llamada a una API para obtener los permisos
  - Lo hago con `getUserByEmail` en `UserContext`. `getUserByEmail` proviene de la API fake.
  - El JSON que me devuelve esta simplificado para que solo me indique el tipo de usuario.

> 2- Cerrar Sesión

- ✅ Cerrar Sesión y blanquear variables
  - El objeto `user` queda vacío al cerrar la sesión.

> 3- Perfilar barra de navegación

- ✅ Obtener las categorías desde una fake API
- ✅ Mostrar categorías según el perfil
- ✅ Mostrar una pagina en blanco con el nombre de la categoría
  - Pagina dinámica: `CategoryPage`

> 4- Server

Luego que me pasaron el archivo con el uso de las APIs:

- ✅ Servidor con Express para exponer los endpoints y manejar la “base de datos” (archivos json)
  - `GET /api/Usuarios`
  - `POST /api/Usuario/RegistrarUsuario`
  - `POST /api/Usuario/LoginPerfilByEmail`
  - `PATCH /api/Usuario/ActualizarUsuario`
  - `GET /api/CategoriasProducto/getCategoriasProducto`
  - `GET /api/CategoriasProducto/getCategoriasProducto/:user-type`
- ✅ En el frontend cree los servicios para consumir estas APIs
- ✅ `useContext` para llamar a los servicios y manejar el contexto de la aplicación
- ✅ Agregue Facebook como método de autenticación

### A mejorar

Se pueden mejorar los estilos y agregar testing, por lo menos los mas importantes.
