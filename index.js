const button = document.querySelector('button');
const message = document.querySelector('#message');
const outputDiv = document.querySelector('#output-div');
const botMessages = ['Hello!', 'How are you?', 'What do you do?', 'What are you doing now?', 'What time is it now?', 'What is your favourite food?', 'Are you study or work?'];

function sendMessage () {
    const delay = Math.floor(Math.random() * (10000 - 1000 + 1)) + 1000;
    let userInput = message.value.trim();
    if (!userInput) return;

    let userText = document.createElement('p');
    userText.innerHTML = `<b>User:</b> ${message.value}`;
    outputDiv.appendChild(userText);
    message.value = '';

    let botText = document.createElement('p');

    if (userInput.toLowerCase() === 'my watch has ended') {
        setTimeout(() => {
            botText.innerHTML = `<b>Bot:</b> Goodbye! Have a nice day! Цей бот завершив чат`;
            outputDiv.appendChild(botText);
            button.setAttribute('disabled', '');
        }, delay);
    } else {
        let randomIndex = Math.floor(Math.random() * botMessages.length);
        let randomMessage = botMessages[randomIndex];
        setTimeout(() => {
            botText.innerHTML = `<b>Bot:</b> ${randomMessage}`;
            outputDiv.appendChild(botText);
        }, delay);
    }

    const randomEndChatDelay = Math.floor(Math.random() * (20000 - 5000 + 1)) + 5000;
    setTimeout(() => {
        alert('This bot automatically ended the chat!')
        outputDiv.innerHTML = '';
        button.setAttribute('disabled', '');
    }, randomEndChatDelay);
}

button.addEventListener('click', sendMessage);