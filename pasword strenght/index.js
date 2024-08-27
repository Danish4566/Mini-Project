var pass = document.getElementById('password');
var msg = document.getElementById('msg');
var str = document.getElementById('str');

pass.addEventListener('input', () => {
  if (pass.value.length > 0) {
    msg.style.display = 'block';
  } else {
    msg.style.display = 'none';
  }
  if (pass.value.length < 4) {
    str.innerHTML = 'Weak'
    pass.style.borderColor = 'yellow';
    msg.style.color = 'yellow';
  }else if (pass.value.length >= 4 && pass.value.length < 8) {
    str.innerHTML = 'Medium';
    pass.style.borderColor = 'green';
    msg.style.color = 'green';
  }
  else if ( pass.value.length >= 8) {
    str.innerHTML = 'Strong';
    msg.style.color = 'red';
    pass.style.borderColor = 'red';


  }
});

