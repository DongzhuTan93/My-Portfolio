import { useState } from 'react'

const selectOptions = [
  'Webbapplikation',
  'Webbsida'
]

function ProjectsFilter({ setSelectProject }) {
  const [selectValue, setSelectValue] = useState('')

  return (
    <div className="relative inline-block w-48">
      <select
        onChange={(e) => {
          setSelectProject(e.target.value)
          setSelectValue(e.target.value)
        }}
        className="appearance-none w-full bg-white border border-gray-100 px-4 py-2 pr-8 rounded-lg 
        text-gray-700 font-general-light text-lg focus:outline-none focus:border-indigo-500 
        cursor-pointer shadow-sm hover:border-gray-200 transition-colors"
        value={selectValue}
      >
        <option value="" className="py-2">Alla projekt</option>
        {selectOptions.map((option) => (
          <option key={option} value={option} className="py-2">
            {option}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
        </svg>
      </div>
    </div>
  )
}

export default ProjectsFilter

// React strictly enforces HTML standards where each <option> in a <select> must have a value that is a string or number.
