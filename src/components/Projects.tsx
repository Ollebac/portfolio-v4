import { useState, FC } from 'react';
import '../scss/projects.scss';

type ProjectObject = {
  projectName: string;
  projectLang: Array<string>;
  projectDesc: string;
  projectGit: string;
  projectWeb: string;
};

const projectArray: Array<ProjectObject> = [
  {
    projectName: 'Portfolio v4',
    projectLang: ['React', 'TypeScript', 'SCSS', 'Figma'],
    projectDesc:
      'My third iteration of my personal website built with Next.js, Javascript, and CSS, hosted on Vercel. I personally designed and styled this site in Figma after researching UI design through articles, videos, and observation. I Project details in short description and such.',
    projectGit: 'https://github.com/Ollebac/portfolio-v4',
    projectWeb: 'https://ollebac.dev',
  },
  {
    projectName: 'Equestrian Webpage',
    projectLang: ['React', 'TypeScript', 'SCSS', 'Figma'],
    projectDesc:
      'Using a full page design from Dribbble, I implemented the design with fully functioning components including a contact form with scheduling and pricing.',
    projectGit: 'https://github.com/Ollebac/equestrian-landing-page',
    projectWeb: 'https://ollebac.dev/equestrian',
  },
  {
    projectName: 'Portfolio v3',
    projectLang: ['Next.js', 'Javascript', 'CSS', 'Figma'],
    projectDesc:
      'My third iteration of my personal website built with Next.js, Javascript, and CSS, hosted on Vercel. I personally designed and styled this site in Figma after researching UI design through articles, videos, and observation. I Project details in short description and such.',
    projectGit: 'https://github.com/Ollebac/portfolio-v4',
    projectWeb: 'https://ollebac.dev',
  },
  {
    projectName: 'Elder Drake',
    projectLang: ['TypeScript', 'Discord API', 'Express'],
    projectDesc:
      "Added functionality to an existing fan-made Discord bot for the game League of Legends. The added functionality allows a user to pass an in-game item as input to the bot. The bot will then parse responses from a complicated and poorly maintained API. A message then displays the item's info to the user.",
    projectGit: 'https://github.com/Ollebac/elder-drake/tree/new_item_feature',
    projectWeb: '',
  },
  {
    projectName: 'SuperBot',
    projectLang: ['TypeScript', 'Discord API'],
    projectDesc:
      'Collaborated with another developer to design and develop a custom Discord bot for a Twitch stream. We utilized agile methodology to get the bot up and running quickly while continously adding additional functionality, including a userbase, queue system, and Twitch integration. Note: Repo is set to private by owner.',
    projectGit: '',
    projectWeb: '',
  },
];

const Project: FC<{ project: ProjectObject; activeProject: number; index: number }> = ({
  project,
  activeProject,
  index,
}) => {
  return (
    <div className={` ${activeProject === index ? 'project_left_inner_container' : 'inactive'}`}>
      <h3 className='project_title'>{project.projectName}</h3>
      <div className='lang_container'>
        {project.projectLang.map((lang, index) => (
          <div className='lang_text_container'>
            <p>{lang}</p>
          </div>
        ))}
      </div>
      <p className='project_description'>{project.projectDesc}</p>
      <div className='project_links_container'>
        {project.projectGit && (
          <a href={project.projectGit}>
            <img src='images/github_logo.png' alt='Github Link' className='project_link' height={50} width={50} />
          </a>
        )}
        {project.projectWeb && (
          <a href={project.projectWeb}>
            <img src='images/web_logo.png' alt='Web Link' className='project_link' height={50} width={50} />
          </a>
        )}
      </div>
    </div>
  );
};

const Projects = () => {
  const [activeProject, setActiveProject] = useState(0);

  return (
    <div className='projects_section_container' id='projects'>
      <div className='project_left_outer_container'>
        {projectArray.map((project, index) => (
          <Project key={project.projectName} activeProject={activeProject} project={project} index={index} />
        ))}
        <div className='project_selector_container'>
          {projectArray.map((project, index) => (
            <div
              className={`${activeProject === index ? 'project_selector active_project_selector' : 'project_selector'}`}
              onClick={() => {
                setActiveProject(index);
              }}
            ></div>
          ))}
        </div>
      </div>
      <div className='project_right_container'>
        <h2 className='section_title'>PROJECTS</h2>
        <p className='project_section_overview'>
          This will be a paragraph or two about my time developing, what got me into code, and what I find fun. What I
          seek out in each project.
        </p>
      </div>
    </div>
  );
};

export default Projects;