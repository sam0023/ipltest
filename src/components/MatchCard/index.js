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

  const css = matchStatus === 'Won' ? 'green' : 'red'

  return (
    <li>
      <img src={competingTeamLogo} alt={competingTeam} />
      <p>{result}</p>
      <p className={css}>{matchStatus}</p>
    </li>
  )
}
export default MatchCard
