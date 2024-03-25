import './style.css'

const form = document.querySelector('form');
let messages = [];
//let messages = JSON.parse(localStorage.getItem('messages')) || [];
updateHtml();


async function getGptResponse(prompt)
{
  messages.push({
    "role": "user",
    "content":prompt,
  });
  updateHtml();
  blockButton();

  const response = await fetch('http://localhost:8080/gpt',{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      messages
    })
  })
  const apiResponse = await response.json();
  return apiResponse.choices[0].message;
}

form.addEventListener('submit',async (e) => {
  e.preventDefault();
  const data = new FormData(form);
  
  const response = await getGptResponse(data.get('prompt'));
  messages.push(response);
  localStorage.setItem('messages', JSON.stringify(messages));
 
  updateHtml();
  unlockButton();
} )

function updateHtml()
{
  let html = '';
  for(let i = 0; i< messages.length; i++)
  {
    html += `<div class="${messages[i].role}">${messages[i].content}</div>`
  }
  const div = document.querySelector('#messages');
  div.innerHTML = html;
}
function blockButton()
{
  const button = document.querySelector('button');
  const textbox = document.querySelector('textarea');
  const div = document.querySelector('#messages');
  button.disabled = true;
  div.innerHTML += '<div class="assistant">Thinking...</div>';
  textbox.value = '';
}
function unlockButton()
{
  const button = document.querySelector('button');
  const textbox = document.querySelector('textarea');
  const div = document.querySelector('#messages');
  button.disabled = false;
}


