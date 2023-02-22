import style from '../styles/index.module.css'

const Letter = ({ text }) => {
  return (
    <p
      className={`animate__animated animate__rubberBand animate__fast ${style.letter}`}
    >
      {text}
    </p>
  )
}

export default Letter
