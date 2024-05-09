import { motion } from 'framer-motion'
import { FiX } from 'react-icons/fi'


const selectOptions = [
  'Web Application',
  'Mobile Application',
  'UI/UX Design',
]


function HireMeModal () {
   
  const onSubmit = async (e) => {
    e.preventDefault()  // Prevent default form submission behavior.
  

    try {
        
      const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value
    }

    const response = await fetch('/api', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })



    if (response.ok) {
        console.log("Request sent successfully!")

      // onClose() // Optionally close the modal on success.
     } else {
        console.error("Can not sent response")
     }

    } catch(error) {
        console.error('Error:', error)
    }

  
  }

  return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="font-general-medium fixed inset-0 z-30 transition-all duration-500"
        >
            <div className="bg-filter bg-black bg-opacity-50 fixed inset-0 w-full h-full z-20"></div>
            <main className="flex flex-col items-center justify-center h-full w-full">
                <div className="modal-wrapper flex items-center z-30">
                    <div className="modal max-w-md mx-5 xl:max-w-xl lg:max-w-xl md:max-w-xl bg-gray-50 shadow-lg flex-row rounded-lg relative">
                        <div className="modal-header flex justify-between p-5 border-b border-gray-300">
                            <h5 className="text-gray-900 text-xl">
                                What project are you looking for?
                            </h5>
                            <button
                                onSubmit={onSubmit}
                                className="text-gray-900 px-4"
                            >
                                <FiX className="text-3xl" />
                            </button>
                        </div>
                        <div className="modal-body p-5 w-full h-full bg-white">
                            <form
                                onSubmit={onSubmit}
                                className="max-w-xl m-4 text-left"
                            >
                                <input
                                    className="w-full px-5 py-2 border border-gray-300 rounded-md text-md bg-white text-gray-900"
                                    id="name"
                                    name="name"
                                    type="text"
                                    required
                                    placeholder="Name"
                                    aria-label="Name"
                                />
                                <input
                                    className="w-full px-5 py-2 mt-6 border border-gray-300 rounded-md text-md bg-white text-gray-900"
                                    id="email"
                                    name="email"
                                    type="text"
                                    required
                                    placeholder="Email"
                                    aria-label="Email"
                                />
                                <select
                                    className="w-full px-5 py-2 mt-6 border border-gray-300 rounded-md text-md bg-white text-gray-900"
                                    id="subject"
                                    name="subject"
                                    required
                                    aria-label="Project Category"
                                >
                                    {selectOptions.map((option) => (
                                        <option key={option}>{option}</option>
                                    ))}
                                </select>
                                <textarea
                                    className="w-full px-5 py-2 mt-6 border border-gray-300 rounded-md text-md bg-white text-gray-900"
                                    id="message"
                                    name="message"
                                    cols="30"
                                    rows="6"
                                    placeholder="Project description"
                                    aria-label="Details"
                                ></textarea>
                                <button
                                     
                                    className="mt-6 bg-indigo-500 hover:bg-indigo-600 text-white rounded-md px-4 py-2 duration-500"
                                    type="submit"
                                >
                                    Send Request
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
        </motion.div>
  )
}

export default HireMeModal
