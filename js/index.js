// const hamburger = document.getElementById('ham');
// const mobMenu = document.getElementById('mob-menu');
// const nav = document.querySelector('#nav-bar');
// const closeBtn = document.querySelector('.close-icon');
const speakersSection = document.querySelector('.speakers-sec');
const speakers = [
  {
    name: 'Bobi Wine',
    title: 'Association President',
    photo: '../assets/bobi.jpeg',
    brief: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam laudantium impedit ipsa nostrum accusantium ipsum, mollitia, totam quaerat ab, facilis perferendis praesentium eius? Recusandae aspernatur, accusantium voluptate nisi amet incidunt!',
  },
  {
    name: 'Cindy Sanyu',
    title: 'Association Secretary',
    photo: '../assets/cindy.jpeg',
    brief: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam laudantium impedit ipsa nostrum accusantium ipsum, mollitia, totam quaerat ab, facilis perferendis praesentium eius? Recusandae aspernatur, accusantium voluptate nisi amet incidunt!',
  },
  {
    name: 'Sheebah Karunjji',
    title: 'Musician',
    photo: '../assets/sheebah.jpeg',
    brief: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam laudantium impedit ipsa nostrum accusantium ipsum, mollitia, totam quaerat ab, facilis perferendis praesentium eius? Recusandae aspernatur, accusantium voluptate nisi amet incidunt!',
  },
  {
    name: 'Apass Bagonza',
    title: 'Composer',
    photo: '../assets/apass.jpeg',
    brief: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam laudantium impedit ipsa nostrum accusantium ipsum, mollitia, totam quaerat ab, facilis perferendis praesentium eius? Recusandae aspernatur, accusantium voluptate nisi amet incidunt!',
  },
  {
    name: 'Silver Kyagulanyi',
    title: 'Lawyer',
    photo: '../assets/silver.jpeg',
    brief: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam laudantium impedit ipsa nostrum accusantium ipsum, mollitia, totam quaerat ab, facilis perferendis praesentium eius? Recusandae aspernatur, accusantium voluptate nisi amet incidunt!',
  },
  {
    name: 'Eddy Kenzo',
    title: 'Chief Speaker',
    photo: '../assets/kenzo.jpeg',
    brief: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam laudantium impedit ipsa nostrum accusantium ipsum, mollitia, totam quaerat ab, facilis perferendis praesentium eius? Recusandae aspernatur, accusantium voluptate nisi amet incidunt!',
  },
];

// function openMenu() {
//   mobMenu.style.display = 'block';
//   nav.style.visibility = 'hidden';
// }

// function closeMenu() {
//   mobMenu.style.display = 'none';
//   nav.style.visibility = 'visible';
// }

// hamburger.addEventListener('click', openMenu);
// closeBtn.addEventListener('click', closeMenu);

// GENERATE SPEAKERS

speakers.forEach((speaker) => {
  const speakerCont = document.createElement('div');
  speakerCont.classList.add('speaker');
  speakerCont.innerHTML = `
  <div class="speaker-img-cont">
    <img src=${speaker.photo} alt="" />
  </div>
  <div class="speaker-details">
    <h5>${speaker.name}</h5>
    <p class="title">${speaker.title}</p>
    <div class="seperator"></div>
    <p class="brief">
     ${speaker.brief}
    </p>
  </div>
  `;
  speakersSection.append(speakerCont);
});