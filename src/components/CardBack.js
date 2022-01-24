import {useState} from 'react';
import styles from './Card.module.css';

const CardBack = ({isFlipped, setIsFlipped}) => {
  const [isClicked, setIsClicked] = useState(false)

  return (
    <>
    <div className={`${styles.back} ${styles.face}`}>
      <h1>The Back</h1>
      <button onClick={() => {
        setIsFlipped(false) 
        setIsClicked(true)
        }}>Flip Me</button>
    </div>
    </>
  )
}

export default CardBack;