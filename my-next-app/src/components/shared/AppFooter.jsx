import { FiGithub, FiLinkedin } from 'react-icons/fi'

const socialLinks = [
  {
    id: 2,
    icon: <FiGithub />,
    url: 'https://github.com/DongzhuTan93'
  },
  {
    id: 4,
    icon: <FiLinkedin />,
    url: 'https://www.linkedin.com/in/dong-tan-891b13241/'
  }
] // I got inspiration here: https://react-icons.github.io/react-icons/search/#q=faceBook


function AppFooter () {
  return (
		<footer className="w-full bg-secondary-light">
			<div className="container mx-auto px-4 sm:px-6">
				<div className="pt-10 sm:pt-20 pb-8 border-t-2 border-primary-light">
					{/* Footer social links */}
					<div className="font-general-regular flex flex-col justify-center items-center mb-8 sm:mb-12">
						<p className="text-xl sm:text-2xl mb-4 sm:mb-6">
							Följ mig
						</p>
						<ul className="flex gap-4 sm:gap-8">
							{socialLinks.map((link) => (
								<a
									href={link.url}
									target="__blank"
									key={link.id}
									className="text-gray-400 hover:text-indigo-500 cursor-pointer rounded-lg bg-gray-50 hover:bg-gray-100 shadow-sm p-3 sm:p-4 duration-300"
								>
									<i className="text-lg sm:text-xl md:text-2xl">
										{link.icon}
									</i>
								</a>
							))}
						</ul>
					</div>
				</div>
			</div>
		</footer>
  )
}

export default AppFooter
