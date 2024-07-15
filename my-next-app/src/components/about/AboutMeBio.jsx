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
      <div className="bg-white bg-opacity-90 mx-auto max-w-6xl p-8 rounded-lg mb-40">
        <div className="flex flex-col lg:flex-row items-start gap-10">
          <motion.div 
            className="w-full lg:w-2/4 mb-7 lg:mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.4 }}
          >
            <Image
              src="/images/developer.jpg"
              width={500}
              height={500}
              className="rounded-lg w-full h-auto object-cover"
              alt="Profile Image"
            />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.6 }}
            className="w-full lg:w-1/2"
          >
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="font-general-semibold text-2xl lg:text-3xl xl:text-4xl text-left ml-10 uppercase mb-4 ml-10"
            >
              Hi! My name is Dong,
            </motion.h1>
           
            {aboutMe.map((bio) => (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
                className="font-general-regular text-justify text-3xl sm:text-xl mb-3 ml-10"
                key={bio.id}
              >
                {bio.bio}
              </motion.p>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export default AboutMeBio