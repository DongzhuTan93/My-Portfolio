import { useState } from 'react'
import { FiSearch } from 'react-icons/fi'
import ProjectSingle from './ProjectSingle'
import { projectsData } from '../../data/projectsData'
import ProjectsFilter from './ProjectsFilter'

/**
 *
 */
function ProjectsGrid () {
  const [searchProject, setSearchProject] = useState()
  const [selectProject, setSelectProject] = useState()



  const selectProjectsByCategory = projectsData.filter((item) => {
    const category =
			item.category.charAt(0).toUpperCase() + item.category.slice(1)
    return category.includes(selectProject)
  })

  return (
	<section className="py-5 sm:py-10 mt-5 sm:mt-10">
			<div className="text-center">
				<h1 className="font-general-medium text-4xl sm:text-5xl mb-1">
					Mina Projekt
				</h1>
				<p className="font-general-light text-lg sm:text-xl mt-4 mb-8">
					Välj din favoritkategori och upptäck mer!
				</p>
			</div>

			<div className="mt-10 sm:mt-16">
				<div
					className="
                        flex
                        justify-between
                        border-b border-primary-light
                        pb-3
                        gap-20
                        px-4 sm:px-6
                    "
				>
					<ProjectsFilter setSelectProject={setSelectProject} />
				</div>
			</div>

			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 mb-6 gap-10 px-4 sm:px-6">
				{selectProject
				  ? selectProjectsByCategory.map((project, index) => {
				    return <ProjectSingle key={index} {...project} />
					  })
				  : projectsData.map((project, index) => (
							<ProjectSingle key={index} {...project} />
					  ))}
			</div>
		</section>
  )
}

export default ProjectsGrid
