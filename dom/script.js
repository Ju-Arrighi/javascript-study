window.alert('oiii')
const href = window.location.href;
console.log(href)

const h1 = document.querySelector('h1').innerText;
console.log(h1);
const h12 = document.querySelector('h1');
h12.addEventListener('click', callback);
function callback() {
  console.log('This is', h12.innerText)
}
