import {auth,provider} from "../config/firebase"
import { signInWithPopup } from "firebase/auth"
import {useNavigate} from "react-router-dom"
export const Login=()=>{
const naviaget = useNavigate ();
const signWithgoogle = async ()=>{

const result= await  signInWithPopup(auth,provider);

console.log (result);
naviaget("/");
}

    return <div> <p>
        Sign In With Google To Continue
        </p> 
        <button   onClick={signWithgoogle}>
            Sign In 
        </button>
        
        </div>
}