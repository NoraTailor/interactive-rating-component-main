    const btns = document.querySelectorAll('.number');
    const submitBtn = document.getElementById('submit-btn');
    const thankYouPage = document.getElementById('thank-you-page');
    const firstPage = document.getElementById('first-page');


[...btns].forEach(btn=> {
  
  
  const nextSibling = btn.nextElementSibling;
  const prevSibling = btn.previousElementSibling;
  
  
  
  btn.addEventListener('click', () => {
    btn.classList.add('selected')
    
    let valueBtn = btn.value;
    const h3 = document.createElement('h3');
    const div = document.getElementById('thankyou')
    h3.innerHTML = `You selected ${valueBtn} out of 5`;
    div.prepend(h3);
  
    submitBtn.addEventListener('click', () => {
      thankYouPage.style.display = 'block';
      firstPage.style.display = 'none';
      
    });
  });


  btn.addEventListener('mouseover', function mouseOver() {
    btn.style.backgroundColor = "#ff7b00e7";
    btn.style.color = 'white'
    if (!prevSibling ){
      nextSibling.style.backgroundColor = 'rgb(165, 163, 163)';
      nextSibling.style.color = 'white';
    } else if (!nextSibling){
      prevSibling.style.backgroundColor = 'rgb(165, 163, 163)';
      prevSibling.style.color = 'white'
    } else {
      prevSibling.style.backgroundColor = 'rgb(165, 163, 163)';
      prevSibling.style.color = 'white'
      nextSibling.style.backgroundColor = 'rgb(165, 163, 163)';
      nextSibling.style.color = 'white';
    }
  
  });

  btn.addEventListener('mouseleave', function mouseLeave () {
    btn.style.backgroundColor = '';
    btn.style.color = '';
    if(!nextSibling){
      prevSibling.style.backgroundColor = '';
      prevSibling.style.color = ''

    }else if(!nextSibling){
      prevSibling.style.backgroundColor = '';
      prevSibling.style.color = ''
    } else {
      nextSibling.style.backgroundColor = '';
      nextSibling.style.color = '';
      prevSibling.style.backgroundColor = '';
      prevSibling.style.color = ''
    }
  });
  
 
});




