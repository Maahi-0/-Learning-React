import { useReducer } from "react";

const DEFAULT_CONTEXT = {
  postList: [],
  addPost: () => { },
  deletePost: () => { },
}

const { createContext } = require("react");

const PostList = createContext(DEFAULT_CONTEXT);

const postListReducer = (currentPostList, action) => {
  return currentPostList;
}


const PostListProvider = ({ children }) => {

  const [postList, dispachPostList] = useReducer(postListReducer, DEFAULT_CONTEXT);


  const addPost = () => {

  }

  const deletePost = () => {

  }
  return <PostList.Provider value={
    {
      postList: postList,
      addPost: addPost,
      deletePost: deletePost
    }
  } >{children}</PostList.Provider>
}

export default PostListProvider;