import './index.css'

const MatchCard = props => {
  const {details} = props
  const {
    // umpires,
    result,
    // manOfTheMatch,
    // id,
    // date,
    // venue,
    competingTeam,
    competingTeamLogo,
    // firstInnings,
    // secondInnings,
    matchStatus,
  } = details

  const css = matchStatus === 'Won' ? 'win' : 'loss'

  return (
    <li className="match-card-container">
      <img
        className="match-card-img"
        src={competingTeamLogo}
        alt={competingTeam}
      />
      <h3 className="h3">{competingTeam}</h3>
      <p>{result}</p>
      <p className={css}>{matchStatus}</p>
    </li>
  )
}
export default MatchCard
