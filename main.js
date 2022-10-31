
const colorToggle = document.querySelectorAll('#link');

for(let i = 0; i < colorToggle.length; i++){
  colorToggle[i].addEventListener('mouseover', function handleMouseOver(){colorToggle[i].style.color = '#fff';});

colorToggle[i].addEventListener('mouseout', function handleMouseOver(){colorToggle[i].style.color = '#9198e5';});
}
