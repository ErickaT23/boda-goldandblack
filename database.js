// Importar Firebase y Realtime Database
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
import { getDatabase, ref, push, onValue } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-database.js";

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDY0yp1f338AH1AJJ730-RnxUHHgJv0ZQE",
  authDomain: "buenos-deseos-nathalieycarlos.firebaseapp.com",
  databaseURL: "https://buenos-deseos-nathalieycarlos-default-rtdb.firebaseio.com/", // Asegúrate de que sea la URL correcta de la base de datos
  projectId: "buenos-deseos-nathalieycarlos",
  storageBucket: "buenos-deseos-nathalieycarlos.appspot.com",
  messagingSenderId: "521381757208",
  appId: "1:521381757208:web:8b3ab28b0c3848a822de6d"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

console.log("✅ Firebase conectado correctamente!");

// Función para enviar un buen deseo a Firebase
window.submitWish = function () {
  const name = document.getElementById("wish-name").value.trim();
  const message = document.getElementById("wish-message").value.trim();

  if (name !== "" && message !== "") {
    push(ref(db, "buenos-deseos/"), {
      nombre: name,
      mensaje: message
    }).then(() => {
      alert("¡Tu buen deseo ha sido enviado! 🌟");
    }).catch((error) => {
      console.error("Error al enviar el deseo: ", error);
    });

    // Limpiar el formulario después de enviar
    document.getElementById("wish-name").value = "";
    document.getElementById("wish-message").value = "";
  } else {
    alert("Por favor, completa ambos campos antes de enviar.");
  }
};

// Función para mostrar los buenos deseos en pantalla
window.toggleWishes = function () {
  const wishesDiv = document.getElementById("wishes");

  // Si la sección ya está visible, la oculta
  if (!wishesDiv.classList.contains("hidden")) {
    wishesDiv.classList.add("hidden");
    return;
  }

  // Mostrar deseos en tiempo real
  onValue(ref(db, "buenos-deseos/"), (snapshot) => {
    wishesDiv.innerHTML = ""; // Limpiar antes de actualizar

    // Verifica si snapshot tiene datos
    if (snapshot.exists()) {
      snapshot.forEach((childSnapshot) => {
        const wish = childSnapshot.val();
        const wishElement = document.createElement("p");
        wishElement.innerHTML = `<strong>${wish.nombre}:</strong> ${wish.mensaje}`;
        wishesDiv.appendChild(wishElement);
      });
    } else {
      const noWishesMessage = document.createElement("p");
      noWishesMessage.textContent = "No hay deseos aún.";
      wishesDiv.appendChild(noWishesMessage);
    }

    wishesDiv.classList.remove("hidden"); // Mostrar la sección
  });
};

// Función para mostrar/ocultar el formulario
window.toggleWishForm = function () {
  document.getElementById("wish-form").classList.toggle("hidden");
};
