import Link from 'next/link'
import PagesMetaHead from '../components/PagesMetaHead'
import ProjectsGrid from '../components/projects/ProjectsGrid'
import Button from '../components/reusable/Button'
import AppBanner from '../components/shared/AppBanner'
import { projectsData } from '../data/projectsData'


export default function Home () {
  const showMoreProjectsButton = projectsData.length > 6;
  
  return (
		<div className="container mx-auto px-4">
			<PagesMetaHead title="Home" />
			<AppBanner />
			<ProjectsGrid />
			{showMoreProjectsButton && (
				<div className="mt-10 sm:mt-15 flex justify-center">
					<div className="font-general-medium flex items-center px-6 py-3 rounded-lg shadow-lg hover:shadow-xl bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 text-white text-lg sm:text-xl duration-300">
						<Link href="/projects" aria-label="Fler Projekt" passHref>
							<Button title="Fler Projekt" />
						</Link>
					</div>
				</div>
			)}
		</div>
  )
}

// https://nextjs.org/docs/pages/building-your-application/routing/pages-and-layouts#index-routes
