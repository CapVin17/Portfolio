import React from 'react'
import ProjectCard from '../sub/ProjectCard'

const Projects = () => {
  return (
    <div
      id="projects"
      className="flex flex-col items-center justify-center py-3"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <a href="https://github.com/CapVin17/Scribble-Space-Project">
          <ProjectCard
            src="/medium.png"
            title="Scribble Space"
            description="A platform where you can share your descriptive blogs whatever knowledge you possess just jot it down and help others as well as you can see what others have been posting for a while and interact with them."
          />
        </a>
        <a href="https://ast-rule-engine-blush.vercel.app/">
          <ProjectCard
            src="/astruleengine.png"
            title="AST Rule Engine"
            description="AST Rule Engine is an implementation of Tree DS wherein users rules are converted into a tree and a user can either provide a single or multiple rules. Based upon the that, tree will evaluate the data correspondingly, respond with either true or false in JSON format"
          />
        </a>
        <a href="https://exchange.www-vineetsinghvs.workers.dev/ui">
          <ProjectCard
            src="/exchange.png"
            title="Exchange"
            description="Inspired from the idea of smartapi which many modern day trading platforms use I developed an orderbook consisting of a single API which users can hit to place their orders and get the most optimal trade back in favour."
          />
        </a>
        {/* <a href="https://github.com/CapVin17/PayzApp">
          <ProjectCard
            src="/payzapp.png"
            title="PayzApp"
            description="Created a virtual wallet kind of platform where people can transfer virtual money to each other and perform transactions used CloudFlare for protection against DDos and made the site more protected."
          />
        </a> */}
      </div>
    </div>
  );
}

export default Projects