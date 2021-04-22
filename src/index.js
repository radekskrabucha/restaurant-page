import menuPage from './menu.js';
import contactPage from './contact.js';
import homePage from './home.js';

const content = document.getElementById('content');


function layout() {
   // title
   const hello = document.createElement('h1');
   hello.textContent = "spill a tea";
   hello.classList.add('title');

   // navbar
   const nav = document.createElement('nav');
   nav.classList.add('nav')
   const ul = document.createElement('ul');
   ul.classList.add('nav-list');

   const homeLi = document.createElement('li');
   homeLi.classList.add('nav-item');
   homeLi.addEventListener('click', homePage);
   homeLi.setAttribute('id', 'home');
   const homeLiText = document.createElement('p');
   homeLiText.textContent = "home";
   homeLi.appendChild(homeLiText);

   const menuLi = document.createElement('li');
   menuLi.classList.add('nav-item');
   menuLi.addEventListener('click', menuPage);
   menuLi.setAttribute('id', 'menu');
   const menuLiText = document.createElement('p');
   menuLiText.textContent = "menu";
   menuLi.appendChild(menuLiText);
   

   const contactLi = document.createElement('li');
   contactLi.classList.add('nav-item');
   contactLi.addEventListener('click', contactPage);
   contactLi.setAttribute('id', 'contact');
   const contactLiText = document.createElement('p');
   contactLiText.textContent = "contact";
   contactLi.appendChild(contactLiText);


   ul.appendChild(homeLi);
   ul.appendChild(menuLi);
   ul.appendChild(contactLi);
   nav.appendChild(ul);

   const section = document.createElement('section');
   section.setAttribute('id', 'section');


   content.appendChild(hello);
   content.appendChild(nav);
   content.appendChild(section);
}

layout();
homePage();