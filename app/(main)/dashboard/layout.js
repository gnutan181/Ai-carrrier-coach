import React, { Suspense } from 'react'
import {BarLoader} from "react-spinners"
const Layout = ({children}) => {
  return (
    <div className='px-5'>
      <div className='flex items-center justify-between mb-5'>
        <h1 className='text-6xl font-bold gradient-title'>Industry Insight</h1>
      </div>
      <Suspense fallback={<BarLoader className='mt-4' width='100%' color='gray'/>}>{children}</Suspense>
      {/* {children} */}
    </div>
  )
}

export default Layout
