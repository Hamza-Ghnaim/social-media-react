import React,{Fragment,useState} from "react";
import Header from "./Header";
import "./Posts.css"
const Posts = ()=>{
    const [PostsArray, setPostsArray] = useState([]);
    const user = JSON.parse(localStorage.userinfo);
    (async() => {
        const response = await(fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`));
        setPostsArray(await(response.json()))            
        
        })();

    return(
        <Fragment>
            <div className={"enclosing"}>
                <div className={"container"}>
                    <h1 className={"title"}>Discover</h1>
                    <Header/>
                </div>
            </div>
            <Discover content = {PostsArray}/>
        </Fragment>
    )
};

export default Posts;