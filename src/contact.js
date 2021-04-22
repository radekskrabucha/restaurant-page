function contactUs() {
   const section = document.getElementById('section');

   while(section.firstChild){
      section.removeChild(section.firstChild);
   }

   const helloText = document.createElement('h2');
   helloText.classList.add('hello');
   helloText.textContent = "Find us at:";

   const contactContainer = document.createElement('div');
   contactContainer.classList.add('contact-container')

   const addres1Line = document.createElement('p');
   addres1Line.textContent = "Krakowskie Przedmieście 51";
   addres1Line.classList.add('contact-text')

   const addres2Line = document.createElement('p');
   addres2Line.textContent = "20-076 Lublin";
   addres2Line.classList.add('contact-text')

   const tel = document.createElement('p');
   tel.textContent = '712-377-124';
   tel.classList.add('contact-text')

   const email = document.createElement('p');
   email.textContent = 'contact@spill.tea'
   email.classList.add('contact-text')



   const socials = document.createElement('div');
   socials.classList.add('socials');

   const fbLink = document.createElement('a');
   fbLink.setAttribute('href', '#');
   const fb = document.createElement('img');
   fb.classList.add('icon');
   fb.setAttribute('src', 'assets/fb.svg');
   fbLink.appendChild(fb);

   const igLink = document.createElement('a');
   igLink.setAttribute('href', '#');
   const ig = document.createElement('img');
   ig.classList.add('icon');
   ig.setAttribute('src', 'assets/ig.svg');
   igLink.appendChild(ig);

   const ttLink = document.createElement('a');
   ttLink.setAttribute('href', '#');
   const tt = document.createElement('img');
   tt.classList.add('icon');
   tt.setAttribute('src', 'assets/tt.svg');
   ttLink.appendChild(tt);

   const ytLink = document.createElement('a');
   ytLink.setAttribute('href', '#');
   const yt = document.createElement('img');
   yt.classList.add('icon');
   yt.setAttribute('src', 'assets/yt.svg');
   ytLink.appendChild(yt);


   const navItems = document.querySelectorAll('.nav-item');
   navItems.forEach(item => item.classList.remove('underline'));

   const contactNavItem = document.getElementById('contact');
   contactNavItem.classList.add('underline');

   contactContainer.appendChild(addres1Line);
   contactContainer.appendChild(addres2Line);
   contactContainer.appendChild(tel);
   contactContainer.appendChild(email);

   socials.appendChild(fbLink);
   socials.appendChild(igLink);
   socials.appendChild(ttLink);
   socials.appendChild(ytLink);


   section.appendChild(helloText);
   section.appendChild(contactContainer);
   section.appendChild(socials);
}

export default contactUs;