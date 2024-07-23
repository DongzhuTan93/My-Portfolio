import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const imageStyle = { maxWidth: '100%', height: 'auto' }


const ProjectSingle = (props) => {
  return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, delay: 1 }}
			transition={{
			  ease: 'easeInOut',
			  duration: 0.7,
			  delay: 0.15,
			}}
		>
			<Link
				href="/projects/[id]"
				as={'/projects/' + props.id}
				aria-label="Single Project"
				passHref
			>
				<div className="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light h-full">
					<div className='h-96 object-cover'>
						<Image
							src={props.img}
							className="rounded-t-xl border-none w-full display: block object-fit: contain h-full object-cover"
							alt="Single Project"	
							width={320}
							height={320}
						/>
					</div>
					<div className="text-center px-4 py-6 bg-white">
						<p className="font-general-medium text-xl md:text-2xl text-ternary-dark mb-2">
							{props.title}
						</p>
						<span className="text-lg text-ternary-dark ">
							{props.category}
						</span>
					</div>
				</div>
			</Link>
		</motion.div>
  )
}

export default ProjectSingle
