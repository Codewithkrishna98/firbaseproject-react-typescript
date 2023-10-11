import {getDocs,collection} from "firebase/firestore"
import { db } from "../../config/firebase"
import { useState , useEffect } from "react"
import { Post } from "./post";

export interface Post {
id: string;
userid: string ;
title:string ;
username: string ;
description: string ;

}

export const Home =()=>{
    const [ postList , setPostList  ]=useState <Post []  |null >(  null)
    const postRef = collection(db , "post");

    const getPost = async ()=> {

const data = await getDocs(  postRef);
setPostList(data.docs.map((doc)=>({...doc.data(),id:doc.id})) as Post []  )

    };

    useEffect(()=>{
        getPost();
    } ,[])
    

return <div> {postList?.map((post)=> 
    
    <Post  post={post}  />    )} </div>

}