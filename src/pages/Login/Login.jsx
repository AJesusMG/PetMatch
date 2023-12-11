import React, { useState, useEffect} from 'react'
import styles from './loginStyles.module.css';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { initLogin, login } from '../../js/login.js';
import { initSignIn, signIn } from '../../js/signIn.js'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';


export default function Login() {
  useEffect(() => {
    initLogin();
    initSignIn();
  }, []);

  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const [mode, setMode] = useState('signIn');

  const handleToggle = () => {
    setMode((prevMode) => (prevMode === 'signIn' ? 'signUp' : 'signIn'));
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    const response = await login();
  
    if (response.code === 200) {
      // Verifica si las cookies están presentes
      const token = getCookie("token");
      const userId = getCookie("user_id");
  
      if (token && userId) {
        navigate('/userConfig');
      } else {
        // Muestra la notificación en caso de que falten cookies
        toast('Falta información de sesión', {
          type: 'error',
        });
      }
      // Realiza la redirección a la página deseada (por ejemplo, '/Community')
      navigate('/Catalogue');
    } else {
      // Muestra la notificación en caso de error en el inicio de sesión
      toast(response.message || 'Error desconocido', {
        type: 'error',
      });
    }
  };
  
  

  const handleSignUp = async (e) => {
    e.preventDefault();
    const response = await signIn();

    // Muestra la notificación
    toast(response.message, {
      type: response.code === 201 ? 'success' : 'error',
    });
  };

  return (

    <div className={styles.body}>
       <ToastContainer />
      <main className={`${styles.main} ${mode === 'signUp' ? styles.signupMode : ''}`}>
        <div className={styles.box}>
          <div className={styles.innerBox}>
            <div className={styles.formsWrap}>
              <form onSubmit={mode === 'signIn' ? handleSignIn : handleSignUp} autoComplete="off" className={styles.signinForm}>
                <div className={styles.logo}>
                  <img src="./img/Logo_PNG.png" alt="easyclass" />
                  <h4>PetMatch</h4>
                </div>

                <div className={styles.heading}>
                  <h2>{mode === 'signIn' ? '¡ Bienvenid@ de vuelta !' : '¡ Regístrate !'}</h2>
                  <h6>{mode === 'signIn' ? '¿No tienes una cuenta?' : '¿Ya tienes una cuenta?'}</h6>
                  <a href="#" className={styles.toggle} onClick={handleToggle}>
                    {mode === 'signIn' ? 'Regístrate' : 'Iniciar Sesión'}
                  </a>
                </div>
                <div className={styles.actualForm}>
                  <span className={styles.inputTextAbove}><b>Correo Electrónico</b></span>
                  <div className={styles.inputWrap}>
                    <input
                      type="email"
                      id="emailLoginInput" 
                      className={styles.inputField}
                      autoComplete="off"
                      required
                    />
                  </div>
                  <span className={styles.inputTextAbove}><b>Contraseña</b></span>

                  <div className={styles.inputWrap}>

                  <input
                      type={showPassword ? "text" : "password"}
                      id="passwordLoginInput" 
                      minLength="4"
                      className={styles.inputField}
                      autoComplete="off"
                      required
                    />
                    <span className={styles.Eye} onClick={togglePasswordVisibility}>
                      {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                    </span>
                  </div>

                  <input type="submit" value="Iniciar Sesión" className={styles.LoginBtn} />

                  <p className={styles.text}>
                    Haz olvidado tu contraseña o información de usuario? {' '}<a href="#"><b>Obtener ayuda</b></a>

                  </p>
                </div>
              </form>

              <form onSubmit={handleSignUp} autoComplete="off" className={styles.signupForm}>
                <div className={styles.logo}>
                  <img src="./img/Logo_PNG.png" alt="easyclass" />
                  <h4>PetMatch</h4>
                </div>

                <div className={styles.heading}>
                  <h2>{mode === 'signIn' ? '¡ Bienvenid@ de vuelta !' : '¡ Regístrate !'}</h2>
                  <h6>{mode === 'signIn' ? '¿No tienes una cuenta?' : '¿Ya tienes una cuenta?'}</h6>
                  <a href="#" className={styles.toggle} onClick={handleToggle}>
                    {mode === 'signIn' ? 'Regístrate' : 'Iniciar Sesión'}
                  </a>
                </div>

                <div className={styles.actualForm}>
                  <span className={styles.inputTextAbove}><b>Nombre/s</b></span>
                  <div className={styles.inputWrap}>
                    <input
                      type="text"
                      id="nameInput" 
                      minLength="4"
                      className={styles.inputField}
                      autoComplete="off"
                      required
                    />
                  </div>

                  <span className={styles.inputTextAbove}><b>Apellido/s</b></span>
                  <div className={styles.inputWrap}>
                    <input
                      type="text"
                      id="lastNameInput" 
                      minLength="4"
                      className={styles.inputField}
                      autoComplete="off"
                      required
                    />
                  </div>

                  <span className={styles.inputTextAbove}><b>Teléfono</b></span>
                  <div className={styles.inputWrap}>
                    <input
                      type="tel" 
                      id="phoneInput" 
                      className={styles.inputField}
                      autoComplete="off"
                      required
                    />
                  </div>

                  <span className={styles.inputTextAbove}><b>Correo Electrónico</b></span>
                  <div className={styles.inputWrap}>
                    <input
                      type="email"
                      id="emailSigninInput" 
                      className={styles.inputField}
                      autoComplete="off"
                      required
                    />
                  </div>

                  <span className={styles.inputTextAbove}><b>Contraseña</b></span>
                  <div className={styles.inputWrap}>
                    <input
                      type={showPassword ? "text" : "password"}
                      id="passwordSigninInput" 
                      minLength="4"
                      className={styles.inputField}
                      autoComplete="off"
                      required
                    />
                    <span className={styles.Eye} onClick={togglePasswordVisibility}>
                      {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                    </span>
                  </div>

                  <input type="submit" value="Registrarme" className={styles.signBtn} />

                  <p className={styles.text}>
                    Al registrarte, aceptas nuestros <a href="#"><b>Términos y Servicios</b></a> y{' '}
                    <a href="#"><b>Política de Privacidad</b></a>
                  </p>
                </div>
              </form>
            </div>

            <div className={styles.carousel}>
              <div className={styles.imagesWrapper}>
                <img src="./img/AdoptMe.jpeg" className={`${styles.image} ${styles.img1} ${styles.show}`} alt="" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>

  )
}
