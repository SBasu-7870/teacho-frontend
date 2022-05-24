import { useEffect,useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser } from "@fortawesome/free-solid-svg-icons"
import React from 'react'
import Service from "../../services/HttpService";

export const Conversation = (props) => {
    const services = new Service();
    const [user,setUser]=useState(null);

    useEffect(() => {
        const friendId =props.conversation.members.find((m)=>m!==props.currentUser.id)
         services
          .get('api/find/'+friendId)
          .then(res => 
           {
            setUser(res)  
           })
         .catch(err =>console.log(err))} 
      , [props.conversation,props.currentUser]);

  return (
    <div class="contacts p-2 flex-1 overflow-y-scroll">
                    <div class="flex justify-between items-center p-3 hover:bg-gray-800 rounded-lg relative">
                        <div class="w-16 h-16 relative flex flex-shrink-0">
                            {
                            user?.profilePhoto?
                            <img class="shadow-md rounded-full w-full h-full object-cover"
                                 src={user?.profilePhoto}
                                 alt=""
                            />
                            : 
                            <div>
                            <FontAwesomeIcon icon={faUser} />
                            </div>}
                        </div>
                        <div class="flex-auto min-w-0 ml-4 mr-6 hidden md:block group-hover:block">
                            <p>{user?.firstName+' '+user?.lastName}</p>
                            <div class="flex items-center text-sm text-gray-600">
                                <div class="min-w-0">
                                    <p class="truncate">{props.lastmsg}</p>
                                </div>
                                <p class="ml-2 whitespace-no-wrap">{props.time}</p>
                            </div>
                        </div>
                    </div>     
                </div>
  )
}
