import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import HireMeModal from '../HireMeModal'
import logo from '../../../public/favicon.ico'


function AppHeader () {
  const [showMenu, setShowMenu] = useState(false)
  const [showModal, setShowModal] = useState(false)


function toggleMenu () {
    if (!showMenu) {
      setShowMenu(true)
    } else {
      setShowMenu(false)
    }
  }



function showHireMeModal () {
    if (!showModal) {
      document
        .getElementsByTagName('html')[0]
        .classList.add('overflow-y-hidden')
      setShowModal(true)
    } else {
      document
        .getElementsByTagName('html')[0]
        .classList.remove('overflow-y-hidden')
      setShowModal(false)
    }
  }

  /*const links = [
	{href: "/about", name: "About Me"},
	{href: "/contact", name: "Contact"}
  ]

  const MyLink = (href, label) => {
	return (
		<div className="block text-left text-2xl text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark">
		<Link href={href} aria-label={label}>
			{label}
		</Link>
	</div>
	)
  }*/

  return (
		<motion.nav
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			id="nav"
			className="sm:container sm:mx-auto"
		>
			{/* Header */}
			<div className="z-10 max-w-screen-lg xl:max-w-screen-xl block sm:flex sm:justify-between sm:items-center py-6">
				{/* Header menu links and small screen hamburger menu */}
				<div className="flex justify-between items-center px-5 sm:px-0">
					<div>
						<Link href="/">
								<Image
									src={ logo }
									alt="Logo"
									width={80}
									height={80}
								/>
						</Link>
					</div>
				</div>

				{/* Header links small screen */}
				<div
					className={
						showMenu
						  ? 'block m-0 sm:ml-4 sm:mt-3 md:flex px-5 py-3 sm:p-0 justify-between items-center shadow-lg sm:shadow-none'
						  : 'hidden'
					}
				>
					<div className="block text-left text-2xl text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2">
						<Link href="/projects" aria-label="Projects">
							Projects
						</Link>
					</div>

					{/* 
						{links.map((link) => {
							return <MyLink href={link.href} name={link.name} />
						})}
					*/}




					<div className="block text-left text-2xl text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark">
						<Link href="/about" aria-label="About Me">
							About Me
						</Link>
					</div>
					<div className="block text-left text-2xl text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark">
						<Link href="/contact" aria-label="Contact">
							Contact
						</Link>
					</div>


					<div className="border-t-2 pt-3 sm:pt-0 sm:border-t-0 border-primary-light dark:border-secondary-dark">
						<button
							onClick={showHireMeModal}
							className="font-general-medium sm:hidden block text-left text-2xl bg-indigo-500 hover:bg-indigo-600 text-white shadow-sm rounded-sm px-4 py-2 mt-2 duration-300 w-24"
							aria-label="Hire Me Button"
						>
							Hire Me
						</button>
					</div>
				</div>

				{/* Header links large screen */}
				<div className="font-general-medium hidden m-0 sm:ml-4 mt-5 sm:mt-3 sm:flex p-5 sm:p-0 justify-center items-center shadow-lg sm:shadow-none">
					<div
						className="block text-left text-2xl font-medium text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2"
						aria-label="Projects"
					>
						<Link href="/projects">Projects</Link>
					</div>
					<div
						className="block text-left text-2xl font-medium text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2"
						aria-label="About Me"
					>
						<Link href="/about">About Me</Link>
					</div>

					<div
						className="block text-left text-2xl font-medium text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2"
						aria-label="Contact"
					>
						<Link href="/contact">Contact</Link>
					</div>
				</div>

				{/* Header right section buttons */}
				<div className="hidden sm:flex justify-between items-center flex-col md:flex-row">
					<div className="hidden md:flex">
						<button
							onClick={showHireMeModal}
							className="text-md font-general-medium bg-indigo-500 hover:bg-indigo-600 text-white shadow-sm rounded-md px-5 py-2.5 duration-300"
							aria-label="Hire Me Button"
						>
							Hire Me
						</button>
					</div>
				</div>
			</div>
			<div>
				{showModal
				  ? (
					<HireMeModal
						onClose={showHireMeModal}
						onRequest={showHireMeModal}
					/>
				    )
				  : null}
				{showModal ? showHireMeModal : null}
			</div>
		</motion.nav>
  )
}

export default AppHeader
