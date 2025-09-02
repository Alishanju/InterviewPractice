import React from 'react';
import {useMutation, useQuery} from '@tanstack/react-query';
import { addPost, fetchPosts, fetchTags } from '../Api/api';

const PostList = () => {
    const {data:postData,isLoading,isError,error}=useQuery({
        queryKey:["posts"],
        queryFn:fetchPosts
    });
    const {data:tagsData}=useQuery({
        queryKey:["tags"],
        queryFn:fetchTags
    });
    const {mutate}=useMutation({
        mutateFn:addPost
    })

    function handleSubmit(){

    }
  return (
    <div className="container">
        <form onSuibmit={handleSubmit}>
            <input type="text" name="title" className="postbox" placeholder="Enter your post..."/>
            <div className='tags'> 
                {tagsData?.map(tag => (
                    <div key={tag}>
                        <input name={tag} id={tag} type="checkbox" />
                        <label htmlFor={tag}>{tag}</label>
                    </div>
                ))}

            </div>
        </form>
    {isLoading&&<p>Loading...</p>}
    {isError&&<p>{error?.message}</p>}
   {postData&& postData.map((post)=>(
        <div key={post.id} className="post">
            <div>{post.title}</div>
            {post.tags.map(tag=><span key={tag}>{tag}</span>)}

        </div>
    ))}
    </div>
   
  )
}

export default PostList
