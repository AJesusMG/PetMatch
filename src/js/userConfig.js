async function initUserConfig(checkCookies = true) {
  let token, userId;

  if (checkCookies) {
    // Verifica si las cookies ya están disponibles
    token = await getCookieAsync("token");
    userId = await getCookieAsync("user_id");

    console.log('Token = ', token);
    console.log('ID = ', userId);

    const submitBtnElement = document.getElementById('saveButton'); // Asigna un id al botón
    if (submitBtnElement) {
      submitBtnElement.addEventListener('click', () => updateUserData(userId, token));
    }

    // Verifica si alguna de las cookies falta
    if (!token || !userId) {
      console.log('Redirigiendo al inicio de sesión...');
      return false;
    }
    
    return true;
  }
  return false;
}



async function updateUserData(userId, token) {
  var newNames = document.getElementById('newName').value;
  var newLastNames = document.getElementById('newLastName').value;
  var newMail = document.getElementById('newEmail').value;
  var newPass = document.getElementById('newPassword').value;
  var newPhone = document.getElementById('newPhone').value;
  var new_Facebook = document.getElementById('newFacebook').value;
  var new_Instagram = document.getElementById('newInstagram').value;

  console.log('Token enviado:', token);
  console.log('User_ID enviado:', userId);
  console.log(newNames, newLastNames, newMail, newPass, newPhone, new_Facebook, new_Instagram);

  try {
    const response = await fetch("http://localhost:3000/user/configUser", {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token,
      },
      body: JSON.stringify({
        userId: userId,
        updatedFields: {
          First_names: newNames,
          Last_names: newLastNames,
          Email: newMail,
          Password: newPass,
          Phone_Number: newPhone,
          Facebook_Link: new_Facebook,
          Instagram_Link: new_Instagram,
        },
      }),
    });

    const data = await response.json();
    console.log(data);

    return data;
  } catch (error) {
    console.error(error);
  }
}

function getCookieAsync(name) {
  return new Promise((resolve) => {
    const checkCookie = () => {
      const value = "; " + document.cookie;
      const parts = value.split("; " + name + "=");
      if (parts.length === 2) {
        resolve(parts.pop().split(";").shift());
      } else {
        // Espera un breve momento y vuelve a verificar
        setTimeout(checkCookie, 10);
      }
    };

    checkCookie();
  });
}

export {initUserConfig, updateUserData, getCookieAsync};