import axios from 'axios'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Route, Routes, useNavigate } from 'react-router-dom'
import AnimalsPage from '../../pages/AnimalsPage/AnimalsPage'
import LoginPage from '../../pages/LoginPage/LoginPage'
import MainPage from '../../pages/MainPage/MainPage'
import TodayPage from '../../pages/TodayPage/TodayPage'
import { setToken } from '../../redux/slices/appSlice'
import styles from './Content.module.scss'

const Content = ({
  setLoginDirty, 
  setPasswordDirty, 
  setLoginError, 
  setPasswordError}) => {
  
  const [animalsToday, setAnimalsToday] = useState([])
  const [animals, setAnimals] = useState([])
  const [animalsCount, setAnimalsCount] = useState('')
  const [currentPage, setCurrentPage] = useState('')


  const token = useSelector(state => state.appReducer.token)
  const login = useSelector(state => state.appReducer.login)
  const password = useSelector(state => state.appReducer.password)
  const dispatch = useDispatch()
  
  const navigate = useNavigate()
 
  function handleClick() {
    axios.post('https://acits-test-back.herokuapp.com/api/login', {
      login: login,
      password: password
    }).then((resp) => {
      console.log(resp)
      dispatch(setToken(resp.data.accessToken))
      navigate('/today')
    }) 

    axios.get("https://acits-test-back.herokuapp.com/api/executions/today", {
      headers: { 
        'Authorization': 'Bearer ' + token
      }
    }).then(resp => {setAnimalsToday(resp.data.results)})

    axios.get(`https://acits-test-back.herokuapp.com/api/animals?limit=9&offset=0`, {
      headers: { 
        'Authorization': 'Bearer ' + token
      }
    }).then(data => {
      setAnimals(data.data.results)
      setAnimalsCount(data.data.count)
    })
  }

  localStorage.setItem("token", token)
  return (
    <div className={styles.content}>
        <Routes>
            <Route path='/' element={ <MainPage /> } />
            <Route 
            path='/login' 
            element={
            <LoginPage 
              handleClick={handleClick} 
              setLoginDirty={setLoginDirty}
              setPasswordDirty={setPasswordDirty}
              setLoginError={setLoginError}
              setPasswordError={setPasswordError}
              token={token}
            />} />
          
            <Route path='/today' element={<TodayPage setAnimalsToday={setAnimalsToday} animalsToday={animalsToday} />} />
            <Route path='/animals' element={<AnimalsPage setAnimals={setAnimals} currentPage={currentPage} setCurrentPage={setCurrentPage} animals={animals} setAnimalsCount={setAnimalsCount} animalsCount={animalsCount} />} />
        </Routes>
        
    </div>
  )
}

export default Content