var intentos = 3;

function login() {
	var email = document.getElementById("email").value;
	var password = document.getElementById("password").value;

	fetch("https://jsonplaceholder.typicode.com/users")
		.then(response => response.json())
		.then(data => {
			// Buscar si existe un usuario con el email y contraseña ingresados
			const user = data.find(user => user.email === email && user.address.city === password);

			if (user) {
				alert("✅ Usuario: OK\n✅ Contraseña: OK\n\nSerás redirigid@ a la home...");
				window.location.href = "/../home/index.html";
			} else {
				intentos--;
				document.getElementById("error-message").innerHTML = `¡Usuario o contraseña incorrectos!<br>Te restan ${intentos} intentos...`;

				if (intentos <= 0) {
					window.location.href = "/../etc/bye.html";
				}
			}
		})
		.catch(error => console.error('Error al obtener usuarios:', error));
}