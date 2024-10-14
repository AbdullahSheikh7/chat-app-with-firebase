"use client"

import SignIn from "@/pages/SignIn"
import useAuth from "@/hooks/useAuthHook"
import Spinner from "@/component/Spinner"
import Chats from "@/pages/Chats"

const Home = () => {
  const [ user, loadingUser ] = useAuth();

  const containerStyling = { height: "100vh", display: "grid", placeItems: "center" }

  return (
    <>
      {loadingUser ? <div style={containerStyling}><Spinner /></div> : user ? <Chats /> : <SignIn />}
    </>
  )
}

export default Home