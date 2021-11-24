import { error } from 'console';
import React from 'react';
import { IPost } from '../models/IPost';
import { postAPI } from '../services/PostServices';
import PostItem from './PostItem';

const PostContainer = () => {
  //useFetchAllPostsQuery сгенерированный с помощь RTK query
  const { data: posts, error, isLoading } = postAPI.useFetchAllPostsQuery(100); // лимит постов
  const [createPost, {}] = postAPI.useCreatePostMutation();
  const [updatePost, {}] = postAPI.useUpdatePostMutation();
  const [deletePost, {}] = postAPI.useDeletePostMutation();

  const handelCreate = async () => {
    const title = prompt();
    await createPost({ title, body: title } as IPost);
  };

  const handlerRemove = (post: IPost) => {
    deletePost(post)
  }

  const handlerUpdate = (post: IPost) => {
    updatePost(post)
  }

  return (
    <div>
      <div className="post__list">
        <button onClick={handelCreate}>ADD</button>
        {isLoading && <h1>Loading...</h1>}
        {error && <h1>Error</h1>}
        {/* posts && posts.map  проверяем на undefined и не null*/}
        {posts && posts.map((post) => <PostItem key={post.id} remove={handlerRemove} update={handlerUpdate} post={post} />)}
      </div>
    </div>
  );
};

export default PostContainer;
