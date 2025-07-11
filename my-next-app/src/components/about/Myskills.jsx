function MySkills() {
	const skills = [
	  "JavaScript", "TypeScript", "Java", "React.js",
	  "Express.js", "Node.js", "MongoDB", "Next.js",
	  "Figma", "IMovie", "Tailwind CSS", 
	  "Dart", "Flutter", "Python", 
	];
  
	return (
	  <div className="mt-10 sm:mt-20 bg-slate-50">
		<div className="font-general-medium container bg-slate-50 mx-auto py-20">
		  <h2 className="text-2xl sm:text-3xl font-bold mb-10 text-center">Mina färdigheter</h2>
		  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 px-4">
			{skills.map((skill, index) => (
			  <div
				key={index}
				className="bg-white rounded-md text-center"
				style={{
				  height: '90px',
				  display: 'flex',
				  alignItems: 'center',
				  justifyContent: 'center',
				  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.08)'
				}}
			  >
				<span className="text-sm sm:text-base text-gray-900">{skill}</span>
			  </div>
			))}
		  </div>
		</div>
	  </div>
	)
  }
  
  export default MySkills