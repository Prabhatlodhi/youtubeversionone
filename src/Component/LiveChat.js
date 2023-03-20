import React, { useEffect, useState } from 'react'
import "./CSSALL/LiveChat.css"
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from './Redux/chatSlice'
import { generateRandonName } from './Utils/HelperNameData'
import { Randommessage } from './Utils/HelperNameData'

const LiveChat = () => {

    const [liveMessage, setLiveMessage ] = useState("")

    const dispatch = useDispatch()

    const chatmessage = useSelector(store => store.chat.messages)

    useEffect(()=>{
        const empty = setInterval(()=>{
            dispatch(addMessage({
                name:  generateRandonName(),
                message: Randommessage(20),
            }))
        },1000)
        return ()=>
            clearInterval(empty)
        
    },[])

  return (
    <div className='wrapperchat'>
        <div className='livechat'>  
      {
        chatmessage.map( (c,i )=> < ChatMessage name={c.name} text={c.message} key={i}/>)
      }
      
    </div>
    <form onSubmit={(e)=> {e.preventDefault()
        dispatch(addMessage({
            name: "Prabhat Lodhi",
            message: liveMessage,
            
        }))
        setLiveMessage("")
     }}>
        <input type="text" value={liveMessage} onChange={(e)=> {setLiveMessage(e.target.value)}  }/>
        <button   >Send Message</button>
      </form>
    </div>
  )
}

export default LiveChat;
