import React, { useEffect, useState } from 'react'

const Posts = () => {

    const [posts, setPosts] = useState();

    useEffect(() => {

        fetch("https://jsonplaceholder.org/posts");
        

    },[]);

        return (
            <div>
                <div className='container'>
                    {Array.isArray(posts) && posts.slice(0, 10).map((posts) => {
                        <div className='Card' key={posts.id}>
                            <h1>{posts.title}</h1>
                            <p>{posts.body}</p>
                        </div>
                    })}

                </div>
            </div>
        )
};

export default Posts