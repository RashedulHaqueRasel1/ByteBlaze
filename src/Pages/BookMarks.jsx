import { useEffect, useState } from "react"
import BlogCard from "../Components/BlogCard/BlogCard"
import { deleteBlog, getBlogs } from "../Components/Utilities"
import Empty from "../Components/Empty/Empty"

export default function BookMarks() {

  const [blogs, setBlogs] = useState([])

  useEffect(() => {
    const stored = getBlogs();
    setBlogs(stored)
  }, [])

  const handelDelate = (id) => {
    deleteBlog(id)
    const stored = getBlogs();
    setBlogs(stored)
  }



  if(blogs<1){
   return <Empty message={'No BookMarks Available'} address={'/blogs'} label={'Go To Blogs'}></Empty>
  }

  return (

    <div className="grid px-4 sm:px-8 lg:px-12 py-8 justify-center grid-cols-1 gap-8 container mx-auto sm:grid-cols-2 lg:grid-cols-3">


      {
        blogs.map((blog, id) => <BlogCard handelDelate={handelDelate} delateAble={true} key={id} blog={blog}></BlogCard>)
      }

    </div>
  )
}
