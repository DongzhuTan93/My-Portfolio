import '../styles/globals.css'
import { AnimatePresence } from 'framer-motion'
import DefaultLayout from '../components/layout/DefaultLayout'
import UseScrollToTop from '../hooks/useScrollToTop'


function MyApp ({ Component, pageProps }) {
  return (
		<AnimatePresence>
			<div className=" bg-secondary-light transition duration-300">
				<DefaultLayout>
					<Component {...pageProps} /> 
				</DefaultLayout>
				<UseScrollToTop />
			</div>
		</AnimatePresence>
  )
}

export default MyApp
// https://nextjs.org/docs/pages/building-your-application/routing/custom-app
// https://www.npmjs.com/package/framer-motion
// https://www.framer.com/motion/animate-presence/
// https://www.youtube.com/watch?v=odOpmAHxW7E
