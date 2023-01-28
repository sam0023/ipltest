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
    <div className="latest-match-container">
      <div className="latest-match-container-part1 ">
        <div>
          <h1 className="latest-match-heading">{competingTeam}</h1>
          <h2>{date}</h2>
          <p>{venue}</p>
          <p>{result}</p>
        </div>
        <img
          className="latest-match-container-img"
          src={competingTeamLogo}
          alt={competingTeam}
        />
      </div>
      <div className="container">
        <hr />
      </div>
      <div className="latest-match-container-part2">
        <h2>First Innings</h2>
        <p>{firstInnings}</p>
        <h2>Second Innings</h2>
        <p>{secondInnings}</p>
        <h2>Man Of The Match</h2>
        <p>{manOfTheMatch}</p>
        <h2>Umpires</h2>
        <p>{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
