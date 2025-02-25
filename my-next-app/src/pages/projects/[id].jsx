import Image from 'next/image'
import { FiClock, FiTag, FiArrowLeft } from 'react-icons/fi'
import PagesMetaHead from '../../components/PagesMetaHead'
import { projectsData } from '../../data/projectsData'
import Link from 'next/link'



function ProjectSingle (props) {
  return (
		<div className="container mx-auto px-4 sm:px-0">
			<PagesMetaHead title={props.project.title} />

			{/* Header */}
			<div className="text-center sm:text-left">
				<p className="font-general-medium text-3xl sm:text-4xl font-bold text-primary-dark mt-14 sm:mt-20 mb-7 text-orange-600">
					{props.project.ProjectHeader.title}
				</p>
				<div className="flex justify-center sm:justify-start gap-4">
					<div className="flex items-center">
						<FiClock className="text-xl text-ternary-dark" />
						<span className="font-general-regular ml-2 leading-none text-primary-dark">
							{props.project.ProjectHeader.publishDate}
						</span>
					</div>
					<div className="flex items-center">
						<FiTag className="w-4 h-4 text-ternary-dark" />
						<span className="font-general-regular ml-2 leading-none text-primary-dark">
							{props.project.ProjectHeader.tags}
						</span>
					</div>
				</div>
			</div>

			{/* Gallery */}
			<div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-10 mt-12">
				{props.project.ProjectImages.map((project) => {
				  return (
						<div className="mb-10 sm:mb-0" key={project.id}>
							<Image
								src={project.img}
								className="rounded-xl shadow-lg sm:shadow-none w-full display: block object-fit: contain h-full object-cover"
								alt={project.title}
								key={project.id}
								width={600}
								height={600}
							/>
						</div>
				  )
				})}
			</div>

			{/* Info */}
			<div className="block sm:flex gap-0 sm:gap-10 mt-14">
				<div className="w-full sm:w-1/3 text-left px-4 sm:px-0">
					{/* Single project client details */}
					<div className="mb-7">
						<p className="font-general-regular text-2xl font-semibold text-secondary-dark mb-2">
							{props.project.ProjectInfo.ClientHeading}
						</p>
						<ul className="leading-loose">
							{props.project.ProjectInfo.CompanyInfo.map(
								(info) => {
								if (info.isLink) {
									return (
										<li
											className="font-general-regular text-ternary-dark"
											key={info.id}
										>
											<span className="font-general-regular leading-none text-primary-dark">{info.title}: </span>
											<a
												href={info.details}
												className={
													info.title === 'Klicka här för att komma till hemsidan' ||
													info.title === 'Phone'
														? 'hover:underline hover:text-indigo-500 text-orange-600 font-semibold text-lg cursor-pointer duration-300'
														: ''
												}
												aria-label="Project Website and Phone"
											>
												{info.details}
											</a>
										</li>
									)
								} else {
									return (
										<li
											className="font-general-regular text-ternary-dark"
											key={info.id}
										>
											<span className="font-general-regular leading-none text-primary-dark">{info.title}</span>
											{info.details}
										</li>
									)
								}
								}
							)}
						</ul>
					</div>

					{/* Single project objectives */}
					<div className="mb-7">
						<p className="font-general-regular text-2xl font-semibold text-ternary-dark mb-8">
							{props.project.ProjectInfo.ObjectivesHeading}
						</p>
						<p className="font-general-regular text-lg leading-normal text-primary-dark mb-8">
							{props.project.ProjectInfo.ObjectivesDetails}
						</p>
					</div>

					{/* Single project technologies */}
					<div className="mb-7">
						<p className="font-general-regular text-2xl font-semibold text-secondary-dark mb-2">
							{props.project.ProjectInfo.Technologies[0].title}
						</p>
						<div className="flex flex-wrap gap-2">
							{props.project.ProjectInfo.Technologies[0].techs.map((skill, index) => (
								<div
									key={index}
									className="font-general-regular text-primary-dark"
								>
									{skill}{index !== props.project.ProjectInfo.Technologies[0].techs.length - 1 && ", "}
								</div>
							))}
						</div>
					</div>

					{/* Single project social sharing */}
					<div>
						<p className="font-general-regular text-lg font-semibold text-ternary-dark mb-2">
							{props.project.ProjectInfo.SocialSharingHeading}
						</p>
					</div>
				</div>

				{/*  Single project right section details */}
				<div className="w-full sm:w-2/3 text-left mt-10 sm:mt-0 px-4 sm:px-0">
					<div className="mb-7">
						<p className="font-general-regular text-2xl font-semibold text-ternary-dark mb-8">
							{props.project.ProjectInfo.ProjectDetailsHeading}
						</p>
						{props.project.ProjectInfo.ProjectDetails.map((details) => (
							<p 
								key={details.id} 
								className="font-general-regular text-base leading-normal text-primary-dark mb-8 whitespace-pre-wrap"
							>
								{details.details}
							</p>
						))}
					</div>
				</div>
			</div>

			{/* Add this at the end of your content, after all project details */}
			<div className="flex justify-center mt-10 mb-8 px-4">
				<Link 
					href="/projects"
					className="flex items-center justify-center gap-2 bg-indigo-500 hover:bg-indigo-600 text-white py-3 px-6 rounded-lg shadow-lg transition duration-300"
				>
					<FiArrowLeft size={24} />
					<span className="text-lg">Tillbaka till projekt</span>
				</Link>
			</div>
		</div>
  )
}


export async function getServerSideProps ({ query }) {
  const { id } = query
  return {
    props: {
      project: projectsData.filter(
        (project) => project.id === parseInt(id)
      )[0]
    }
  }
}

export default ProjectSingle
