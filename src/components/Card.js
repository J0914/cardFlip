import {useState} from 'react';
import CardFront from './CardFront';
import CardBack from './CardBack';

import styles from './Card.module.css'

const Card = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  console.log(isFlipped)

  return (
    <div className={styles.scene}>
      <div className={isFlipped ? `${styles.card} ${styles.isFlipped}` : `${styles.card}`}>
        {!isFlipped && <CardFront isFlipped={isFlipped} setIsFlipped={setIsFlipped} />}
        {isFlipped && <CardBack isFlipped={isFlipped} setIsFlipped={setIsFlipped} />}
      </div>
    </div>
  )
}

export default Card;