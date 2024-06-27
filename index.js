const navButton = document.getElementById('nav-button');
const navList = document.getElementById('navbar').querySelector('ul'); // Select the ul within navbar

navButton.addEventListener('click', () => {
    navList.classList.toggle('hidden'); // Toggle 'hidden' class on the ul
});


const login = document.getElementsByTagName("li")[5]
const box = document.getElementsByClassName("lb")[0]



login.addEventListener('click', () => {
     box.classList.toggle("hidden");
});



