const selectOptions = [
  'Web Application',
  'Mobile Application',
  'UI/UX Design',
  'Branding'
]


function ProjectsFilter ({ setSelectProject }) {
  return (
		<select
			onChange={(e) => {
			  setSelectProject(e.target.value)
			}}
			className="
                px-4
                sm:px-6
                py-2
                border
                dark:border-secondary-dark
                rounded-lg
                text-sm
                sm:text-xl
                dark:font-medium
                bg-secondary-light
                dark:bg-ternary-dark
                text-primary-dark
                dark:text-ternary-light
            "
		>
			<option value="" className="text-sm sm:text-xl">
				All Projects
			</option> 

			{selectOptions.map((option) => (
				<option value ={option} className="text-normal sm:text-xl" key={option}>
					{option}
				</option>
			))}
		</select>
  )
}

export default ProjectsFilter

// React strictly enforces HTML standards where each <option> in a <select> must have a value that is a string or number.
