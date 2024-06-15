"use client"
import ConversationSidebar from '@/components/ConversationSidebar';
import SettingsSidebar from '@/components/SettingsSidebar';
import { usePathname } from 'next/navigation';
import React from 'react'

const SubLayout = ({children}:{children:React.ReactNode}) => {
  const pathName = usePathname();
  return (
    <div className='flex h-screen'>
    <aside className='w-80 flex flex-col'>
    <h4 className="text-lg border py-4 px-7">
      { 
      pathName.includes('/dashboard/conversation') ? 'Conversations' : 
      pathName === '/dashboard/settings' ? 'Settings' : 'Chat App'
      }
    </h4>
      {pathName.includes('/dashboard/conversation') && <ConversationSidebar/>}
      {pathName === '/dashboard/settings' && <SettingsSidebar/>}
    </aside>
    <section className='flex-1'>
        {children}
    </section>
    </div>
  )
}

export default SubLayout