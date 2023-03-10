import {Component} from 'react'
import Loader from 'react-loader-spinner'

import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import './index.css'

class TeamMatches extends Component {
  state = {
    teamBannerUrl: '',
    latestMatchDetails: {},
    recentMatches: [],
    showLoader: true,
  }

  componentDidMount() {
    this.apiRequest()
  }

  apiRequest = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    // const response = await fetch(
    //   `https://cors-anywhere.herokuapp.com/http://apis.ccbp.in/ipl/${id}`,
    // )

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)

    const data = await response.json()
    const updatedData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails1: data.latest_match_details,
      recentMatches1: data.recent_matches,
    }

    const {teamBannerUrl, latestMatchDetails1, recentMatches1} = updatedData

    const latestMatchDetails = {
      umpires: latestMatchDetails1.umpires,
      result: latestMatchDetails1.result,
      manOfTheMatch: latestMatchDetails1.man_of_the_match,
      id: latestMatchDetails1.id,
      date: latestMatchDetails1.date,
      venue: latestMatchDetails1.venue,
      competingTeam: latestMatchDetails1.competing_team,
      competingTeamLogo: latestMatchDetails1.competing_team_logo,
      firstInnings: latestMatchDetails1.first_innings,
      secondInnings: latestMatchDetails1.second_innings,
      matchStatus: latestMatchDetails1.match_status,
    }
    const recentMatches = recentMatches1.map(eachItem => ({
      umpires: eachItem.umpires,
      result: eachItem.result,
      manOfTheMatch: eachItem.man_of_the_match,
      id: eachItem.id,
      date: eachItem.date,
      venue: eachItem.venue,
      competingTeam: eachItem.competing_team,
      competingTeamLogo: eachItem.competing_team_logo,
      firstInnings: eachItem.first_innings,
      secondInnings: eachItem.second_innings,
      matchStatus: eachItem.match_status,
    }))

    this.setState({
      teamBannerUrl,
      latestMatchDetails,
      recentMatches,
      showLoader: false,
    })
  }

  render() {
    const {
      teamBannerUrl,
      latestMatchDetails,
      recentMatches,
      showLoader,
    } = this.state

    const {match} = this.props
    const {params} = match
    const {id} = params

    const page = (
      <div className={`${id} team-matches-bg`}>
        <img
          className="match-page-banner"
          src={teamBannerUrl}
          alt="team banner"
        />
        <p className="latest-matches-heading">Latest Matches</p>
        <LatestMatch details={latestMatchDetails} />
        <ul className="match-cards-container">
          {recentMatches.map(eachItem => (
            <MatchCard key={eachItem.id} details={eachItem} />
          ))}
        </ul>
      </div>
    )
    const loader = (
      <div className={`${id} team-matches-spinner`}>
        <Loader type="Oval" color="#ffffff" height={50} width={50} />
      </div>
    )
    const finalPage = showLoader ? loader : page
    return finalPage
  }
}

export default TeamMatches
