"use client"

import "@/css/signin.scss"
import signinWithGoogle from "@/actions/signin"

const GoogleSignInBtn = () => {
  return (
    <button onClick={signinWithGoogle} className="googleSignInBtn" id="googleSignInBtn">
      <span className="googleLogo">
        <img src="https://developers.google.com/identity/images/g-logo.png" alt="Google Logo" width="20px" />
      </span>
      <span className="text">
        Sign in with Google
      </span>
    </button>
  )
}

export default GoogleSignInBtn