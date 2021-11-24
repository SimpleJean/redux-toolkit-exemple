import { error } from 'console';
import React from 'react';
import { postAPI } from '../services/PostServices';
import PostItem from './PostItem';

const PostContainer2 = () => {
  //useFetchAllPostsQuery сгенерированный с помощь RTK query
  const { data: posts, error, isLoading } = postAPI.useFetchAllPostsQuery(100); // лимит постов

  return (
    <div>
      <div className="post__list">
        {/* {isLoading && <h1>Loading...</h1>}
        {error && <h1>Error</h1>} */}
        {/* posts && posts.map  проверяем на undefined и не null*/}
       {/* {posts && posts.map((post) => <PostItem key={post.id}  post={post} />)}*/}
      </div>
    </div>
  );
};

export default PostContainer2;
