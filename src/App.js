import { useContext, useEffect } from "react";
import { AppContext } from "./context/AppContext";
import Blogs from "./components/Blogs";
import Header from "./components/Header";
import Pagination from "./components/Pagination";
import './App.css';

export default function App()
{
  const {fetchBlogPosts} = useContext(AppContext);

  useEffect(() => {
    fetchBlogPosts();
  },[]);

  return(
    <div className="w-full h-full flex flex-col gap-y-2 justify-between items-center">
      <Header />
      <Blogs />
      <Pagination />
    </div>
  )
}