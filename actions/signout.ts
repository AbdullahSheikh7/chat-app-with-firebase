import { auth } from "@/firebase/firebase"

const signout = () => {
  auth.signOut()
}

export default signout
