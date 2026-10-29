import Link from "next/link";

const Blog = () => {
  const blogPosts = [
    {
      image: "/assets/homicideBlog.png",
      title: "What Are The Types Of Homicide Charges in Oklahoma?",
      desc: "Homicide charges are exceptionally serious, so understanding the types you can face is vital. This blog explores what you must know.",
    },
    {
      image: "/assets/drugBlog.png",
      title: "What Are the Penalties for Drug Trafficking in Oklahoma?",
      desc: "Drug trafficking offenses are incredibly serious. This blog explores what you must know if facing these charges.",
    },
    {
      image: "/assets/resisting.png",
      title: "What Penalties Can I Face For Resisting Arrest In Oklahoma City?",
      desc: "Have you ever wondered about the penalties you could face for resisting arrest in Oklahoma? Read this blog to learn more.",
    },
  ];

  return (
    <section className="BlogContainer relative overflow-hidden checkBg">
      <div className=" mx-auto my-[10vh] max-w-7xl px-6 lg:px-10">
        <div className="mb-8 text-center">
          <h2 className=" text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Read Our Latest Blogs
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {blogPosts.map(({ image, title, desc }, index) => (
            <article
              key={index}
              className="group flex h-full cursor-pointer flex-col overflow-hidden rounded-2xl border border-[#001541]/10 bg-white shadow-[0_20px_45px_rgba(0,21,65,0.08)] transition-transform duration-300 hover:-translate-y-1"
            >
              <img
                className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                src={image}
                alt={title}
              />

              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-2xl font-semibold leading-tight text-[#001541]">
                  {title}
                </h3>
                <p className="mt-4 flex-1 text-base leading-7 text-[#3e4c67]">{desc}</p>

                <Link
                  href="/contact"
                  className="mt-6 inline-flex items-center gap-2 self-start text-sm font-semibold uppercase tracking-[0.12em] text-[#D6232E] transition-colors hover:text-[#001541]"
                >
                  Read More
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;