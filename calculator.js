let Input = document.querySelector('.input');
let Screen = document.querySelector('.screen');
let buttons = document.querySelectorAll('.button');
let erasebtn = document.querySelector('#erase');
let clearbtn = document.querySelector('#clear');
let evaluate = document.querySelector('.evaluate');
let realTimeScreenValue = []

clearbtn.addEventListener('click', () => {
   realTimeScreenValue = [''];
   Screen.innerHTML = 0;
   Input.className = 'Input'
   Screen.className = 'Screen';
   Screen.style.color = rgba(150, 150, 150, 0.87);
})

buttons.forEach((btn) => {
   btn.addEventListener('click', () => {
      //when clicked button is not erased button
      if (!btn.id.match('erase')) {
         //To display value on btn press
         realTimeScreenValue.push(btn.value)
         Input.innerHTML = realTimeScreenValue.join('');
         //To evaluate answer in real time
         if (btn.classList.contains('num_btn')) {
            Screen.innerHTML = eval(realTimeScreenValue.join(''));
         }
      }
      // When erase button is clicked
      if (btn.id.match('erase')) {
         realTimeScreenValue.pop();
         Input.innerHTML = realTimeScreenValue.join('');
         Screen.innerHTML = eval(realTimeScreenValue.join(''));
      }
      //When clicked button is evaluate button
      if (btn.id.match('evaluate')) {
         Input.className = 'Screen';
         Screen.className = 'Input';
         Screen.style.color= "white";         
      }
      //To prevent undefined error in screen
      if (typeof eval(realTimeScreenValue.join('')) == 'undefined') {
         Screen.innerHTML = 0
      }
   })
})