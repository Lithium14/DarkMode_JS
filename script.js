let bouton = document.querySelector('#mode');
let span   = document.querySelector('span');
let body   = document.querySelector('body');



  bouton.addEventListener('click', () => {
  if(body.classList.contains('dark')){
    body.className =  '';
    span.textContent = 'Thème sombre';
    localStorage.setItem('theme','clair')
  } else {
    modeSombre();
  }
})

function modeSombre() {
  body.className = 'dark';
  span.textContent = 'Thème clair';
  localStorage.setItem('theme','sombre');
}

if(localStorage.getItem('theme')) {
  if(localStorage.getItem('theme') === 'sombre') {
    modeSombre();
  }
}
