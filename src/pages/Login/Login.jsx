import React, {useState} from 'react'
import styles from './login.module.css';

export const Login = () => {
  const[mode, setMode] = useState('signIn');
  
  const handleToggle = () => {
    setMode((prevMode) => (prevMode === 'signIn' ? 'signUp' : 'signIn'));
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    // Lógica para el inicio de sesión
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    // Lógica para el registro
  };

  const handleFocus = (e) => {
    setActiveInput(e.target);
    e.target.classList.add(styles.active);
  };

  const handleBlur = (e) => {
    if (e.target.value === '') {
      e.target.classList.remove(styles.active);
    }
  };

  const toggleSignUpMode = () => {
    setSignUpMode((prevMode) => !prevMode);
  };

  const moveSlider = (index) => {
    const currentImage = document.querySelector(`.${styles['img' + index]}`);
    const images = document.querySelectorAll(`.${styles.image}`);
    images.forEach((img) => img.classList.remove(styles.show));
    currentImage.classList.add(styles.show);

    const textSlider = document.querySelector(`.${styles.textGroup}`);
    textSlider.style.transform = `translateY(${-(index - 1) * 2.2}rem)`;

    const bullets = document.querySelectorAll(`.${styles.bullets} span`);
    bullets.forEach((bull) => bull.classList.remove(styles.active));
    bullets[index - 1].classList.add(styles.active);
  };

  return (
        <div className={styles.body}>
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
                    <span className={styles.inputTextAbove}><b>Nombres</b></span>
                      <div className={styles.inputWrap}>
                      
                        <input
                          type="text"
                          minLength="4"
                          className={styles.inputField}
                          autoComplete="off"
                          required
                        />
                      </div>
                      <span className={styles.inputTextAbove}><b>Contraseña</b></span>

                      <div className={styles.inputWrap}>
                      
                        <input
                          type="password"
                          minLength="4"
                          className={styles.inputField}
                          autoComplete="off"
                          required
                        />
                      </div>

                      <input type="submit" value="Iniciar Sesión" className={styles.signBtn} />

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
                    <span className={styles.inputTextAbove}><b>Nombres</b></span>
                      <div className={styles.inputWrap}>
                        <input
                          type="text"
                          minLength="4"
                          className={styles.inputField}
                          autoComplete="off"
                          required
                        />
                      </div>

                      <span className={styles.inputTextAbove}><b>Correo</b></span>
                      <div className={styles.inputWrap}>
                        <input
                          type="email"
                          className={styles.inputField}
                          autoComplete="off"
                          required
                        />
                      </div>

                      <span className={styles.inputTextAbove}><b>Contraseña</b></span>
                      <div className={styles.inputWrap}>
                        <input
                          type="password"
                          minLength="4"
                          className={styles.inputField}
                          autoComplete="off"
                          required
                        />
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

export default Login