import axios from 'axios'
import React, { useEffect } from 'react'
import { Oval, Preloader } from 'react-preloader-icon'
import { useDispatch, useSelector } from 'react-redux'
import Modal from '../../components/Modal/Modal'
import { setChoise, setIsLoading, setIsOpenModal, setOffset } from '../../redux/slices/animalsSlice'

import styles from './AnimalsPage.module.scss'
import Pagination from './Pagination/Pagination'


const AnimalsPage = ({
  animals, 
  animalsCount, 
  setCurrentPage, 
  currentPage, 
  setAnimals, 
  setAnimalsCount}) => {
  
  const isOpen = useSelector(state => state.animalReducer.isOpen)
  const choise = useSelector(state => state.animalReducer.choise)
  const isLoading = useSelector(state => state.animalReducer.isLoading)
  const offset = useSelector(state => state.animalReducer.offset)
  const dispatch = useDispatch()

    useEffect(() => {
      dispatch(setIsLoading(true))
      axios.get(`https://acits-test-back.herokuapp.com/api/animals?limit=9&offset=0`, {
        headers: { 
          'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
      }).then(data => {
        setAnimals(data.data.results)
        dispatch(setOffset(currentPage * 5))
        setAnimalsCount(data.data.count)
        dispatch(setIsLoading(false))
      })
    }, [])

  return (
    <div className={styles.wrapper}>
      <h2>Животные</h2>
      {isLoading ? <Preloader 
      use={Oval}
      size={32}
      strokeWidth={8}
      strokeColor="#F0AD4E"
      duration={800} /> :
      <ul className={styles.animals}>
      
      {animals.map(animal => {

        return <li key={animal.id} className={styles.animal} onClick={() => {
          dispatch(setIsOpenModal(!isOpen))
          dispatch(setChoise(animals.indexOf(animal)))
          }} >
          <h3>{animal.spec.name}</h3>
          <p>{animal.name}</p>
          
        </li> 

      })}
      {isOpen && <Modal animal={animals[choise]} type='animals' />}  
    </ul>
       }
       <Pagination 
      offset={offset}
      setAnimals={setAnimals}
      setAnimalsCount={setAnimalsCount}
      setOffset={setOffset}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage} 
      pageCount={Math.round(Number(animalsCount) / 5)} 
      />
    
    </div>
  )
}

export default AnimalsPage