import React  from 'react'
import { useState } from 'react'

const ChatFrame = () => {

    let replyAuthor = 'Евгений'
    let replyMessage = 'Хочу программировать'
    


  return (
    <div className='mainForm'>
        <h3>Робот-помощник</h3>
        <div className="chatForm">
        <div className="chatArea">
                
                </div>
        </div>
        <div className='messageForm'>
            <div className="textMarkdown">
                <button><img src="bold-icon.png" alt="" /></button>
                <button><img src="italic-icon.png" alt="" /></button>
                <button><img src="underline-icon.png" alt="" /></button>
                <button><img src="numbered-icon.png" alt="" /></button>
                <button><img src="marked-icon.png" alt="" /></button>
                <button><img src="reset-icon.png" alt="" /></button>
            </div>
            
            <div className='replyText'>
                <h4 className='replyTitle'>Ответ на сообщение:</h4>
                <p className="replyAuthor">{replyAuthor}</p>
                <p className="replyMessage">{replyMessage}</p>
            </div>
            <input className='messageForm-name' type="text" placeholder='Имя'/>
            <textarea className='messageForm-text' name="" id="" cols="30" rows="10" placeholder='Сообщение' ></textarea>
            <button className='sendMessage'><img src="sendButton.png" alt="" /></button>
        </div>

    </div>
  )
}

export default ChatFrame