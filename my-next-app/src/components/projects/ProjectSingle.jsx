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
				<div style={{ 
					height: '385px',
					background: 'white',
					borderRadius: '8px',
					overflow: 'hidden',
					boxShadow: '0 8px 12px rgba(0, 0, 0, 0.1)',
					display: 'flex',
					flexDirection: 'column'
				}}>
					<div style={{ height: '380px', position: 'relative' }}>
						<Image
							src={props.img}
							alt={props.title}
							layout="fill"
							objectFit="cover"
						/>
					</div>
					<div style={{ 
						padding: '2rem',
						textAlign: 'center',
						background: 'white'
					}}>
						<h3 className="font-general-medium text-2xl text-ternary-dark">{props.title}</h3>
						<p className="text-gray-500 text-sm mt-2">{props.category}</p>
					</div>
				</div>
			</Link>
		</motion.div>
  )
}

export default ProjectSingle
