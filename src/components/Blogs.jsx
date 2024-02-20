import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import Spinner from './Spinner';

const Blogs = () => {
  const { posts, loading } = useContext(AppContext);

  return (
    <div className='w-11/12 max-w-[620px] h-11/12 py-3 flex flex-col justify-center items-center gap-y-7 my-[5rem]'>
      {
        loading ? 
          (<Spinner />) :
          (
            posts.length === 0 ? 
            (
              <div>
                <p>No Post Found</p>
              </div>
            ) :
            (posts.map( (post) => (
              <div
              className='border-2 shadow-sm p-5 hover:bg-slate-200'
              key={post.id}>
                <p className='font-bold uppercase mt-1'>
                  {post.title}
                </p>
                <p className='text-xs my-1'>
                  By <span className='italic'>{post.author}</span> on <span className='font-bold underline'>{post.category}</span>
                </p>
                <p className='text-xs'>Posted on {post.date}</p>
                <p className='text-sm mt-2'>{post.content}</p>
                <div className='mt-2 text-xs text-blue-500 font-bold underline flex gap-x-3'>
                  {post.tags.map( (tag, index) => {
                    return <span key={index}>{`#${tag}`}</span>
                  })}
                </div>
              </div>
            ))) 
          )
      }
    </div>
  )
}
export default Blogs;
