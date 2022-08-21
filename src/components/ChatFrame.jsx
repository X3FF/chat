import React  from 'react'

const ChatFrame = () => {

    let i = 0;  //переменная для счетчика id сообщений в чате
    
 
        //сообщения пользователя
    const sendMessage = () =>{
        
        let chat = document.querySelector('.chatArea')
        let time = new Date();
        let uMessage = document.createElement('div') //создаем div-блок ответа в чате
            uMessage.classList.add('userMessage') //присваиваем ему класс
        let uMessageName = document.createElement('h3') //добавляем теги для имени пользователя, сообщения и времени отправки
        let uMessageText = document.createElement('h4')   
        let uMessageTime = document.createElement('p') 
            uMessageName.innerText = document.querySelector('.messageForm-name').value //имя пользователя
            uMessageTime.innerText = time.getHours() + ':' + time.getMinutes() //получаем время часы:минуты
            uMessageText.innerText = document.querySelector('.messageForm-text').value //сообщение пользователя
            if (uMessageName.innerText && uMessageText.innerText !='' ){
            chat.append(uMessage) //добавляем в поле новое сообщение
            uMessage.prepend(uMessageName)
            uMessage.append(uMessageText)
            uMessage.append(uMessageTime)
            uMessageText.value = '' //очищаем textarea после отправки сообщения
            chat.scrollTop = 9999999; //автопрокрутка чата к последнему сообщению
            setTimeout( botMessage, 1000)  //автоответ бота через 1000мсек
            
             } 
             else{              //если не заполнены все поля, то показываем баннер с ошибкой
               let error = document.querySelector('.error')
               error.style.opacity= '1'         
               error.style.bottom = '20px'
                setTimeout(function () {error.style.opacity = '0' ;  //показываем ошибку, по истечении 1500мсек прячем
                }, 1500);   
                
                
            }
        
    }

    const botMessage =()=>{
        
        let chat = document.querySelector('.chatArea')
        let time = new Date();
        let bMessage = document.createElement('div') //создаем div-блок ответа в чате
            bMessage.classList.add('botMessage') //присваиваем ему класс
            bMessage.id = 'botMessage'+i++//присваиваем ему класс
        let bMessageName = document.createElement('h3') //добавляем теги для имени бота, сообщения и времени отправки
        let bMessageText = document.createElement('h4')   
        let bMessageTime = document.createElement('p') 
        let bMessageReply = document.createElement('button') 
            bMessageReply.classList.add('rplMess')
            bMessageReply.addEventListener('click', reply)
            bMessageName.innerText = 'Чат-бот' //имя бота
            bMessageTime.innerText = time.getHours() + ':' + time.getMinutes() //получаем время часы:минуты
            bMessageText.innerText = 'Случайный ответ №' +Math.floor(Math.random(0, 999) *1000) //сообщение бота
            chat.append(bMessage) //добавляем в поле новое сообщение
            bMessage.prepend(bMessageName)
            bMessage.append(bMessageText)
            bMessage.append(bMessageTime)
            bMessage.append(bMessageReply)
            chat.scrollTop = 9999999; //автопрокрутка чата к последнему сообщению
            


    }

      
    const reply = () =>{
            document.querySelectorAll('.botMessage').forEach(el => el.addEventListener("click", function() {
            console.log(el.id);
            document.querySelector('.replyText').classList.remove('hidden') //показываем панель реплая
            let replyAuthor = document.querySelector('#'+el.id+'>h3').textContent //имя реплая
            let replyMessage = document.querySelector('#'+el.id+'>h4').textContent  //текст реплая
            document.querySelector('.replyAuthor').innerText = replyAuthor
            document.querySelector('.replyMessage').innerText = replyMessage
            console.log(replyAuthor)
            console.log(replyMessage)
          }));
        
    }

    const replyClose = () =>{
        document.querySelector('.replyText').classList.toggle('hidden')
    }
    
    /* форматирование текста */
    const bText = () =>{
        let formattedText = document.querySelector('.messageForm-text')
        formattedText.classList.toggle('bold')
    } 
    
    

  return (
            // рендерим форму
    <div className='mainForm'>
        <button><img src="showHide-icon.png" alt="" /></button>
        <ul>
            <li><img src="leftAction-icon1.png" alt="" /></li>
            <li><img src="leftAction-icon2.png" alt="" /></li>
            <li><img src="leftAction-icon3.png" alt="" /></li>
            <li><img src="leftAction-icon4.png" alt="" /></li>
        </ul>
        <h3>Робот-помощник</h3>
        <div className="chatForm">
        <div className="chatArea">
                
                </div>
        </div>
                    {/* панель маркдаунов для текста */}
        <div className='messageForm'>   
            <div className="textMarkdown">
                <button onClick={bText} id='boldText'><img src="bold-icon.png" alt="" /></button>
                <button id='italicText'><img src="italic-icon.png" alt="" /></button>
                <button id='underlineText'><img src="underline-icon.png" alt="" /></button>
                <button id='numberedText'><img src="numbered-icon.png" alt="" /></button>
                <button id='markedText'><img src="marked-icon.png" alt="" /></button>
                <button id='resetTextStyle'><img src="reset-icon.png" alt="" /></button>
            </div>
            
            <div className='replyText hidden'> 
                <button  onClick ={replyClose} className='replyText-close'></button>   
                <h4 className='replyTitle'>Ответ на сообщение:</h4>   
                <p className="replyAuthor"></p>
                <p className="replyMessage"></p>
            </div>
                {/* инпут и поле ввода текста для сообщения*/}
            <input className='messageForm-name' type="text" placeholder='Имя' />
            <textarea className='messageForm-text' 
                
                type="text" cols="30"
                rows="10" placeholder='Сообщение'>
             </textarea>
            <button onClick={sendMessage} className='sendMessage'><img src="sendButton.png" alt="" /></button>
            
        </div>
        <div  className='error hidden'><img src="error-icon.png" alt="" /><span>Проверьте все поля!</span></div>
    </div>
  )
}

export default ChatFrame