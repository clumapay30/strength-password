const password = document.querySelector('#password');
const bg = document.querySelector('#background');

password.addEventListener('input', (e) => {
    const input = e.target.value;
    const str = input.length;  
    const bgValue = 20 - str * 2;
    
    bg.style.filter = `blur(${bgValue}px)`
})