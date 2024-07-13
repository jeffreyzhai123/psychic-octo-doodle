import React from 'react'
import { SignedIn, SignedOut, SignInButton, SignOutButton, useUser } from '@clerk/clerk-react'
import Navigatebar from '../components/Navbar'
import DropMenu from '../components/Practice/DropMenu'
import './Home.css'

const Home = (props) => {
  // Use the useUser hook to get the details about the logged in user
  const { user } = useUser()


  return (
    <div className="mainContainer">
      {/* The children of the SignedOut component are rendered only when the user is signed out from the app. In this case, the app will render a SignInButton */}
      <SignedOut>
        <div className={'titleContainer'}>
          <div>Welcome!</div>
        </div>
        <div>This is the home page.</div>
        <SignInButton>
          <input className={'inputButton'} type='button' value={'Log in'} />
        </SignInButton>
      </SignedOut>

      {/* The children of the SignedIn component are rendered only when the user is signed in. In this case, the app will render the SignOutButton */}
      <SignedIn>
        <div>
          <Navigatebar />
        </div>
        <SignOutButton>
          <input className={'inputButton'} type="button" value={'Log out'} />
        </SignOutButton>
      </SignedIn>

      {/* You can also check if a user is logged in or not using the 'user' object from the useUser hook. In this case, a non-undefined user object will render the user's email on the page */}
      { user ? <div> Your email address is {user.primaryEmailAddress.emailAddress} </div> : null }
    </div>
  )
}

export default Home