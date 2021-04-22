import menuPage from './menu.js'

function homePage() {
   const section = document.getElementById('section');

   while(section.firstChild){
      section.removeChild(section.firstChild);
   }

   const helloText = document.createElement('h2');
   helloText.classList.add('hello');
   helloText.textContent = "welcome at the home of the best tea in the world";

   const menuBtn = document.createElement('button');
   menuBtn.classList.add('btn');
   menuBtn.textContent = 'Menu';
   menuBtn.addEventListener('click', menuPage)

   const navItems = document.querySelectorAll('.nav-item');
   navItems.forEach(item => item.classList.remove('underline'));

   const homeNavItem = document.getElementById('home');
   homeNavItem.classList.add('underline');

   section.appendChild(helloText);
   section.appendChild(menuBtn);
}

export default homePage;