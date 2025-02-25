const guests = [
    { id: "1", name: "Sr. Miguel Ángel Martinez y Sra.", passes: 3 },
    { id: "2", name: "María Gricelda Flores", passes: 1 },
    { id: "3", name: "Jessica Dardon Flores", passes: 2 },
    { id: "4", name: "Sr. Manuel Espinoza y Sra.", passes: 3 },
    { id: "5", name: "Sr. Luis Galindo y Sra.", passes: 4 },
    { id: "6", name: "Claudia Galindo", passes: 2 },
    { id: "7", name: "Sr. Jorge Luis Rivera y Sra.", passes: 2 },
    { id: "8", name: "Sr. Cristóbal Dávila y Sra.", passes: 2 },
    { id: "9", name: "Sr. Luis García y Sra.", passes: 2 },
    { id: "10", name: "Sr. Fernando Mencos y Sra.", passes: 2 },
    { id: "11", name: "Sr. Geovanni Álvarez y Sra.", passes: 2 },
    { id: "12", name: "Sr. Humberto Mérida y Sra.", passes: 2 },
    { id: "13", name: "Sr. Darwin Carrillo y Sra.", passes: 3 },
    { id: "14", name: "Sr. David López y Sra.", passes: 4 },
    { id: "15", name: "Sr. Ronal López y Sra.", passes: 2 },
    { id: "16", name: "Blanca Barrios", passes: 2 },
    { id: "17", name: "Ninoshka Meléndez", passes: 2 },
    { id: "18", name: "Crista Meléndez", passes: 2 },
    { id: "19", name: "Javier Rivas", passes: 5 },
    { id: "20", name: "Javier Rivas Jr.", passes: 2 },
    { id: "21", name: "Jhonatan Rivas", passes: 1 },
    { id: "22", name: "Sandra Barrios", passes: 1 },
    { id: "23", name: "Julio Barrios", passes: 1 },
    { id: "24", name: "Reina Barrios", passes: 2 },
    { id: "25", name: "Olga Sis", passes: 2 },
    { id: "26", name: "Mario Guzmán", passes: 2 },
    { id: "27", name: "Sr. Julio Estrada y Sra.", passes: 2 },
    { id: "28", name: "Sr. Ronald Chicas y Sra.", passes: 2 },
    { id: "29", name: "Bernardo Matheu", passes: 1 },
    { id: "30", name: "Diego Santizo", passes: 2 },
    { id: "31", name: "Sr. Douglas García y Sra.", passes: 2 },
    { id: "32", name: "Fernando Matheu", passes: 1 },
    { id: "33", name: "Sr. Raúl Mejía y Sra.", passes: 2 },
    { id: "34", name: "Joseline Muñoz", passes: 2 },
    { id: "35", name: "Sr. Oscar González y Sra.", passes: 2 },
    { id: "36", name: "Pablo Barrientos", passes: 1 },
    { id: "37", name: "Walter Martinez", passes: 2 },
    { id: "38", name: "Romeo Mejía", passes: 2 },
    { id: "39", name: "Glenda Diaz", passes: 1 },
    { id: "40", name: "Mateo Gómez", passes: 1 },
    { id: "41", name: "Gerber Montenegro", passes: 2 },
    { id: "42", name: "Ana Lucía Mazariegos", passes: 1 },
    { id: "43", name: "Erica Salguero", passes: 1 },
    { id: "44", name: "Cecilia Díaz", passes: 1 },
    { id: "45", name: "Joss Hernández", passes: 1 },
    { id: "46", name: "María José Ortiz", passes: 1 },
    { id: "47", name: "Carlos Rodriguez", passes: 1 },
    { id: "48", name: "Sr. Sergio Rodriguez y Sra.", passes: 2 },
    { id: "49", name: "Sr. Pedro Ramirez y Sra.", passes: 2 },
    { id: "50", name: "Rudy Us", passes: 1 },
    { id: "51", name: "Luis Perez", passes: 1 },
    { id: "52", name: "Maria Maddaleno", passes: 2 },
    { id: "53", name: "Erlin Alarcón", passes: 1 },
    { id: "54", name: "Carlos Duarte", passes: 1 },
    { id: "55", name: "Alejandro Rivera", passes: 2 },
    { id: "56", name: "Diego Morales", passes: 2 },
    { id: "57", name: "Javie Aguirre", passes: 1 },
    { id: "58", name: "Miguel Oliva", passes: 1 },
    { id: "59", name: "Aldo Fajardo", passes: 2 },
    { id: "60", name: "Daniel Portillo", passes: 1 },
    { id: "61", name: "Samuel Morales", passes: 1 },
    { id: "62", name: "Mynor Pernillo", passes: 1 },
    { id: "63", name: "Erick Castillo", passes: 2 },
    { id: "64", name: "Cristian Morales", passes: 1 },
    { id: "65", name: "Eduardo Barrientos", passes: 1 },
    { id: "66", name: "Sr. Carlos Sartoressi y Sra.", passes: 2 },
    { id: "67", name: "Sr. Jorge Calderón y Sra.", passes: 2 },
    { id: "68", name: "Deysi de Ventura", passes: 1 },
    { id: "69", name: "Carlos Ventura", passes: 1 },
    { id: "70", name: "Herwin Bautista", passes: 1 },
    { id: "71", name: "Sr. Adolfo Coronado y Sra.", passes: 2 },
    { id: "72", name: "Sr. Norman Sagastume y Sra.", passes: 4 },
    { id: "73", name: "Alexander Bautista", passes: 2 },
    { id: "74", name: "Sr. Marwin Bautista y Sra.", passes: 2 },
    { id: "75", name: "Sara Gutierrez", passes: 1 },
    { id: "76", name: "Rocio Sagastume", passes: 3 },
    { id: "77", name: "Barbara Ventura", passes: 1 },
    { id: "78", name: "Cesar Chiquín", passes: 1 }
];

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
    const guestId = queryParams.id;

    // Buscar el invitado en el array
    const guest = guests.find(g => g.id === guestId);

    if (guest) {
        document.getElementById('guest-name').textContent = `¡${guest.name}, ${
            guest.passes > 1 ? 'están invitados' : 'estás invitado'
        }!`;
        document.getElementById('passes').textContent = `${guest.passes} ${guest.passes === 1 ? 'pase' : 'pases'}`;
    } else {
        document.getElementById('guest-name').textContent = `¡Invitado no encontrado!`;
        document.querySelector('.invitation-info-section').style.display = 'none';
    }
});
