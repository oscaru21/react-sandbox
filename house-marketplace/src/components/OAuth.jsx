import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import googleIcon from "../assets/svg/googleIcon.svg";
import {db} from '../firebase.config'

function OAuth() {
  const navigate = useNavigate();
  const location = useLocation();

  const onGoogleClick = async () => {
    try {
        const auth = getAuth()
        const provider = new GoogleAuthProvider()
        const result = await signInWithPopup(auth, provider)
        const user = result.user
        //check for user
        const userRef = doc(db, 'users', user.uid)
        const docSnap = await getDoc(userRef)

        if(!docSnap.exists()){
            await setDoc(userRef, {
                name: user.displayName,
                email: user.email,
                timestamp: serverTimestamp(),
            })
        }
        navigate('/')
    } catch (error) {
        toast.error('Could not authorize with google')
    }
    
  }

  return (
    <div className="socialLogin">
      <p>Sign {location.pathname === "/sign-in" ? "in" : "up"} with</p>
      <button className="socialIconDiv" onClick={onGoogleClick}>
        <img src={googleIcon} alt="" className="socialIconImg" />
      </button>
    </div>
  );
}

export default OAuth;
