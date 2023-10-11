import {Post as Ipost } from "./Home"
interface Props{
post: Ipost

}
export const Post =(props:Props)=>{
const {post}=props;
return <div>
    <div className="header"  >
        <h1>{post.title}</h1>
        
    </div>
    <div  className="main" >
        <p>{post.description}</p>
    </div>
    <div className="footer" >
        <p>
           @ {post.username}
        </p>
        {/* <button> &#128077; </button> */}
    </div>
</div>

} 