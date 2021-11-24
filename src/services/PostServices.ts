import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IPost } from '../models/IPost';

export const postAPI = createApi({
  reducerPath: 'postAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5000', //create JSON server with JSON Server
  }),
  tagTypes: ['Post'],
  endpoints: (builder) => ({
    fetchAllPosts: builder.query<IPost[], number>({
      query: (limit: number = 5) => ({
        url: '/posts',
        params: { _limit: limit },
      }),
      providesTags: (result) => ['Post'], //для динамического обновления состояния
    }),
    createPost: builder.mutation<IPost, IPost>({
      query: (post) => ({
        url: '/posts',
        method: 'POST',
        body: post,
      }),
      invalidatesTags: ['Post'], //для динамического обновления состояния
    }),
    updatePost: builder.mutation<IPost, IPost>({
      query: (post) => ({
        url: `/posts/${post.id}`,
        method: 'PUT',
        body: post,
      }),
      invalidatesTags: ['Post'], //для динамического обновления состояния
    }),
    deletePost: builder.mutation<IPost, IPost>({
      query: (post) => ({
        url: `/posts/${post.id}`,
        method: 'DELETE',
        body: post,
      }),
      invalidatesTags: ['Post'], //для динамического обновления состояния
    }),
  }),
});
