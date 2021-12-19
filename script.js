const btnPrev = document.querySelector('.carousel-btn.prev');
const btnNext = document.querySelector('.carousel-btn.next');
const ul = document.querySelector('.carousel ul');

let i = 0;

function handleClick(e) {
  const lis = Array.from(ul.children);

  // SOLUTION with class attr

  /*
  lis.forEach(li => {
    if(li.classList.contains('active')) {
      li.classList.remove('active');
    }
  })
  
  if(e.target === btnPrev) {
    i--;
    if(i < 0) i = lis.length - 1;
    lis[i].classList.add('active');
  } 

  if(e.target === btnNext) {
    i++;
    if(i >= lis.length) i = 0;
    lis[i].classList.add('active');
  }
  */

  // SOLUTION with data attr
  
  lis.forEach(li => {
    if(li.dataset.active) {
      li.removeAttribute('data-active');
    }
  })
  
  if(e.target === btnPrev) {
    i--;
    if(i < 0) i = lis.length - 1;
    lis[i].setAttribute('data-active', 'active');
  } 

  if(e.target === btnNext) {
    i++;
    if(i >= lis.length) i = 0;
    lis[i].setAttribute('data-active', 'active');
  }
}

btnPrev.addEventListener('click', handleClick);
btnNext.addEventListener('click', handleClick);
