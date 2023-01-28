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
        <p>First Innings</p>
        <p>{firstInnings}</p>
        <p>Second Innings</p>
        <p>{secondInnings}</p>
        <p>Man Of The Match</p>
        <p>{manOfTheMatch}</p>
        <p>Umpires</p>
        <p>{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
