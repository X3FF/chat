import React  from 'react'
import { useState } from 'react'

const ChatFrame = () => {

        //переменные для реплая
    let replyAuthor = ''
    let replyMessage = ''


        // состояния для инпута и поля вводы текста
    const [value, setValue] = useState('')  
    const [messageText, setMessageText] = useState('')
 
        //сообщения пользователя
    const sendMessage = () =>{
        
        let chat = document.querySelector('.chatArea')
        let time = new Date();
        let uMessage = document.createElement('div') //создаем div-блок ответа в чате
            uMessage.classList.add('userMessage') //присваиваем ему класс
        let uMessageName = document.createElement('h4') //добавляем теги для имени пользователя, сообщения и времени отправки
        let uMessageText = document.createElement('h3')   
        let uMessageTime = document.createElement('p') 
            uMessageName.innerText = messageText //текст сообщения
            uMessageTime.innerText = time.getHours() + ':' + time.getMinutes() //получаем время часы:минуты
            uMessageText.innerText = value //имя пользователя в сообщении
            chat.append(uMessage) //добавляем в поле новое сообщение
            uMessage.prepend(uMessageName)
            uMessage.append(uMessageText)
            uMessage.append(uMessageTime)
            uMessageText.value = '' //очищаем textarea после отправки сообщения
            chat.scrollTop = 1000; //автопрокрутка чата к последнему сообщению
            
        
    }

    

  return (
            // рендерим форму
    <div className='mainForm'>
        <h3>Робот-помощник</h3>
        <div className="chatForm">
        <div className="chatArea">
                
                </div>
        </div>
                    {/* панель маркдаунов для текста */}
        <div className='messageForm'>   
            <div className="textMarkdown">
                <button><img src="bold-icon.png" alt="" /></button>
                <button><img src="italic-icon.png" alt="" /></button>
                <button><img src="underline-icon.png" alt="" /></button>
                <button><img src="numbered-icon.png" alt="" /></button>
                <button><img src="marked-icon.png" alt="" /></button>
                <button><img src="reset-icon.png" alt="" /></button>
            </div>
            
            <div className='replyText hidden'>     {/* панель реплая изначально скрыта через добавление класса .hidden */}
                <h4 className='replyTitle'>Ответ на сообщение:</h4>   
                <p className="replyAuthor">{replyAuthor}</p>
                <p className="replyMessage">{replyMessage}</p>
            </div>
                {/* инпут и поле ввода текста для сообщения*/}
            <input className='messageForm-name' type="text" placeholder='Имя'  onChange= {e => setValue(e.target.value)}/>
            <textarea className='messageForm-text' 
                value={messageText} 
                type="text" cols="30"
                rows="10" placeholder='Сообщение' 
                onChange= {e => setMessageText(e.target.value)}>
             </textarea>
            <button onClick={sendMessage} className='sendMessage'><img src="sendButton.png" alt="" /></button>
        </div>

    </div>
  )
}

export default ChatFrame