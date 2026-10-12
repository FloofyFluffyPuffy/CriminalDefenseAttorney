import React from 'react'
const Blog = () => {
    const BlogsData = [
        {image: "assets/homicideBlog.png", title: "What Are The Types Of Homicide Charges in Oklahoma?", desc: "Homicide charges are exceptionally serious, so understanding the types you can face is vital. This blog explores what you must know."},
        {image: "assets/drugBlog.png", title: "What Are The Types Of Homicide Charges in Oklahoma?", desc: ""},
        {image: "", title: "What Are The Types Of Homicide Charges in Oklahoma?", desc: ""}
    ]

  return (
    <section className='Blog flex h-[50vh] justify-center items-center'>
        <div className='BlogContentCon h-full bg-amber-300'>
            <h1 className='text-4xl mt-2'>READ OUR LATEST BLOGS</h1>
            <div className='BlogPosts '>
                <div></div>
            </div>
        </div>
    </section>
  )
}

export default Blog