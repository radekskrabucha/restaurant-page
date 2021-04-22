function menuPage() {
   const section = document.getElementById('section');
   const menu = [
      {
         name: 'jasmine tea',
         price: '3.50'
      },
      {
         name: 'black tea',
         price: '3.50'
      },
      {
         name: 'osmanthus oolong tea',
         price: '3.75'
      },
      {
         name: 'watermelon tea',
         price: '3.75'
      },
      {
         name: 'lychee rose tea',
         price: '4.00'
      },
      {
         name: 'thai tea',
         price: '4.00'
      },
      {
         name: 'thai green tea',
         price: '4.00'
      },
   ]

   while(section.firstChild){
      section.removeChild(section.firstChild);
   }

   const helloText = document.createElement('h2');
   helloText.classList.add('hello');
   helloText.textContent = "check out our menu";

   const menuContainer = document.createElement('div');
   menuContainer.classList.add('menu-container');


   menu.forEach(tea => {
      const teaContainer = document.createElement('div');
      teaContainer.classList.add('tea-container');

      const teaName = document.createElement('p');
      teaName.classList.add('tea-name');
      teaName.textContent = tea.name;

      const teaPrice = document.createElement('p');
      teaPrice.classList.add('tea-price');
      teaPrice.textContent = `$${tea.price}`;


      teaContainer.appendChild(teaName);
      teaContainer.appendChild(teaPrice);
      menuContainer.appendChild(teaContainer);
   })



   const navItems = document.querySelectorAll('.nav-item');
   navItems.forEach(item => item.classList.remove('underline'));

   const menuNavItem = document.getElementById('menu');
   menuNavItem.classList.add('underline');


   section.appendChild(helloText);
   section.appendChild(menuContainer);
}



export default menuPage;