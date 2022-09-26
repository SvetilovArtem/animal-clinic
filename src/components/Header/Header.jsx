import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Header.module.scss'

const Header = ({login, token}) => {

  return (
    <header className={styles.header}>
      <img src='https://cdn.icon-icons.com/icons2/1364/PNG/512/veterinarianhospital_89244.png' alt="" width={50} height={50} />
      <div className={styles.today}><NavLink to={token ? '/today' : '/login'}>Сегодня</NavLink></div>
      <div className={styles.animals}><NavLink to={token ? '/animals' : '/login'}>Животные</NavLink></div>
      <div className={styles.login}><NavLink to={!token && '/login'}>{login && token ? login + ', вы авторизованы' : 'Логин'}</NavLink></div>
    </header>
  )
}

export default Header