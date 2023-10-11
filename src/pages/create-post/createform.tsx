import {useForm} from "react-hook-form"
import * as yup from "yup"
import {yupResolver} from "@hookform/resolvers/yup"
import {addDoc,collection} from "firebase/firestore"
import {auth, db}from "../../config/firebase"
import { useAuthState } from "react-firebase-hooks/auth"
import { useNavigate } from "react-router-dom"


interface createFormdata{
title: string;
description: string;
}

export const CreateForm=()=>{
    const [user]= useAuthState(auth);
    const navigate= useNavigate();
const schema = yup.object().shape({
title:yup.string().required("you must add a title"),
description: yup.string().required("you must add discription..")
})

const {register , handleSubmit, formState:{errors},}= useForm < createFormdata>({
resolver:yupResolver( schema),
});

const postRef = collection(db , "post")




const createPost = async  (data:createFormdata)=>{
 await addDoc(postRef, {
 ...data,
username : user?.displayName,
userid: user?.uid,
     })
     navigate ("/" );
}

    return (<form onSubmit={handleSubmit( createPost)} >
<input     placeholder=" Title..."   {...register("title")}/>
<p style={{color:"red"}}> {errors.title?.message}</p>
<textarea placeholder="Description..."   {...register ("description")}/>
<p   style={{color:"red"}}>{errors.description?.message}</p>
<input  type="submit"/>
    </form>
    )
    
}