window.onload = initLogin;

function initLogin() {
  const toggleElement = document.querySelector('.toggle');
  if (toggleElement) {
    toggleElement.addEventListener('click', function () {
      window.location.href = "../pages/Login/Login.jsx";
    });
  }

  const loginBtnElement = document.querySelector('.LoginBtn');
  if (loginBtnElement) {
    loginBtnElement.addEventListener('click', login);
  }
}

async function login() {
  var mail = document.getElementById('emailLoginInput').value;
  var pass = document.getElementById('passwordLoginInput').value;

  try {
    const response = await fetch("http://localhost:3000/user/logIn", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        Email: mail,
        Password: pass
      }),
    });

    const data = await response.json();
    console.log(data);

    if (data.code === 200) {
      // Configura una cookie con el token y el user_id
      setCookie("token", data.token, 1); // Cambia el valor 1 a la duración deseada en días
      setCookie("user_id", data.user_id, 1); // Cambia el valor 1 a la duración deseada en días
      document.dispatchEvent(new Event('cookiesReady'));
      window.location.href = "/userConfig";
      return data;
    } else {
      alert("Usuario y/o contraseña incorrectos");
    }
  } catch (error) {
    console.error(error);
  }
}

// Función para establecer una cookie
function setCookie(name, value, days) {
  var expires = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

export { initLogin, login };
