import { useState } from 'react'

const selectOptions = [
  'Webbapplikation',
  'Webbsida'
]


function ProjectsFilter ({ setSelectProject }) {
  const [selectValue, setSelectValue] = useState('')

  return (
		<select
			onChange={(e) => {
			  setSelectProject(e.target.value)
			  setSelectValue(e.target.value)
			}}
			className="font-general-regular text-secondary-dark text-xl sm:text-xl px-4 py-2 border-1 border-gray-200 rounded-lg"
			value={selectValue}
		>
			<option value="" className="font-general-regular text-center text-secondary-dark text-xl sm:text-xl mb-3">
        Alla projekt
			</option> 

			{selectOptions.map((option) => (
				<option value={option} className="font-general-regular text-center text-secondary-dark text-xl sm:text-xl mb-3" key={option}>
					{option}
				</option>
			))}
		</select>
  )
}

export default ProjectsFilter

// React strictly enforces HTML standards where each <option> in a <select> must have a value that is a string or number.
