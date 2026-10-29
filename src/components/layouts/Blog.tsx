"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { blogPosts } from "@/app/context/blogPosts";

const Blog = () => {
  const pathname = usePathname();
  const currentSlug = pathname.split("/").filter(Boolean).at(-1);
  const visiblePosts = blogPosts
    .filter(({ slug }) => slug !== currentSlug)
    .slice(0, 3);

  return (
    <section className="BlogContainer relative overflow-hidden checkBg">
      <div className=" mx-auto my-[10vh] max-w-7xl px-6 lg:px-10">
        <div className="mb-8 text-center">
          <h2 className=" text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Read Our Latest Blogs
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {visiblePosts.map(({ slug, image, title, desc }) => (
            <Link
              key={slug}
              href={`/${slug}`}
              className="group block h-full rounded-2xl transition-transform duration-300 hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-[#001541]/10 bg-white shadow-[0_20px_45px_rgba(0,21,65,0.08)]">
                <Image
                  className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  src={image}
                  alt={title}
                  width={1200}
                  height={800}
                />

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-2xl font-semibold leading-tight text-[#001541]">
                    {title}
                  </h3>
                  <p className="mt-4 flex-1 text-base leading-7 text-[#3e4c67]">{desc}</p>

                  <span className="mt-6 inline-flex items-center gap-2 self-start text-sm font-semibold uppercase tracking-[0.12em] text-[#D6232E] transition-colors group-hover:text-[#001541]">
                    Read More
                    <span aria-hidden="true">→</span>
                  </span>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;