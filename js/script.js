function changeMood() {
    document.body.style.backgroundColor === '' 
    ? document.body.style.backgroundColor = 'rgb(20, 20, 20)'
    : document.body.style.backgroundColor = '';
    
    document.getElementById('mood-icon').style.color === '' 
    ? document.getElementById('mood-icon').style.color = 'white' 
    : document.getElementById('mood-icon').style.color = '';

    document.getElementById('name').style.color === ''
    ? document.getElementById('name').style.color = 'rgb(200, 200, 200)' 
    : document.getElementById('name').style.color = '';

    document.getElementById('footer').style.color === '' 
    ? document.getElementById('footer').style.color = 'white' 
    : document.getElementById('footer').style.color = '';
}