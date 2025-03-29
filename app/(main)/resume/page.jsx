import { getResume } from '@/actions/resume'
import React from 'react'
import ResumeBuilder from './_component/resume-builder'


const Resumepage = async() => {
    const resume = await getResume()
    
  return (
    <div className='container mx-auto py-6'>
     <ResumeBuilder initialContent={resume?.content} />
    </div>
  )
}

export default Resumepage
