import React from 'react'
import { setLogin, setPassword } from '../../redux/slices/appSlice'
import { NavLink } from 'react-router-dom'
import InputForm from '../../components/InputForm/InputForm'
import styles from './LoginPage.module.scss'

const LoginPage = ({
  token, 
  setPasswordError, 
  handleClick, 
  setLoginDirty, 
  setPasswordDirty, 
  setLoginError}) => {
 
  return (
    <form action="#" className={styles.form}>
      <h2>Форма авторизации</h2>
      <InputForm name='login' setLoginError={setLoginError} setLoginDirty={setLoginDirty} setValue={setLogin}  type='text' />
      <InputForm name='password' setPasswordError={setPasswordError} setPasswordDirty={setPasswordDirty} setValue={setPassword}  type='password' />
      <NavLink to={!token ? '/login' : '/today'} onClick={() => handleClick()}>Войти</NavLink>
    </form>
  )
}

export default LoginPage