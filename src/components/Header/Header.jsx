import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import styles from './Header.module.scss'

const Header = () => {
  const login = useSelector(state => state.appReducer.login)
  const token = useSelector(state => state.appReducer.token)
  return (
    <header className={styles.header}>
      <img src='https://media.istockphoto.com/vectors/cute-dog-doctor-standing-in-front-of-big-pill-bottles-and-holding-a-vector-id1395628033?s=612x612' alt="" width={50} height={50} />
      <div className={styles.today}><NavLink to={token ? '/today' : '/login'}>Сегодня</NavLink></div>
      <div className={styles.animals}><NavLink to={token ? '/animals' : '/login'}>Животные</NavLink></div>
      <div className={styles.login}><NavLink to={!token && '/login'}>{login && token ? login + ', вы авторизованы' : 'Логин'}</NavLink></div>
    </header>
  )
}

export default Header