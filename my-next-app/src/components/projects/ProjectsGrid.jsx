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
	<section className="py-5 sm:py-10 mt-5 sm:mt-10 mb-10 px-5 sm:px-10 bg-zinc-100">
			<div className="text-center px-4 sm:px-6">
				<p className="font-general-medium text-4xl sm:text-4xl mr-10 text-ternary-dark font-bold">
					Mina Projekt
				</p>
			</div>

			<div className="mt-4 sm:mt-8 px-4 sm:px-6">
				<h3 className="font-general-regular text-center text-secondary-dark text-xl sm:text-xl mb-3">
					Välj din favoritkategori och upptäck mer!
				</h3>
				<div
					className="
                        flex
                        justify-between
                        border-b border-primary-light
                        pb-3
                        gap-3
                        "
				>
					<div className="flex justify-between gap-2">
				
					</div>
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
