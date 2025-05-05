// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener('click', function (e) {
//         e.preventDefault();

//         document.querySelector(this.getAttribute('href')).scrollIntoView({
//             behavior: 'smooth'
//         });
//     });
// });

const carouselDiv = document.querySelector('.jungle-carousel');

fetch('carasoul_zone/index.html')
  .then(response => response.text())
  .then(html => {
    document.getElementById('card-carosol').innerHTML = html;
  });

const pricediv = document.querySelector('.price');

fetch('price/index.html')
  .then(response => response.text())
  .then(html => {
    document.getElementById('price').innerHTML = html;
  });

const zonedetails = document.querySelector('.zone-details');

fetch('zone_details/index.html')
  .then(response => response.text())
  .then(html => {
    document.getElementById('zone-details').innerHTML = html;
  });

const pannawelcome = document.querySelector('.panna-welcome');

fetch('panna_welcome/index.html')
  .then(response => response.text())
  .then(html => {
    document.getElementById('panna-welcome').innerHTML = html;
  });

const connectivity = document.querySelector('.connectivity');

fetch('connectivity/index.html')
.then(response => response.text())
.then(html => {
  document.getElementById('connectivity').innerHTML = html;
});

const navbar = document.querySelector('.navbar');

fetch('navbar/index.html')
.then(response => response.text())
.then(html => {
  document.getElementById('navbar').innerHTML = html;
});

const contact = document.querySelector('.contact');

fetch('contact/index.html')
.then(response => response.text())
.then(html => {
  document.getElementById('contact').innerHTML = html;
});

const form = document.querySelector('.form');

fetch('form/index.html')
.then(response => response.text())
.then(html => {
  document.getElementById('contact').innerHTML = html;
});

const timeing = document.querySelector('.timeing');

fetch('timeing/index.html')
.then(response => response.text())
.then(html => {
  document.getElementById('contact').innerHTML = html;
});

