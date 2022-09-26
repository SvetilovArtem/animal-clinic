import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Oval, Preloader } from 'react-preloader-icon'
import Modal from '../../components/Modal/Modal'
import styles from './TodayPage.module.scss'


const TodayPage = ({ animalsToday, setAnimalsToday }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [choise, setChoise] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
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
            setIsOpen(!isOpen)
            setChoise(animalsToday.indexOf(animal))
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