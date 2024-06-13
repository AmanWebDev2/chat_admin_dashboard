import React from 'react'

const ConversationSidebar = () => {
  return (
    <div className="p-3 border border-r h-full">
    <ul>
    <li className="p-3 flex items-center gap-x-2 hover:bg-gray-100 rounded-lg transition-all cursor-pointer">Conversation 1</li>
    <li className="p-3 flex items-center gap-x-2 hover:bg-gray-100 rounded-lg transition-all cursor-pointer">Conversation 2</li>
    <li className="p-3 flex items-center gap-x-2 hover:bg-gray-100 rounded-lg transition-all cursor-pointer">Conversation 3</li>
  </ul>
    </div>
  )
}

export default ConversationSidebar