import React from 'react'

const SettingsSidebar = () => {
  return (
    <div className="p-3 border border-r h-screen">

    <ul>
      <li className="p-3 flex items-center gap-x-2 hover:bg-gray-100 rounded-lg transition-all cursor-pointer">Settings 1</li>
      <li className="p-3 flex items-center gap-x-2 hover:bg-gray-100 rounded-lg transition-all cursor-pointer">Settings 2</li>
      <li className="p-3 flex items-center gap-x-2 hover:bg-gray-100 rounded-lg transition-all cursor-pointer">Settings 3</li>
    </ul>
    </div>
)
}

export default SettingsSidebar