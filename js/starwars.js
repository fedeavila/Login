function obtenerInfo() {
	const personajeId = document.getElementById("personajeId").value;
	if (personajeId >= 1 && personajeId <= 82) {
		const url = `https://swapi.dev/api/people/${personajeId}/`;
		fetch(url)
			.then(response => response.json())
			.then(data => mostrarInfo(data))
			.catch(error => console.error('Error al obtener la información:', error));
	} else {
		alert("Ingresa un ID válido (1 al 82).");
	}
}

function mostrarInfo(data) {
	const resultadoDiv = document.getElementById("resultado");
	resultadoDiv.innerHTML = `
	  <h2>${data.name}</h2>
	  <p><strong>Altura:</strong> ${data.height} cm</p>
	  <p><strong>Peso:</strong> ${data.mass} kg</p>
	  <p><strong>Color de cabello:</strong> ${data.hair_color}</p>
	  <p><strong>Color de ojos:</strong> ${data.eye_color}</p>
	  <p><strong>Año de nacimiento:</strong> ${data.birth_year}</p>
	  <p><strong>Género:</strong> ${data.gender}</p>
	`;
}