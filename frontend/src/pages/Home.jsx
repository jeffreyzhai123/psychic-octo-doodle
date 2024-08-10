import React from "react";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
  useUser,
} from "@clerk/clerk-react";
import Navigatebar from "../components/Navbar";

const Home = (props) => {
  // Use the useUser hook to get the details about the logged in user
  const { user } = useUser();

  return (
    <div className="main">
      {/* The children of the SignedOut component are rendered only when the user is signed out from the app. In this case, the app will render a SignInButton */}
      <SignedOut>
        <div className="flex flex-col justify-center items-center h-screen mx-auto text-center mb-4">
          <div className="font-bold text-5xl"> Welcome! </div>
        </div>
        <div className="text-center mb-4">This is the home page.</div>
        <SignInButton>
          <input className="btn btn-primary" type="butto" value={"Log in"} />
        </SignInButton>
        n
      </SignedOut>

      {/* The children of the SignedIn component are rendered only when the user is signed in. In this case, the app will render the SignOutButton */}
      <SignedIn>
        <div>
          <Navigatebar />
        </div>
        <div className="flex flex-col justify-center items-center mx-auto text-center mb-4">
          <SignOutButton>
            <input
              className="btn btn-secondary"
              type="button"
              value={"Log out"}
            />
          </SignOutButton>
        </div>
      </SignedIn>
    </div>
  );
};

export default Home;
