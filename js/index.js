let sms = document.querySelector('.main-info');

function show_onscroll() {

  let wt = window.scrollY;
  let wh = document.body.clientHeight;
  let eh = sms.offsetHeight;
  let et = sms.offsetTop;

  if (wt + wh > et + eh * 0.9)
    return true;
}

window.addEventListener('scroll', function (e) {

  if (show_onscroll())
    sms.classList.add("loud");

});
