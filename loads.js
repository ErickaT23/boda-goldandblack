const guests = [
    { name: "Sr. Miguel Ángel Martinez y Sra.", passes: 3 },
    { name: "María Gricelda Flores", passes: 1 },
    { name: "Jessica Dardon Flores", passes: 2 },
    { name: "Sr. Manuel Espinoza y Sra.", passes: 3 },
    { name: "Sr. Luis Galindo y Sra.", passes: 4 },
    { name: "Claudia Galindo", passes: 2 },
    { name: "Sr. Jorge Luis Rivera y Sra.", passes: 2 },
    { name: "Sr. Cristóbal Dávila y Sra.", passes: 2 },
    { name: "Sr. Luis García y Sra.", passes: 2 },
    { name: "Sr. Fernando Mencos y Sra.", passes: 2 },
    { name: "Sr. Geovanni Álvarez y Sra.", passes: 2 },
    { name: "Sr. Humberto Mérida y Sra.", passes: 2 },
    { name: "Sr. Darwin Carrillo y Sra.", passes: 3 },
    { name: "Sr. David López y Sra.", passes: 4 },
    { name: "Sr. Ronal López y Sra.", passes: 2 },
    { name: "Blanca Barrios", passes: 2 },
    { name: "Ninoshka Meléndez", passes: 2 },
    { name: "Crista Meléndez", passes: 2 },
    { name: "Javier Rivas", passes: 5 },
    { name: "Javier Rivas Jr.", passes: 2 },
    { name: "Jhonatan Rivas", passes: 1 },
    { name: "Sandra Barrios", passes: 1 },
    { name: "Julio Barrios", passes: 1 },
    { name: "Reina Barrios", passes: 2 },
    { name: "Olga Sis", passes: 2 },
    { name: "Mario Guzmán", passes: 2 },
    { name: "Sr. Julio Estrada y Sra.", passes: 2 },
    { name: "Sr. Ronald Chicas y Sra.", passes: 2 },
    { name: "Bernardo Matheu", passes: 1 },
    { name: "Diego Santizo", passes: 2 },
    { name: "Sr. Douglas García y Sra.", passes: 2 },
    { name: "Fernando Matheu", passes: 1 },
    { name: "Sr. Raúl Mejía y Sra.", passes: 2 },
    { name: "Joseline Muñoz", passes: 2 },
    { name: "Sr. Oscar González y Sra.", passes: 2 },
    { name: "Pablo Barrientos", passes: 1 },
    { name: "Walter Martinez", passes: 2 },
    { name: "Romeo Mejía", passes: 2 },
    { name: "Glenda Diaz", passes: 1 },
    { name: "Mateo Gómez", passes: 1 },
    { name: "Gerber Montenegro", passes: 2 },
    { name: "Ana Lucía Mazariegos", passes: 1 },
    { name: "Erica Salguero", passes: 1 },
    { name: "Cecilia Díaz", passes: 1 },
    { name: "Joss Hernández", passes: 1 },
    { name: "María José Ortiz", passes: 1 },
    { name: "Carlos Rodriguez", passes: 1 },
    { name: "Sr. Sergio Rodriguez y Sra.", passes: 2 },
    { name: "Sr. Pedro Ramirez y Sra.", passes: 2 },
    { name: "Rudy Us", passes: 1 },
    { name: "Luis Perez", passes: 1 },
    { name: "Maria Maddaleno", passes: 2 },
    { name: "Erlin Alarcón", passes: 1 },
    { name: "Carlos Duarte", passes: 1 },
    { name: "Alejandro Rivera", passes: 2 },
    { name: "Diego Morales", passes: 2 },
    { name: "Javie Aguirre", passes: 1 },
    { name: "Miguel Oliva", passes: 1 },
    { name: "Aldo Fajardo", passes: 2 },
    { name: "Daniel Portillo", passes: 1 },
    { name: "Samuel Morales", passes: 1 },
    { name: "Mynor Pernillo", passes: 1 },
    { name: "Erick Castillo", passes: 2 },
    { name: "Cristian Morales", passes: 1 },
    { name: "Eduardo Barrientos", passes: 1 },
    { name: "Sr. Carlos Sartoressi y Sra.", passes: 2 },
    { name: "Sr. Jorge Calderón y Sra.", passes: 2 },
    { name: "Deysi de Ventura", passes: 1 },
    { name: "Carlos Ventura", passes: 1 },
    { name: "Herwin Bautista", passes: 1 },
    { name: "Sr. Adolfo Coronado y Sra.", passes: 2 },
    { name: "Sr. Norman Sagastume y Sra.", passes: 4 },
    { name: "Alexander Bautista", passes: 2 },
    { name: "Sr. Marwin Bautista y Sra.", passes: 2 },
    { name: "Sara Gutierrez", passes: 1 },
    { name: "Rocio Sagastume", passes: 3 },
    { name: "Barbara Ventura", passes: 1 },
    { name: "Cesar Chiquín", passes: 1 }
];

// Código para obtener parámetros de la URL y mostrar información del invitado
// (igual que en tu script anterior)
document.addEventListener("DOMContentLoaded", function() {
    function getQueryParams() {
        const params = {};
        const queryString = window.location.search.substring(1);
        const pairs = queryString.split("&");
        for (const pair of pairs) {
            const [key, value] = pair.split("=");
            params[decodeURIComponent(key)] = decodeURIComponent(value.replace(/\+/g, ' '));
        }
        return params;
    }

    const queryParams = getQueryParams();
    const guestName = queryParams.nombre || "Invitado";
    const passes = parseInt(queryParams.pases) || 0;

    // Mostrar el nombre del invitado con la condición de 1 pase o más
    if (passes === 1) {
        document.getElementById('guest-name').textContent = `¡${guestName}, estás invitado!`;
    } else if (passes > 1) {
        document.getElementById('guest-name').textContent = `¡${guestName}, están invitados!`;
    } else {
        document.getElementById('guest-name').textContent = `¡${guestName}!`;
    }

    // Mostrar la cantidad de pases con "pase" o "pases" dependiendo de la cantidad
    if (passes > 0) {
        document.getElementById('passes').textContent = `${passes} ${passes === 1 ? 'pase' : 'pases'}`;
    } else {
        // Si no hay pases, oculta la sección
        document.querySelector('.invitation-info-section').style.display = 'none';
    }
});
