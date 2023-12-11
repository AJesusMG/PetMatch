window.onload = initSignIn;

function initSignIn() {
    const toggleElement = document.querySelector('.toggle');
    if (toggleElement) {
      toggleElement.addEventListener('click', function () {
        window.location.href = "../pages/Login/Login.jsx";
      });
    }
  
    const loginBtnElement = document.querySelector('.signBtn');
    if (loginBtnElement) {
      loginBtnElement.addEventListener('click', signIn);
    }
  }

async function signIn() {
    var firstName = document.getElementById('nameInput').value;
    var lastName = document.getElementById('lastNameInput').value;
    var mail = document.getElementById('emailSigninInput').value;
    var pass = document.getElementById('passwordSigninInput').value;
    var Phone = document.getElementById('phoneInput').value;


    console.log(firstName, lastName, mail, pass, Phone);

    try {
        const response = await fetch("http://localhost:3000/user/signIn", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                first_names: firstName,
                last_names: lastName,
                email: mail,
                password: pass,
                phone_Number: Phone,
            }),
        });
    
        const data = await response.json();
        var Rol = data.rol;  // Utiliza "rol" en lugar de "Rol_Id"
        console.log(data);
        console.log(Rol);
        return data;

    } catch (error) {
        console.error(error);
    }
}    

export {initSignIn, signIn};
