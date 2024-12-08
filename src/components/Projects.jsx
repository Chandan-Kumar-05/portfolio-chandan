
import React from "react";
import firewall from '../assets/firewall OpenGL.png'
import Forensic from '../assets/Forensic.png'
import Footer from './Footer'

const ProjectCard = ({ image, title, description, git, technologies }) => {
    return (
        <div className="max-w-sm sm:max-w-sm md:max-w-sm bg-gray-900 border border-neutral-100 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            {title=='Firewall' && <a href="#">
                <img className="w-full rounded-t-lg h-auto object-cover " src={firewall} alt="" />
            </a>}
            {title=='Forensic' && <a href="#">
                <img className="w-full rounded-t-lg h-auto object-cover " src={Forensic} alt="" />
            </a>}
            <div className="p-4 sm:p-6">
                <a href="#">
                    <h5 className="text-2xl sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-white bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-pink-500">{title}</h5>
                </a>
                <p className="font-normal text-sm sm:text-base md:text-lg text-gray-300 dark:text-gray-400">{description}</p>
            </div>
            <div className='m-2 sm:m-4 lg:m-6 flex justify-between'>
                <div className='flex flex-wrap gap-2 pl-2'>
                    {technologies.map((tag, index) => (
                        <p
                            key={`${index}-${tag}`}
                            className='text-[14px] text-blue-500'
                        >
                            #{tag}
                        </p>
                    ))}
                </div>
                <a href={git} className="text-red-300 border border-gray-200 rounded-lg shadow p-1 sm:p-2 lg:p-3 hover:text-green-500 duration-300">GitHub</a>
            </div>
        </div>
    );
};


  
const Projects = () => {
    return (
        <div className={"bg-black"}>
            <div className="flex flex-wrap gap-8 justify-center items-center m-12 p-20">
                {project.map((item, index) => (
                    <ProjectCard
                        key={index}
                        image={item.image}
                        title={item.title}
                        description={item.description}
                        links={item.links}
                        git={item.git}
                        technologies={item.technologies}
                    />
                ))}
            </div>
            <Footer/>
        </div>
    );
}


export const project = [
    {
        title:'Forensic',
        description:'Forensic Evidence Management is a Python-based system built with MySQL and Streamlit to efficiently manage forensic records. It provides a user-friendly interface for data visualization and ensures secure access through authentication and role-based controls.',
        image: {firewall},
        git:'https://github.com/Chandan-Kumar-05/Forensics-DBMS-project.git',
        technologies:['Python','MySQL','Streamlit']
    },
    {
        title:'Firewall',
        description:'Firewall Graphics is a C++ project using OpenGL to visualize network traffic and firewall operations. It features 3D rendering of network components and real-time packet filtering simulation for threat detection.',
        image: {Forensic},
        git:"https://github.com/Chandan-Kumar-05/Firewall-Computer-Graphics-Project.git",
        technologies:['C++','OpenGL','3D Rendering']
    }
]

export default Projects