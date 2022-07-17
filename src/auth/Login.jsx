import React from 'react'
import styles from './Login.module.css'
import Logo from '../icons/circle-user-solid.svg'
import Password from '../icons/lock-solid.svg'

function Login() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.conteiner}>
        <div className={styles.title}>
          <div className={styles.boxForm}>
            <span>Вход</span>
            <div>
              <div className={styles.logins}>
                <form>
                  <img src={Logo} alt="Login" />
                  <input type="text" placeholder="Введите логин" required />
                </form>
              </div>
              <div className={styles.logins}>
                <form>
                  <img src={Password} alt="Login" />
                  <input type="text" placeholder="Пароль" required />
                </form>
              </div>
              <div className={styles.logins}>
                <input className='btn' type="submit" value="login" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login