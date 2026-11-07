    // Mobil menyu ochish / yopish
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');

    menuToggle.addEventListener('click', function () {
      navLinks.classList.toggle('active');
      // Ikonkani o'zgartirish
      const icon = menuToggle.querySelector('i');
      if (navLinks.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
      } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
      }
    });

    // Havolaga bosilganda mobil menyuni yopish
    document.querySelectorAll('#navLinks a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        const icon = menuToggle.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
      });
    });

    // Smooth scroll (oddiy)
    document.querySelectorAll('a[href="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
      });
    });