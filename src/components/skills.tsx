import React from 'react'

const Skills = () => {
  return (
    <>
    <div id='skills' className='container pt 32'>
        <div className='grid md:grid-cols-2 gap-20 items-center'>
            <div>
                <h1 className='text-4xl md:text-5xl flex justify-center items-center'>My Skills</h1>
                <h2 className='text-4xl md:text-5xl'>Technologies I work with</h2>
                <p className='text-500 pt-2'>
                I am Sobia Fatima, a front-end developer passionate about creating seamless, responsive, and engaging user experiences. My skill set spans a range of web technologies and tools, with a focus on building efficient, scalable, and visually appealing applications.
                </p>
            </div>
            <div>
                <div className='grid grid-cols-3 text-gray text-3xl sm:text-4xl'>
                    <div className='space-y-2'>
                        <h2>Typescript</h2>
                        <h2>React</h2>
                        <h2>Nextjs</h2>
                    </div>
                    <div className='space-y-2'>
                        <h2>Tailwind</h2>
                        <h2>CSS</h2>
                        <h2>Nodejs</h2>
                    </div>
                    <div className='space-y-2'>
                        <h2>Html</h2>
                        <h2>Javascript</h2>
                        <h2>Git</h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Skills