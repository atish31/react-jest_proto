import axios from "axios";
import { useState, useEffect } from "react";

const fetchPosts = async() => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    return response.data;
} 

export const Posts = () => {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        const postsResponse = fetchPosts();
        postsResponse.then(response => {
            setPosts(response);
        })
        .catch(error => {
            throw(error);
        })
    }, []);

    console.log(posts, '||| posts here');
    
    return (
        <>
            Posts are here
            {(posts && posts.length) &&
            <ul>
                {
                    posts.map((post) => (
                        <li key={post.id}>
                            {post.userId}
                        </li>
                    ))
                }
            </ul>
            
            }
        </>
    )
}