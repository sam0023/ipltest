import {Component} from 'react'

import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import TeamCard from '../TeamCard/index'

import './index.css'

class Home extends Component {
  state = {teamCardList: [], showLoader: true}

  componentDidMount() {
    this.apiRequest()
  }

  apiRequest = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()

    const {teams} = data

    const updatedData = teams.map(eachItem => ({
      name: eachItem.name,
      id: eachItem.id,
      teamImageUrl: eachItem.team_image_url,
    }))
    this.setState({teamCardList: updatedData, showLoader: false})
  }

  render() {
    const {teamCardList, showLoader} = this.state

    const loader = (
      <div>
        <Loader type="Oval" color="#ffffff" height={50} width={50} />
      </div>
    )
    console.log(teamCardList)
    const dashBoard = (
      <ul>
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
          />
          <h1>IPL Dashboard</h1>
        </div>
        <ul>
          {teamCardList.map(eachItem => (
            <TeamCard key={eachItem.id} details={eachItem} />
          ))}
        </ul>
      </ul>
    )
    const finalPage = showLoader === '1' ? loader : dashBoard
    return finalPage
  }
}
export default Home
