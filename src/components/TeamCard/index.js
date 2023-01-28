import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {details} = props
  console.log('in details')
  console.log(details)
  console.log('in details')
  const {name, id, teamImageUrl} = details
  console.log(name, teamImageUrl)

  return (
    <Link to={`/team-matches/${id}`} className="teamCard">
      <li className="team-card-container ">
        <img className="team-card-logo" src={teamImageUrl} alt={name} />
        <p>{name}</p>
      </li>
    </Link>
  )
}
export default TeamCard
