import React from 'react'
// import CachedIcon from '@mui/icons-material/Cached';
import { CachedRounded } from '@material-ui/icons';
import {MessageOutlined} from  '@material-ui/icons';
import {Menu} from  '@material-ui/icons';
import {Search} from  '@material-ui/icons';
import { chatList } from '../assets/data';
import {useNavigate} from 'react-router-dom'

const Sidebar = () => {
const navigate = useNavigate();

const Chat = (id) => {
    navigate(`/chat/${id}`)
}

  return (
    <div class="col-md-4 border-right">
		<div class="settings-tray">
		  <img class="profile-image" src="https://www.clarity-enhanced.net/wp-content/uploads/2020/06/filip.jpg" alt="Profile img" />
		  <span class="settings-tray--right">
			<i className='material-icons'><CachedRounded/></i>
			<i className='material-icons'><MessageOutlined/></i>
			<i className='material-icons'><Menu/></i>
		  </span>
		</div>
		<div class="search-box">
		  <div class="input-wrapper">
			<i className='material-icons'><Search/></i>
			<input placeholder="Search here" type="text"/>
		  </div>
		</div>
		
    {
      chatList.map((item)=>(
    
        <div class="friend-drawer friend-drawer--onhover" key={item.id} onClick={()=>Chat(item.id)}>
        <img class="profile-image" src={item.image} alt=""/>
        <div class="text">
        <h6>{item.name}</h6>
        <p class="text-muted">{item.lastMessage}</p>
        </div>
        <span class="time text-muted small">{item.time}</span>
      </div>
      
      
      
      ))
    }

		
	  </div>
  )
}

export default Sidebar;