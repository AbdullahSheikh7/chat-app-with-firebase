import { auth } from "@/firebase/firebase";
import { GoogleAuthProvider, signInWithPopup,  } from "firebase/auth";

const signinWithGoogle = async () => {
  await signInWithPopup(auth, new GoogleAuthProvider());
}

export default signinWithGoogle
