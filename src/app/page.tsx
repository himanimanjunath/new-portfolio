"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {

  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  const titles = ["Coder.", "Full-Stack Developer.", "Software Engineer."]

  useEffect(() => {
    const currentTitle = titles[currentIndex]
    const typingSpeed = isDeleting ? 50 : 100
    const pauseTime = isDeleting ? 500 : 2000

    const timer = setTimeout(() => {
      if (!isDeleting && displayText === currentTitle) {
        // Finished typing, start deleting after pause
        setTimeout(() => setIsDeleting(true), pauseTime)
      } else if (isDeleting && displayText === "") {
        // Finished deleting, move to next title
        setIsDeleting(false)
        setCurrentIndex((prev) => (prev + 1) % titles.length)
      } else if (isDeleting) {
        // Continue deleting
        setDisplayText(currentTitle.substring(0, displayText.length - 1))
      } else {
        // Continue typing
        setDisplayText(currentTitle.substring(0, displayText.length + 1))
      }
    }, typingSpeed)

    return () => clearTimeout(timer)
  }, [displayText, currentIndex, isDeleting, titles])


  const skills = {
    Languages: [
      { name: "Python", icon: "" },
      { name: "TypeScript", icon: "📘" },
      { name: "JavaScript", icon: "📜" },
      { name: "C++", icon: "⚡" },
      { name: "C", icon: "🔧" },
      { name: "HTML", icon: "🌐" },
      { name: "CSS", icon: "🎨" },
    ],
    "Technologies/Frameworks": [
      { name: "React", icon: "⚛️" },
      { name: "Next.js", icon: "▲" },
      { name: "Tailwind", icon: "🌊" },
    ],
  }

  return (
  <div className="min-h-screen bg-gray-50">
    {/* nav bar */}
    <nav className ="sticky top-0 z-50 flex justify-center p-6">
        <div className="flex items-center space-x-1 backdrop-blur-sm bg-white/60 rounded-full px-2 py-2 shadow-sm">
          <a href="#home" className="px-4 py-2 font-medium text-sm text-gray-600 hover:text-gray-900 transition-colors">Home</a>
          <a href="#about" className="px-4 py-2 font-medium text-sm text-gray-600 hover:text-gray-900 transition-colors">About</a>
          <a href="#skills" className="px-4 py-2 font-medium text-sm text-gray-600 hover:text-gray-900 transition-colors">Skills</a>
          <a href="#projects" className="px-4 py-2 font-medium text-sm text-gray-600 hover:text-gray-900 transition-colors">Projects</a>
          <a href="#contact" className="px-4 py-2 font-medium text-sm text-gray-600 hover:text-gray-900 transition-colors">Contact</a>
        </div>
      </nav>
    <div className="min-h-screen bg-[linear-gradient(to_bottom,_#B9E4CB_0%,_#CEDED4_40%,_#F9FAFB_90%)]">

      {/* introduction - left side of page */}
      <main id="home" className="flex items-center justify-center min-h-[calc(100vh-120px)] px-12">
        <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pl-12">
          <div>
          <h1 className="text-4xl font-semibold text-gray-700 dark:text-gray-300 lg:text-5xl xl: text-6xl">Nice to meet you!&nbsp;
            <span className = "animate-wave">👋</span>
          </h1> 
          {/*<span className="text-4xl font-semibold text-gray-700 dark:text-gray-300 lg: text-5xl xl: text-6xl inline-block animate-wave">👋</span>*/}
          
         {/* <div className="text-5xl md:text-8xl text-black font-bold">I'm Himani</div>*/}
          <div className="mb-4 opacity-100 transform-none">
            <span className="inline-block select-none text-6xl font-bold text-gray-800 dark:text-gray-200 md:text-5xl lg:text-7xl xl:text-8xl " style={{ transform: "scale(1,1)" }}>I</span>
            <span className="inline-block select-none text-6xl font-bold text-gray-800 dark:text-gray-200 md:text-5xl lg:text-7xl xl:text-8xl" style={{ transform: "scale(1,1)" }}>'</span>
            <span className="inline-block select-none text-6xl font-bold text-gray-800 dark:text-gray-200 md:text-5xl lg:text-7xl xl:text-8xl" style={{ transform: "scale(1,1)" }}>m</span>
            <span className="inline-block select-none text-6xl font-bold text-gray-800 dark:text-gray-200 md:text-5xl lg:text-7xl xl:text-8xl">&nbsp;</span>
            <span className="inline-block select-none text-6xl font-bold text-gray-800 dark:text-gray-200 md:text-5xl lg:text-7xl xl:text-8xl" style={{ transform: "scale(1,1)" }}>H</span>
            <span className="inline-block select-none text-6xl font-bold text-gray-800 dark:text-gray-200 md:text-5xl lg:text-7xl xl:text-8xl" style={{ transform: "scale(1,1)" }}>i</span>
            <span className="inline-block select-none text-6xl font-bold text-gray-800 dark:text-gray-200 md:text-5xl lg:text-7xl xl:text-8xl" style={{ transform: "scale(1,1)" }}>m</span>
            <span className="inline-block select-none text-6xl font-bold text-gray-800 dark:text-gray-200 md:text-5xl lg:text-7xl xl:text-8xl" style={{ transform: "scale(1,1)" }}>a</span>
            <span className="inline-block select-none text-6xl font-bold text-gray-800 dark:text-gray-200 md:text-5xl lg:text-7xl xl:text-8xl" style={{ transform: "scale(1,1)" }}>n</span>
            <span className="inline-block select-none text-6xl font-bold text-gray-800 dark:text-gray-200 md:text-5xl lg:text-7xl xl:text-8xl" style={{ transform: "scale(1,1)" }}>i</span>
          </div>
          <h2 className="text-3xl md:text-3xl lg:text-4xl font-bold text-gray-700 min-h-[1.2em]">
                {displayText}
               
              </h2>
        </div>

         {/* photo - right side of page */}
         <div className="flex justify-center lg:justify-center">
          <div className="relative">
            <div
  className="absolute inset-0 rounded-full blur-xl opacity-60 scale-105"
  style={{
    backgroundImage: "linear-gradient(to right, #33875c, #33875c)" // lime-ish
  }}
></div>
            <div className="relative w-80 h-80 md:w-96 md:h-96">
              <Image
                src="/me.JPG"
                alt="Profile photo"
                width={400}
                height={400}
                className="rounded-full object-cover w-full h-full shadow-3xl"
                priority
              />
            </div>
          </div>
         </div>
        </div>

      </main>
    </div>

      {/* get to know me */}
      <section id="about" className= "px-6 py-20">
        <div className="max-w-4xl mx-auto px-10">
            <h2 className="mb-6 text-center text-4xl font-bold text-gray-700 dark:text-gray-300">Get to know me!</h2>
         {/* <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8 text-center">Get to know me!</h2> */}

         {/* Add video here */}
          <div className="flex justify-center mb-8">
            <video 
              className="w-120 h-84" // Adjust size as needed
              autoPlay 
              muted 
              loop 
              playsInline
            >
            <source src="/tech.mp4" type="video/mp4" />
            Your browser does not support the video tag.
            </video>
          </div>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-3" style={{ fontSize: "18px" }}>
              I'm currently a <strong>sophomore</strong> at UC Davis studying <strong>Computer Science</strong>. I love building <strong>software</strong> that helps out the community or improves the way people work.
              I aim to become a software engineer and am interested in exploring full-stack development and product development while enjoying some coffee. 

            </p>

            <p className="text-lg text-gray-700 dark:text-gray-300" style={{ fontSize: "18px" }}>
              Outside of coding, I enjoy playing badminton, going on rollercoasters, and making coffee for my friends.
            </p>
        </div>
      </section>

      {/* skills */}
      <section id="skills" className= "px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="mb-6 text-center text-4xl font-bold text-gray-700 dark:text-gray-300">
            My skills
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 px-15">
            {Object.entries(skills).map(([category, skillList]) => (
              <div key={category} className="space-y-2">
                <h3 className="font-bold text-gray-800 text-center" style={{ fontSize: "20px" }}>{category}</h3>
                <div className="m-auto flex w-5/6 flex-wrap gap-2 justify-center md:w-4/5">
                  {skillList.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex cursor-default select-none items-center gap-2 rounded-md bg-gray-200 px-3 py-2 text-sm text-gray-600 transition hover:bg-gray-300 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700"
                    >
                      <span>{skill.icon}</span>
                      {skill.name}
                    </div>
                  ))}
                </div>
              </div>
            ))}
            </div>
        </div>
      </section>

      {/* projects */}
      <section id="projects" className= "px-6 py-20">
        <div>
          <h2 className="mb-6 text-center text-4xl font-bold text-gray-700 dark:text-gray-300">
            What I've built
          </h2>

            <div className="bg-gray-100 hover:bg-gray-200 transition-colors duration-300 rounded-md p-8 md:p-12 px-15 w-[50%] mx-auto">
              <div className="grid grid-cols lg-grid-cols-2 gap-8 items-center">
              {/*this is for the text*/}
                  <div className="space-y-6">
                    <h3 className="text-2xl md:text-2xl font-semibold text-gray-800">Simplify</h3>

                    <p className="text-gray-700 text-lg leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat.
                  </p>

                  <div className="flex flex-wrap gap-3">
                    <div className="px-4 py-2 bg-black text-white rounded-full text-sm font-semilight">HTML</div>
                    <div className="px-4 py-2 bg-black text-white rounded-full text-sm font-semilight">CSS</div>
                    <div className="px-4 py-2 bg-black text-white rounded-full text-sm font-semilight">JavaScript</div>
                  </div>
                  </div>
                
              </div>
            </div>
        </div>
      </section>

      {/* contact */}
      <section id="contact" className= "px-6 py-20">
        <div>
          <h2 className="mb-3 text-center text-4xl font-bold text-gray-700 dark:text-gray-300">
            Contact me
          </h2>


          <p className="text-center pb-8">
            Please contact me directly at {" "} <a href="mailto:hmanjunath@ucdavis.edu" className="text-black underline">hmanjunath@ucdavis.edu</a>{" "} 
            or through this form.
          </p>

          <form className="space-y-6">
            <div>
              <input
                type="email"
                placeholder="Your email"
                required
                className="w-[600px] mx-auto block px-4 py-4 bg-white/80 backdrop-blur-sm border border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-700 focus:border-transparent"
              />
            </div>

            <div>
              <textarea
                placeholder="Your message"
                rows={6}
                required
                className="w-[600px] mx-auto block px-4 py-4 bg-white/80 backdrop-blur-sm border border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-700 focus:border-transparent"
              ></textarea>
            </div>

            <button
              type="submit"
              className="group bg-gray-800 hover:bg-gray-900 text-white px-8 py-3 rounded-full font-medium transition-all duration-200 hover:scale-110 flex items-center gap-2 mx-auto"
            >
              Submit
              <svg
                className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                />
              </svg>
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
