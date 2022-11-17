

const btns = document.querySelectorAll('.number');
const submitBtn = document.getElementById('submit-btn');
const thankYouPage = document.getElementById('thank-you-page');
const firstPage = document.getElementById('first-page');


//TODO if you click more than one number, its renders more than one h3 element.
//TODO should be removed the mouse eventListeners, but if I clicked on a number, its still getting back its original color

[...btns].forEach(btn=> {
  btn.addEventListener('click', () => {
    btn.style.backgroundColor = "#ff7b00e7";
    btn.style.color = 'white'
    const valueBtn = btn.value;
    const h3 = document.createElement('h3');
    const div = document.getElementById('thankyou')
    h3.innerHTML = `You selected ${valueBtn} out of 5`;
    div.prepend(h3)
    
  })

});


submitBtn.addEventListener('click', () => {
  thankYouPage.style.display = 'block';
  firstPage.style.display = 'none';
});



[...btns].forEach(btn=> {
  const nextSibling = btn.nextElementSibling;
  const prevSibling = btn.previousElementSibling;

  btn.addEventListener('mouseover', () => {
    btn.style.backgroundColor = "#ff7b00e7";
    btn.style.color = 'white'
   if (!prevSibling ){
      nextSibling.style.backgroundColor = 'rgb(165, 163, 163)';
      nextSibling.style.color = 'white';
   } else {
      prevSibling.style.backgroundColor = 'rgb(165, 163, 163)';
      prevSibling.style.color = 'white'
      nextSibling.style.backgroundColor = 'rgb(165, 163, 163)';
      nextSibling.style.color = 'white';
   }
    });


  btn.addEventListener('mouseleave', () => {
    
    prevSibling.style.backgroundColor = '#3b3e4b';
    prevSibling.style.color = 'rgb(165, 163, 163)'
    nextSibling.style.backgroundColor = '#3b3e4b';
    nextSibling.style.color = 'rgb(165, 163, 163)';
    btn.style.backgroundColor = '#3b3e4b';
    btn.style.color = 'rgb(165, 163, 163)'
  })
});

//