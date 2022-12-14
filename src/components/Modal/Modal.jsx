import React from 'react'
import ReactDOM from 'react-dom'
import { useDispatch } from 'react-redux'
import { setIsOpenModal } from '../../redux/slices/animalsSlice'
import { setIsOpen } from '../../redux/slices/todaySlice'
import styles from './Modal.module.scss'

const Modal = ({ animal, type }) => {
  
  const dispatch = useDispatch()

  const node = document.querySelector('#modal')
  if(!node) return null

  return ReactDOM.createPortal(
    <div className={styles.modalWrapper}>
        <div className={styles.modal}>
          {type === 'today' &&
            <><h3 className={styles.name}>{animal.animal.name}</h3>
            <p className={styles.info}><span className={styles.row}>Порода:</span> {animal.animal.spec.name}</p>
            <p className={styles.info}><span className={styles.row}>Возраст:</span> {animal.animal.age} лет</p>
            <p className={styles.info}><span className={styles.row}>Рост:</span> {animal.animal.height ? animal.animal.height:'-'} {animal.animal.heightUnit}</p>
            <p className={styles.info}><span className={styles.row}>Вес:</span> {animal.animal.weight?animal.animal.weight:'-'} {animal.animal.weightUnit}</p></>
          } 
          
          {type === 'animals' &&
            <><h3 className={styles.name}>{animal.name}</h3>
            <p className={styles.info} ><span className={styles.row}>Порода:</span> {animal.spec.name}</p>
            <p className={styles.info}><span className={styles.row}>Возраст:</span> {animal.age} лет</p>
            <p className={styles.info}><span className={styles.row}>Рост:</span> {animal.height ? animal.height:'-'} {animal.heightUnit}</p>
            <p className={styles.info}><span className={styles.row}>Вес:</span> {animal.weight?animal.weight:'-'} {animal.weightUnit}</p>
          </>}

          <span className={styles.close} onClick={() => {
            dispatch(setIsOpen(false))
            dispatch(setIsOpenModal(false))
            }}>&times;</span>
        </div>   
        
    </div>, node
  )
}

export default Modal