import React from 'react'
import styles from './InputForm.module.scss'

const InputForm = ({ 
  type, 
  setValue, 
  setLoginDirty, 
  setLoginError, 
  setPasswordError, 
  setPasswordDirty, 
  name}) => {

  function onBlurHandler(e) {
    switch(e.currentTarget.name) {
      case 'login':
        setLoginDirty(true)

        if(e.currentTarget.value !== 'test_user') {
          setLoginError('Неверный логин')
        } else {
          setLoginError('')
        }
        break
      case 'password': 
        setPasswordDirty(true)
        if(e.currentTarget.value !== '123456') {
          setPasswordError('Неверный пароль')
        } else {
          setPasswordError('')
        }
        break 

      default: setLoginDirty(false)
      setPasswordDirty(false)  
    }
  }

  return (
    <>
      <input 
      onBlur={(e) => onBlurHandler(e)}
      name={name}
      className={styles.input} 
      type={type} 
      placeholder={type === 'text' ? 'Введите логин' : 'Введите пароль'}
      onChange={e => {
        setValue(e.currentTarget.value)
      }}
      />
      <div></div>
    </>
  )
}

export default InputForm