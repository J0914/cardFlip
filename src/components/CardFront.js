import styles from './Card.module.css';

const CardFront = ({isFlipped, setIsFlipped}) => {

  return (
    <>
    <div className={`${styles.front} ${styles.face}`}>
      <h1>The Front</h1>
      <button onClick={() => setIsFlipped(true)}>Flip Me</button>
    </div>
    </>
  )
};

export default CardFront;