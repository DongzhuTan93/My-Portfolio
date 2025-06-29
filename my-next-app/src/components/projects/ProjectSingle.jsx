import { motion } from 'framer-motion'
import Image from 'next/image'

const ProjectSingle = (props) => {
  // Get first 3 technologies to display (to keep the card clean)
  const displayTechs = props.ProjectInfo?.Technologies?.[0]?.techs?.slice(0, 3)?.join(', ') || ''
  
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
			<a
				href={props.url}
				aria-label="Visit Project Website"
				target="_blank"
				rel="noopener noreferrer"
			>
				<div style={{ 
					height: '385px',
					background: 'white',
					borderRadius: '8px',
					overflow: 'hidden',
					boxShadow: '0 8px 12px rgba(0, 0, 0, 0.1)',
					display: 'flex',
					flexDirection: 'column'
				}}>
					<div style={{ height: '320px', position: 'relative' }}>
						<Image
							src={props.img}
							alt={props.title}
							fill
							sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
							style={{ objectFit: 'cover' }}
						/>
					</div>
					<div style={{ 
						padding: '1.5rem',
						textAlign: 'center',
						background: 'white'
					}}>
						<h3 className="font-general-medium text-2xl text-ternary-dark">{props.title}</h3>
						<p className="text-gray-500 text-sm mt-1">{props.category}</p>
						<p className="text-indigo-500 text-sm mt-2 italic font-medium">{displayTechs}</p>
					</div>
				</div>
			</a>
		</motion.div>
  )
}

export default ProjectSingle
