import React,{useState , useEffect} from 'react'
import { CachedRounded } from '@material-ui/icons';
import {MessageOutlined} from  '@material-ui/icons';
import {Menu} from  '@material-ui/icons';
import {Mic} from  '@material-ui/icons';
import {Send} from  '@material-ui/icons';
import {SentimentVerySatisfied} from  '@material-ui/icons';
import { useParams } from 'react-router-dom';
import { chatList } from '../assets/data';
const Chat = () => {
    const {id} = useParams()
    const [person , setPerson] = useState([])
   console.log(id)
    useEffect(()=>{
      
      const chat = chatList.find((item)=>item.id === id)
       setPerson(chat)
    //    console.log(chat)
    },[id])
    // console.log(person)
   const {name , image , lastMessage} = person
  return (
    <div class="col-md-8">
    <div class="settings-tray">
        <div class="friend-drawer no-gutters friend-drawer--grey">
        <img class="profile-image" src={image} alt="" />
        <div class="text">
          <h6>{name}</h6>
          <p class="text-muted">Layin' down the law since like before Christ...</p>
        </div>
        <span class="settings-tray--right">
        <i className='material-icons'><CachedRounded/></i>
			<i className='material-icons'><MessageOutlined/></i>
			<i className='material-icons'><Menu/></i>
        </span>
      </div>
    </div>
    <div class="chat-panel">
      <div class="row no-gutters">
        <div class="col-md-3">
          <div class="chat-bubble chat-bubble--left">
            Hello dude!
          </div>
        </div>
      </div>
      <div class="row no-gutters">
        <div class="col-md-3 offset-md-9">
          <div class="chat-bubble chat-bubble--right">
            Hello dude!
          </div>
        </div>
      </div>
      <div class="row no-gutters">
        <div class="col-md-3 offset-md-9">
          <div class="chat-bubble chat-bubble--right">
            Hello dude!
          </div>
        </div>
      </div>
      <div class="row no-gutters">
        <div class="col-md-3">
          <div class="chat-bubble chat-bubble--left">
            Hello dude!
          </div>
        </div>
      </div>
      <div class="row no-gutters">
        <div class="col-md-3">
          <div class="chat-bubble chat-bubble--left">
            Hello dude!
          </div>
        </div>
      </div>
      <div class="row no-gutters">
        <div class="col-md-3 offset-md-9">
          <div class="chat-bubble chat-bubble--right">
            Hello dude!
          </div>
        </div>
      </div>
      <div class="row no-gutters">
        <div class="col-md-3 ">
          <div class="chat-bubble chat-bubble--left">
            {lastMessage}
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <div class="chat-box-tray">
            <i class="material-icons"><SentimentVerySatisfied/></i>
            <input type="text" placeholder="Type your message here..." />
            <i class="material-icons"><Mic/></i>
            <i class="material-icons"><Send/></i>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Chat