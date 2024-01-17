// Write your JS code here
import LogOutButton from '../LogoutButton'
import Header from '../Header'

import './index.css'

const Home = () => (
  <>
    <Header />
    <div className="home">
      <h1>Home Route</h1>
      <LogOutButton />
    </div>
  </>
)

export default Home
