import { motion } from 'framer-motion'
import MySkills from '../components/about/Myskills'
import AboutMeBio from '../components/about/AboutMeBio'
import PagesMetaHead from '../components/PagesMetaHead'


function about () {
  return (
		<div>
			<PagesMetaHead title="Om mig" />

			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1, delay: 1 }}
				exit={{ opacity: 0 }}
				className="container mx-auto"
			>
				<AboutMeBio />
			</motion.div>

			{/** Counter without paddings */}
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1, delay: 1 }}
				exit={{ opacity: 0 }}
			>
				<MySkills  />
			</motion.div>
		</div>
  )
}

export default about
