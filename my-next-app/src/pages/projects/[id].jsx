import Image from 'next/image'
import { FiClock, FiTag } from 'react-icons/fi'
import PagesMetaHead from '../../components/PagesMetaHead'
import { projectsData } from '../../data/projectsData'



function ProjectSingle (props) {
  return (
		<div className="container mx-auto">
			<PagesMetaHead title={props.project.title} />

			{/* Header */}
			<div>
				<p className="font-general-medium text-left text-3xl sm:text-4xl font-bold text-primary-dark mt-14 sm:mt-20 mb-7 text-orange-600">
					{props.project.ProjectHeader.title}
				</p>
				<div className="flex">
					<div className="flex items-center mr-10">
						<FiClock className="text-xl text-ternary-dark " />
						<span className="font-general-regular ml-2 leading-none text-primary-dark ">
							{props.project.ProjectHeader.publishDate}
						</span>
					</div>
					<div className="flex items-center">
						<FiTag className="w-4 h-4 text-ternary-dark " />
						<span className="font-general-regular ml-2 leading-none text-primary-dark ">
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
				<div className="w-full sm:w-1/3 text-left">
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
											<span className="font-general-regular ml-2 leading-none text-primary-dark">{info.title}: </span>
											<a
												href={info.details}
												className={
													info.title === 'Klicka här för att komma till hemsidan' ||
													info.title === 'Phone'
														? 'hover:underline hover:text-indigo-500 text-orange-600 font-semibold cursor-pointer duration-300'
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
											<span className="font-general-regular ml-2 leading-none text-primary-dark">{info.title}</span>
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
						<p className="font-general-regular text-lg ml-2 leading-normal text-primary-dark mb-8">
							{props.project.ProjectInfo.ObjectivesDetails}
						</p>
					</div>

					{/* Single project technologies */}
					<div className="mb-7">
						<p className="font-general-regular text-2xl font-semibold text-primary-dark mb-2">
							{props.project.ProjectInfo.Technologies[0].title}
						</p>
						<p className="font-general-regular ml-2 leading-none text-primary-dark">
							{props.project.ProjectInfo.Technologies[0].techs.join(
								', '
							)}
						</p>
					</div>

					{/* Single project social sharing */}
					<div>
						<p className="font-general-regular text-2xl font-semibold text-ternary-dark mb-2">
							{props.project.ProjectInfo.SocialSharingHeading}
						</p>
					</div>
				</div>

				{/*  Single project right section details */}
				<div className="w-full sm:w-2/3 text-left mt-10 sm:mt-0">
					<p className="font-general-regular text-2xl font-semibold text-secondary-dark mb-2">
						{props.project.ProjectInfo.ProjectDetailsHeading}
					</p>
					{props.project.ProjectInfo.ProjectDetails.map((details) => {
						return (
							<p
								key={details.id}
								className="font-general-regular ml-2 leading-none text-primary-dark mb-5"
							>
								{details.details}
							</p>
						)
					})}
				</div>
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
