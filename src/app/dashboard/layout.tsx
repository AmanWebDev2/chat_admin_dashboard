import Sidebar from '@/components/Sidebar'
import React from 'react'

const DashboardLayout = ({
    children
}:{
    children: React.ReactNode
}) => {
  return (
    <div className='flex h-screen'>
        {/* sidebar */}
        <Sidebar/>
        <main className='border flex-grow'>
        {/* main content */}
        {children}
        </main>
    </div>
  )
}

export default DashboardLayout