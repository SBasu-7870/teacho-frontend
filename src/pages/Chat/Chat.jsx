import React, { useState, useEffect, useRef } from 'react'
import Avatar from '../Web App/components/Avatar'
import './chat.css'
import jwt from 'jwt-decode'
import Service from '../../services/HttpService'
import { Conversation } from './Conversation'
import Message from './Message'
import {io} from 'socket.io-client'


export const Chat = (props) => {
    const user = props.user ? jwt(props.user) : null;
    const services = new Service();
    const [coversations, setConversations] = useState([])
    const [messages, setMessages] = useState([])
    const [newmessage, setNewMessage] = useState([])
    const [arrivalmessage, setArrivalMessage] = useState([])
    const socket= useRef(io("ws://localhost:8900"))
    const [currentChat, setcurrentChat] = useState(null)
    const scrollRef =useRef();

    useEffect(()=>{
        socket.current.emit("addUser",user.id)
        socket.current.on("getUsers",(users)=>{
            console.log(users)
        })
        socket.current.emit("getMessage",data=>
        setArrivalMessage({
            senderId:data.senderId,
            text:data.text,
            ceatedAt:Date.now()
        }))
    })    

    useEffect(()=> {
        arrivalmessage&& currentChat?.members.includes(arrivalmessage.sender) &&
        setMessages((prev)=>[...prev],arrivalmessage )
    },[arrivalmessage,currentChat])

    useEffect(() => {
        const getConversation = async () => {
            await services
                .get('api/conversations/' + user.id)
                .then(res => {

                    setConversations(res)
                })
                .catch(err => console.log(err))
        }
        getConversation();
    }, [user.id]);

    useEffect(() => {
        const getMessages = async () => {
            await services
                .get('api/messages/' + currentChat?._id)
                .then(res => {
                   
                    setMessages(res);
                })
                .catch(err => console.log(err))
        }
        getMessages()
    }, [currentChat]);

    const handleSubmit= async (e)=>{
        e.preventDefault();
        const message = {
            sender:user.id,
            text:newmessage,
            conversationId:currentChat._id
        }
        const receiverId = currentChat.members.find(member => member != user.id)
        socket.current.emit("sendMessage",{
            senderId:user.id,
            receiverId:receiverId,
            text:newmessage
        })
        await services.post('api/messages',message)
        .then(res=>{
            console.log(res)
            setMessages([...messages,res.data])
        }
        ).catch(err => console.log(err))
    }


    const createMeeting= async ()=>{
        await services.post('api/zoom/createZoomMeeting')
        .then(res=>{
            console.log(res.data.data.start_url)
            setNewMessage(res.data.data.start_url)
   
        }
        ).catch(err => console.log(err))
    }


    return (
        <div class="h-screen w-full flex antialiased text-gray-200 bg-gray-900 overflow-hidden">
            <div class="flex-1 flex flex-col">

                <main class="flex-grow flex flex-row min-h-0">
                    <section class="flex flex-col flex-none overflow-auto w-24 hover:w-64 group lg:max-w-sm md:w-2/5 transition-all duration-300 ease-in-out">
                        <div class="header p-4 flex flex-row justify-between items-center flex-none">
                            <Avatar
                                image={user.profilePhoto}
                                className="cursor-pointer my-2 ml-6"
                                status="online"
                                statusBottom
                            />
                            <p class="text-md font-bold hidden md:block group-hover:block">{user.name}</p>
                            <a href="#" class="block rounded-full hover:bg-gray-700 bg-gray-800 w-10 h-10 p-2 hidden md:block group-hover:block">

                            </a>
                        </div>
                        <div class="search-box p-4 flex-none">
                            <form onsubmit="">
                                <div class="relative">
                                    <label>
                                        <input class="rounded-full py-2 pr-6 pl-10 w-full border border-gray-800 focus:border-gray-700 bg-gray-800 focus:bg-gray-900 focus:outline-none text-gray-200 focus:shadow-md transition duration-300 ease-in"
                                            type="text" value="" placeholder="Search Messenger" />
                                        <span class="absolute top-0 left-0 mt-2 ml-3 inline-block">
                                            <svg viewBox="0 0 24 24" class="w-6 h-6">
                                                <path fill="#bbb"
                                                    d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
                                            </svg>
                                        </span>
                                    </label>
                                </div>
                            </form>
                        </div>
                        {coversations.map((c) =>
                            <div onClick={() => {setcurrentChat(c)}}>
                                <Conversation key={c.id} conversation={c} currentUser={user} />
                            </div>
                        )}
                    </section>
                    {currentChat ? <section class="flex flex-col flex-auto border-l border-gray-800">
                        {/* <div class="chat-header px-6 py-4 flex flex-row flex-none justify-between items-center shadow">
                            <div class="flex">
                                <div class="w-12 h-12 mr-4 relative flex flex-shrink-0">
                                    <img class="shadow-md rounded-full w-full h-full object-cover"
                                        src={props.img}
                                        alt=""
                                    />
                                </div>
                                <div class="text-sm">
                                    <p class="font-bold">{props.name}</p>
                                    <p>{props.time}</p>
                                </div>
                            </div>

                            <div onClick={createMeeting} class="flex" >
                                <a class="block rounded-full hover:bg-gray-700 bg-gray-800 w-10 h-10 p-2 ml-4">
                                    <svg viewBox="0 0 20 20" class="w-full h-full fill-current text-blue-500">
                                        <path d="M2.92893219,17.0710678 C6.83417511,20.9763107 13.1658249,20.9763107 17.0710678,17.0710678 C20.9763107,13.1658249 20.9763107,6.83417511 17.0710678,2.92893219 C13.1658249,-0.976310729 6.83417511,-0.976310729 2.92893219,2.92893219 C-0.976310729,6.83417511 -0.976310729,13.1658249 2.92893219,17.0710678 Z M9,11 L9,10.5 L9,9 L11,9 L11,15 L9,15 L9,11 Z M9,5 L11,5 L11,7 L9,7 L9,5 Z" />
                                    </svg>

                                </a>
                            </div>
                        </div> */}
                        <div class="chat-body p-4 flex-1 overflow-y-scroll">
                            {messages.map((m)=>{
                                return(
                                <div ref={scrollRef}>
                                <Message message={m.text} own={m.sender===user.id}/>
                                </div>
                                )
                            })}
                   
                        </div>
                        <div class="chat-footer flex-none">
                            <div class="flex flex-row items-center p-4">
                                <div class="relative flex-grow">
                                    <label>
                                        <input onChange={(e)=>setNewMessage(e.target.value)} value={newmessage} class="rounded-full py-2 pl-3 pr-10 w-full border border-gray-800 focus:border-gray-700 bg-gray-800 focus:bg-gray-900 focus:outline-none text-gray-200 focus:shadow-md transition duration-300 ease-in"
                                            type="text" placeholder="Enter Message" />
                                        <button onClick={handleSubmit} type="button" class="absolute top-0 right-0 mt-2 mr-3 flex flex-shrink-0 focus:outline-none block text-blue-600 hover:text-blue-700 w-6 h-6">
                                            <svg viewBox="0 0 20 20" class="w-full h-full fill-current">
                                                <path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM6.5 9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm7 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm2.16 3a6 6 0 0 1-11.32 0h11.32z" />
                                            </svg>
                                        </button>
                                    </label>
                                </div>
                                <div onClick={createMeeting} class="flex" >
                                <a class="block rounded-full hover:bg-gray-700 bg-gray-800 w-10 h-10 p-2 ml-4">
                                    <svg viewBox="0 0 20 20" class="w-full h-full fill-current text-blue-500">
                                        <path d="M2.92893219,17.0710678 C6.83417511,20.9763107 13.1658249,20.9763107 17.0710678,17.0710678 C20.9763107,13.1658249 20.9763107,6.83417511 17.0710678,2.92893219 C13.1658249,-0.976310729 6.83417511,-0.976310729 2.92893219,2.92893219 C-0.976310729,6.83417511 -0.976310729,13.1658249 2.92893219,17.0710678 Z M9,11 L9,10.5 L9,9 L11,9 L11,15 L9,15 L9,11 Z M9,5 L11,5 L11,7 L9,7 L9,5 Z" />
                                    </svg>

                                </a>
                            </div>
                            </div>
                        </div>
                    </section> :
                        <div class="lg:px-24 lg:py-24 md:py-20 md:px-44 px-4 py-24 items-center flex justify-center  md:gap-28 gap-16">
                            <div class="w-full relative pb-12 lg:pb-0">
                                <div class="relative">
                                    <div class="">
                                        <h1 class="my-2 text-white-800 font-bold text-2xl">
                                            Let's start to something new
                                        </h1>
                                        <p class="my-2 text-white-800"> Please click the user to get where you need to go.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }

                </main>
            </div>
        </div>


    )
}
