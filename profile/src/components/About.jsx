import React from 'react'
import aboutImg from '../assets/pic.jpg'

const About = () => {
  return (
    <div className='text-white max-w-[1200px] mx-auto my-12' id="about">
      
        <div className='md:grid md:grid-cols-2 sm:py-16'>

         <div className='mt-4 md:mt-0 text-left flex'>
            <div className='my-auto mx-6'>
                <h2 className='text-4xl font-bold mb-4 primary-color'>About Me</h2>
                <p className='text-base lg:text-lg'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora nobis hic, culpa ab repellendus explicabo deserunt dolor aut sint laudantium cum facere eaque voluptatum vel iste rem officia quia obcaecati! Tempora dignissimos delectus harum laudantium, sapiente autem. Dicta totam, quisquam doloremque dignissimos odit odio tempore fugiat numquam veritatis voluptates. Tempora soluta cupiditate porro quos incidunt voluptatibus rerum vitae tempore quaerat.
                </p>
            </div>
         </div>

            <img className='mx-auto rounded-3xl py-8 md:py-0' src= {aboutImg} width={300} height={300}/>

        </div>

    </div>
  )
}

export default About
