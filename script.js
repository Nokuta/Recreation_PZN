const toggle = document.getElementById('darkmode-toggle');
toggle.addEventListener('click', (e) => {
e.preventDefault();
document.body.classList.toggle('dark');

 // Ganti ikon dan teks tombol
if (document.body.classList.contains('dark')) {
        toggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
    } else {
        toggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
    }
});