import Link from "next/link";
import Image from "next/image";

const HomeAbout = () => {
  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com", // Replace with your LinkedIn URL
      icon: "/assets/linked.svg",
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com", // Replace with your Facebook URL
      icon: "/assets/facebook.svg",
    },
    {
      name: "X",
      href: "https://x.com", // Replace with your X URL
      icon: "/assets/x.png",
    },
    {
      name: "YouTube",
      href: "https://www.youtube.com", // Replace with your YouTube URL
      icon: "/assets/youtube.svg",
    },
  ];

  return (
    <section id="about" aria-labelledby="home-about-heading" className="checkBg px-6 py-12 text-white sm:py-16 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <h2 id="home-about-heading" className="mb-8 text-center text-2xl font-bold text-white sm:mb-10 sm:text-3xl">
          Are You Charged With a Crime in Oklahoma?
        </h2>

        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Left Text Column */}
          <div className="relative isolate overflow-hidden p-4 sm:p-6">
            <Image
              src="/assets/Oklahoma.svg"
              alt=""
              aria-hidden="true"
              fill
              className="pointer-events-none -z-10 object-contain"
            />
            <div className="space-y-4 text-sm leading-6 text-white/90 sm:text-base sm:leading-7">
              <p>
                If you’ve been charged with a serious crime, you need the help of a serious Oklahoma City criminal defense lawyer from The Jones Firm, PLLC. Ron Jones, A.K.A “The Brilliant Brawler,” is here to fight for you. Don’t rely on just any attorney when your life is at stake. You need a lawyer with the brains, guts, and grit to do what it takes to get the best possible results for your case.
              </p>
              <p>
                Ron became The Brilliant Brawler through education at one of America’s top law schools, training in the rough &amp; tumble courtrooms of Chicago, and victories both there and here in Oklahoma. Ron doesn’t back down. He doesn’t shy away from a fight. The Jones Firm, PLLC is committed to achieving winning results. It’s time to get the legal representation you deserve. It’s time for the Brilliant Brawler.
              </p>
            </div>
          </div>

          {/* Right Media Column */}
          <div>
            <div className="aspect-video overflow-hidden rounded-md bg-black">
              <iframe
                className="h-full w-full"
                src="https://www.youtube-nocookie.com/embed/W8srzvsmmcg"
                title="Meet Ron Jones of The Jones Firm, PLLC"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>

            {/* Button + Social Icons Container */}
            <div className="mt-4 flex flex-wrap items-center justify-between gap-4">
              <Link
                href="/about"
                className="transform scale-90 inline-flex min-h-11 items-center bg-[#D6232E] px-5 py-2.5 text-sm font-semibold text-white transition-all hover:scale-100 hover:bg-white hover:text-[#001541] focus-visible:scale-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                Learn More About Ron Jones
              </Link>

              {/* Social Media Icons */}
              <div className="flex items-center gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit Ron Jones on ${social.name}`}
                    className="transform scale-90 transition-all hover:scale-100 hover:opacity-80 focus-visible:scale-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    <Image
                      src={social.icon}
                      alt={`${social.name} Icon`}
                      width={24}
                      height={24}
                      className="h-12 w-12 object-contain"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;