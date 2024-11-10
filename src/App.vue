<template>
  <div id="app">
    <!-- Header de navegación -->
    <header>
      <nav>
        <router-link to="/registro">Registro</router-link>
        <router-link to="/login">Inicio de Sesión</router-link>
        <router-link to="/movimientos">Movimientos</router-link>
        <router-link to="/balance">Balance</router-link>
        <router-link to="/agregar-movimiento">Agregar Movimiento</router-link>
      </nav>
      
      <!-- Mostrar el nombre de la comunidad y un botón para refrescarlo -->
      <div v-if="comunidad" class="comunidad-info">
        Comunidad: {{ comunidad }}
        <button @click="cerrarSesion">Cerrar Sesión</button>
      </div>

    </header>

    <!-- Contenido principal -->
    <main>
      <router-view />
    </main>

    <!-- Footer opcional -->
    <footer>
      <p>&copy; 2023 Mi Aplicación de Comunidad</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      comunidad: ""
    };
  },
  created() {
    // Recuperar el nombre de la comunidad desde el almacenamiento local al cargar la aplicación
    this.comunidad = localStorage.getItem("comunidad") || "";
  },
  watch: {
    // Observa cambios en localStorage para actualizar el nombre de la comunidad
    '$route'() {
      this.comunidad = localStorage.getItem("comunidad") || "";
    }
  },
  methods: {
    // Método para actualizar manualmente el nombre de la comunidad desde localStorage
    actualizarComunidad() {
      this.comunidad = localStorage.getItem("comunidad") || "";
    },
    cerrarSesion() {
      localStorage.removeItem("token"); // Eliminar el token
      localStorage.removeItem("comunidad"); // Eliminar el nombre de la comunidad
      this.comunidad = ""; // Limpiar el nombre de la comunidad en el estado
      this.$router.push("/login"); // Redirigir al usuario a la página de inicio de sesión
    }
  },
  
};
</script>

<style scoped>
/* Estilos generales */
#app {
  font-family: Arial, sans-serif;
  color: #333;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

/* Header de navegación */
header {
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

nav {
  display: flex;
  gap: 15px;
}

router-link {
  color: white;
  text-decoration: none;
  font-weight: bold;
}

router-link:hover {
  text-decoration: underline;
}

/* Estilo para el nombre de la comunidad */
.comunidad-info {
  font-style: italic;
  font-weight: bold;
}

/* Contenido principal */
main {
  flex: 1;
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

/* Footer */
footer {
  background-color: #f1f1f1;
  color: #555;
  text-align: center;
  padding: 10px;
}
</style>
