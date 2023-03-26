import React, { createContext, useState } from "react";

export const BlogsContext = createContext();

export const BlogsProvider = ({ children }) => {
  const [blogs, setBlogs] = useState([]);

  return (
    <BlogsContext.Provider value={[blogs, setBlogs]}>
      {children}
    </BlogsContext.Provider>
  );
};
