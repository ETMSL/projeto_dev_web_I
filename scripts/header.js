const btnMobile = document.querySelector('.btn-menu-mobile');
        const navList = document.querySelector('.nav-list');

        btnMobile.addEventListener('click', () => {
            navList.classList.toggle('active');
        });