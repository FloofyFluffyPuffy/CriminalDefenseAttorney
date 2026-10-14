import React from 'react'
const Blog = () => {
    const BlogsData = [
        {image: "assets/homicideBlog.png", title: "What Are The Types Of Homicide Charges in Oklahoma?", desc: "Homicide charges are exceptionally serious, so understanding the types you can face is vital. This blog explores what you must know."},
        {image: "assets/drugBlog.png", title: "What Are the Penalties for Drug Trafficking in Oklahoma?", desc: "Drug trafficking offenses are incredibly serious. This blog explores what you must know if facing these charges."},
        {image: "assets/resisting.png", title: "What Penalties Can I Face For Resisting Arrest In Oklahoma City?", desc: "Have you ever wondered about the penalties you could face for resisting arrest in Oklahoma? Read this blog to learn more."}
    ]

  return (
    <section className='Blog flex h-screen justify-center items-center'>
        <div className='BlogContentCon text-center h-full bg-amber-300'>
            <h1 className='text-4xl mt-2'>READ OUR LATEST BLOGS</h1>
            <div className='BlogPosts gap-10 flex justify-around items-center '>
                {BlogsData.map(({image, title, desc}, index) => (
                    <div key={index} className='BlogBody w-[25%] justify-around bg-white items-center flex flex-col'>
                        <img className='h-64 w-64' src={image} alt="" />
                        <h1 className='text-2xl'>{title}</h1>
                        <p>{desc}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Blog