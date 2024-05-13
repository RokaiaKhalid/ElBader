// show Menu variables
let listBtn = document.querySelector('.list-btn'),
  megaMenu = document.querySelector('.mega-menu');

// function show
listBtn.addEventListener('click', function(e) {
  e.stopPropagation();

  this.classList.toggle('active');

  megaMenu.classList.toggle('active');

})

document.addEventListener('click', (e) => {

  if (e.target !== megaMenu && e.target !== listBtn) {
    if (megaMenu.classList.contains('active')) {
      e.target.classList.toggle('active');

      megaMenu.classList.toggle('active');
    }
   

  }

})

megaMenu.onclick = () => stopPropagation();

// Variables skills
let sectionSkils = document.querySelector('.our-skills'),
  skillsHeading = document.querySelectorAll('.skills h3 span'),
  skillsProgress = document.querySelectorAll('.skills .progress span');

// Stats Elements
let stats = document.querySelectorAll(".stats .box span"),
  sectionStats = document.querySelector(".stats");

let start = false;
window.onscroll = function () {
  // Window Height
  let windowHeight = this.innerHeight;

  // Window ScrollTop
  let windowScrollTop = this.scrollY;

  // Skills Offset Top
  let skillsOffsetTop = sectionSkils.offsetTop;

  // Skills Outer Height
  let skillsOuterHeight = sectionSkils.offsetHeight;

  // Skills
  if (windowScrollTop > (skillsOffsetTop + skillsOuterHeight - windowHeight)) {
    
    skillsProgress.forEach(skill => skill.style.width = skill.dataset.width);

    skillsHeading.forEach((skill, i) => skill.innerHTML = skillsProgress[i].dataset.width);

  }
  // Stats Offset Top
  let statsOffsetTop = sectionStats.offsetTop;

  // stats Outer Height
  let statsOuterHeight = sectionStats.offsetHeight;

  if (windowScrollTop > (statsOffsetTop + statsOuterHeight - windowHeight)) {
    
    // stats
    if (!start) {
      stats.forEach(el => {
        let goal = el.dataset.goal;
        let count = setInterval(() => {
          el.textContent++;
          if (el.textContent === goal) {
            clearInterval(count);
          }
        }, 2000 / goal);
      });   
      start = true;
    }
    

  }

}

// events
// the limited date
let countDownDate = new Date("Dec 31, 2024 23:59:59").getTime();

let counter = setInterval(() => {
  // Get Date Now
  let dateNow = new Date().getTime();

  // Find the Date Difference Between Now And Countdown Date
  let dateDiff = countDownDate - dateNow;


  // Get Time Units
  // let days = Math.floor(dateDiff / 1000 / 60 / 60 / 24);
  let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
  let hours = Math.floor(dateDiff % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
  let minutes = Math.floor(dateDiff % (1000 * 60 * 60) / (1000 * 60));
  let seconds = Math.floor(dateDiff % (1000 * 60) / (1000));

  // add To Document
  document.querySelector('.days').innerHTML = days < 10 ? `0${days}` : days;
  document.querySelector('.hours').innerHTML = hours < 10 ? `0${hours}` : hours;
  document.querySelector('.minutes').innerHTML = minutes < 10 ? `0${minutes}` : minutes;
  document.querySelector('.seconds').innerHTML = seconds < 10 ? `0${seconds}` : seconds;
  
  if (dateDiff <= 0) {
    clearInterval(counter);
  }
}, 1000);

// Count To Stats
// function startCount(el) {
//   let goal = el.dataset.goal;
//   let count = setInterval(() => {
//     el.textContent++;
//     if (el.textContent === goal) {
//       clearInterval(count);
//     }
//   }, 2000 / goal);
  
// }