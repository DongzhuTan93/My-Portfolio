import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { FiX, FiMenu } from 'react-icons/fi'
import HireMeModal from '../HireMeModal'
import logo from '../../../public/images/home-logo.jpg'

function AppHeader() {
  const [showMenu, setShowMenu] = useState(false)
  const [showModal, setShowModal] = useState(false)

  function toggleMenu() {
    setShowMenu(!showMenu)
  }

  function showHireMeModal() {
    setShowModal(!showModal)
  }

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      id="nav"
      className="sm:container sm:mx-auto"
    >
      <div className="z-10 max-w-screen-lg xl:max-w-screen-xl mx-auto">
        <div className="flex justify-between items-center px-4 sm:px-0 py-6">
          {/* Logo */}
          <div className="w-36">
            <Link href="/">
              <Image
                src={logo}
                alt="Logo"
                width={60}
                height={60}
              />
            </Link>
          </div>

          {/* Hamburger Menu */}
          <div className="sm:hidden">
            <button
              onClick={toggleMenu}
              className="focus:outline-none p-3"
              aria-label="Hamburger Menu"
            >
              {showMenu ? (
                <FiX className="text-4xl" />
              ) : (
                <FiMenu className="text-4xl" />
              )}
            </button>
          </div>

          {/* Header menu links and small screen hamburger menu */}
          <div
            className={
              showMenu
                ? 'block m-0 sm:ml-4 sm:mt-3 md:flex px-5 py-3 sm:p-0 justify-between items-center shadow-lg sm:shadow-none'
                : 'hidden'
            }
          >
            <div className="block text-left text-3xl block sm:mx-6 mb-2 sm:py-2">
              <Link href="/projects" aria-label="Projekt">
                Projekt
              </Link>
            </div>
            <div className="block text-left text-3xl sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0">
              <Link href="/about" aria-label="Om mig">
                Om mig
              </Link>
            </div>

            <div className="border-t-2 pt-3 sm:pt-0 sm:border-t-0">
              <button
                onClick={showHireMeModal}
                className="font-general-medium sm:hidden block text-2xl bg-indigo-500 hover:bg-indigo-600 text-white shadow-sm rounded-sm px-4 py-2 mt-2 duration-300 w-24"
                aria-label="Hire Me Button"
              >
                Kontakta mig
              </button>
            </div>
          </div>

          {/* Header links large screen */}
          <div className="font-general-medium hidden m-0 sm:ml-4 sm:mr-4 mr-4 mt-5 mb-5 sm:mt-5 sm:flex p-5 sm:p-0 justify-center items-center shadow-lg sm:shadow-none">
            <div
              className="block text-left text-2xl font-medium text-primary-dark  hover:text-secondary-dark mt-2 sm:mx-6 mb-2 sm:py-2"
              aria-label="Projekt"
            >
              <Link href="/projects">Projekt</Link>
            </div>
            <div
              className="block text-left text-2xl font-medium text-primary-dark hover:text-secondary-dark mt-2 sm:mx-6 mb-2 sm:py-2"
              aria-label="Om mig"
            >
              <Link href="/about">Om mig</Link>
            </div>
          </div>

          {/* Header right section buttons */}
          <div className="hidden sm:flex justify-between items-center flex-col md:flex-row">
            <div className="hidden md:flex">
              <button
                onClick={showHireMeModal}
                className="text-2xl font-general-medium bg-indigo-500 hover:bg-indigo-600 text-white shadow-sm rounded-md px-5 py-2.5 duration-300"
                aria-label="Hire Me Button"
              >
                Kontakta mig
              </button>
            </div>
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

      {/* Mobile menu overlay */}
      {showMenu && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-indigo-600 z-50"
        >
          <div className="flex justify-end p-4">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
              aria-label="Close Menu"
            >
              <FiX className="text-3xl" />
            </button>
          </div>
          
          <div className="flex flex-col items-start px-8 mt-16 space-y-6">
            <Link 
              href="/" 
              className="text-white text-xl font-light tracking-wider hover:text-gray-200"
              onClick={toggleMenu}
            >
              HEM
            </Link>
            <Link 
              href="/projects" 
              className="text-white text-xl font-light tracking-wider hover:text-gray-200"
              onClick={toggleMenu}
            >
              PROJEKT
            </Link>
            <Link 
              href="/about" 
              className="text-white text-xl font-light tracking-wider hover:text-gray-200"
              onClick={toggleMenu}
            >
              OM MIG
            </Link>
            <button
              onClick={() => {
                showHireMeModal();
                toggleMenu();
              }}
              className="text-white text-xl font-light tracking-wider hover:text-gray-200"
            >
              KONTAKTA MIG
            </button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  )
}

export default AppHeader
