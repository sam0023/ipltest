import './index.css'

const LatestMatch = props => {
  const {details} = props
  const {
    umpires,
    result,

    manOfTheMatch,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
    // matchStatus,
  } = details

  // const teamName= (competingTeam===firsInnings)?secondInnings:firsInnings
  return (
    <div>
      <div>
        <div>
          <h1>{competingTeam}</h1>
          <p>{date}</p>
          <p>{venue}</p>
          <p>{result}</p>
        </div>
        <img src={competingTeamLogo} alt={competingTeam} />
      </div>
      <hr />
      <p>First Innings</p>
      <p>{firstInnings}</p>
      <p>Second Innings</p>
      <p>{secondInnings}</p>
      <p>Man Of The Match</p>
      <p>{manOfTheMatch}</p>
      <p>Umpires</p>
      <p>{umpires}</p>
    </div>
  )
}

export default LatestMatch
