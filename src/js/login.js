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
    console.log(mail, pass);

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
        return data;
    } catch (error) {
        console.error(error);
    }
}

export {initLogin, login};
