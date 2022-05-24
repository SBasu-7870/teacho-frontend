import React from 'react'

export default function Message({message,own}) {

    return (
        !own?
        <div class="messages text-sm text-gray-700 grid grid-flow-row gap-2">
            <div class="flex items-center group">
                <p class="px-6 py-3 rounded-t-full  rounded-r-full bg-gray-800 max-w-xs lg:max-w-md text-gray-200">{message}</p>
            </div>
        </div>:
        <div class="flex flex-row justify-end">
        <div class="messages text-sm text-white grid grid-flow-row gap-2">
            <div class="flex  items-center flex-row-reverse group">
                <p class="px-6 py-3 break-words rounded-t-full rounded-l-full bg-blue-700 max-w-xs lg:max-w-md">{message}</p>
            </div>
        </div>
     </div>

    )
}
