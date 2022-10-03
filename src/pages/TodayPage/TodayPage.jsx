import axios from 'axios'
import React, { useEffect } from 'react'
import { Oval, Preloader } from 'react-preloader-icon'
import { useDispatch, useSelector } from 'react-redux'
import Modal from '../../components/Modal/Modal'
import { setChoise, setIsLoading, setIsOpen } from '../../redux/slices/todaySlice'

import styles from './TodayPage.module.scss'


const TodayPage = ({ animalsToday, setAnimalsToday }) => {
  const isOpen = useSelector(state => state.animalReducer.isOpen)
  const choise = useSelector(state => state.animalReducer.choise)
  const isLoading = useSelector(state => state.animalReducer.isLoading)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setIsLoading(true))
    axios.get("https://acits-test-back.herokuapp.com/api/executions/today", {
      headers: { 
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      }
    }).then(resp => {
      setIsLoading(false)
      setAnimalsToday(resp.data.results)})
      
  }, [])

  
  return (
    <div className={styles.todayPage}>
       <h2>Сегодняшний прием</h2>
      {isLoading ? <Preloader 
      use={Oval}
      size={32}
      strokeWidth={8}
      strokeColor="#F0AD4E"
      duration={800}/> : 
      <ul className={styles.animals}>
        
        {animalsToday.map(animal => {

          return <li key={animal.id} className={styles.animal} onClick={() => {
            dispatch(setIsOpen(!isOpen))
            dispatch(setChoise(animalsToday.indexOf(animal)))
            }} >
            <h3>{animal.animal.spec.name}</h3>
            <p>{animal.type}</p>
            <p>{animal.time.split('').splice(0,5).join('')}</p>
          </li> 

        })}
        {isOpen && <Modal animal={animalsToday[choise]} setIsOpen={setIsOpen} type='today' />}
      </ul>}
     
      
    </div>
    
  )
}

export default TodayPage