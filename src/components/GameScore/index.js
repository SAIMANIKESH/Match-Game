import './index.css'

const GameScore = props => {
  const {score, clickPlayAgain} = props

  const onClickPlayAgain = () => {
    clickPlayAgain()
  }

  return (
    <div className="score-board-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
        alt="trophy"
        className="trophy-img"
      />
      <p className="your-score-title">YOUR SCORE</p>
      <p className="score-display">{score}</p>
      <button
        type="button"
        onClick={onClickPlayAgain}
        className="play-again-button"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
          alt="reset"
          className="reset-img"
        />{' '}
        PLAY AGAIN
      </button>
    </div>
  )
}

export default GameScore
