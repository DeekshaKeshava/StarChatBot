import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { FaPlus } from "react-icons/fa";
import { FaRegMessage } from "react-icons/fa6";
import "./Sidebar.css"
import { dataContext } from '../../context/UserContext';
import { useContext } from 'react';
 function Sidebar(){
        const [extend, setExtend] = React.useState(false);
        const { prevPrompts,newChat } = useContext(dataContext)
        async function loadPrevPrompts(prompt) {
          setInterval(prompt)
        }
  return (
    <div className="sidebar">
      <GiHamburgerMenu
        id="ham"
        onClick={() => {
          setExtend((prev) => {
            return !prev;
          });
        }}
      />
        
        <div className="newchat" onClick={()=>{
          newChat()
        }}>
            <FaPlus />
            {extend?<p>New Chat</p>:null}
            </div>
            {prevPrompts?.map((item,index)=>{
              return(
            <div className="recent" onClick={()=>{
              loadPrevPrompts(item)
            }}>
                <FaRegMessage />
                {extend?<p>{item.slice(0,10)+"..."}</p>:null}
            </div>
              )
            })}
            </div>
            

           
  )
}

export default Sidebar
