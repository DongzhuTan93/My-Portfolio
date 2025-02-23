import Image from 'next/image'
import { useState } from 'react'
import { aboutMeData } from '../../data/aboutMeData'
import { motion } from 'framer-motion'
import backgroundImage from '../../../public/images/background.png'

function AboutMeBio () {
  const [aboutMe] = useState(aboutMeData)

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
      className="relative py-10 sm:py-20 mt-10"
      style={{
        backgroundImage: `url(${backgroundImage.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="bg-white bg-opacity-90 mx-auto max-w-6xl p-8 rounded-lg mb-20">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <motion.div 
            className="w-full lg:w-1/3 mb-7 lg:mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.4 }}
          >
            <Image
              src="/images/about-me.jpg"
              width={800}
              height={1000}
              className="rounded-lg w-full h-auto object-cover"
              alt="Profile Image"
            />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.6 }}
            className="w-full lg:w-2/3"
          >
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="font-general-regular text-2xl font-semibold text-secondary-dark mb-8"
            >
              Hej!
            </motion.h1>
           
            {aboutMe.map((bio) => (
              <p
                key={bio.id}
                className="font-general-regular ml-2 leading-normal text-primary-dark mb-8"
              >
                {bio.bio}
              </p>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export default AboutMeBio