    window.addEventListener("scroll", function () {
        const heroBg = document.querySelector(".hero-section::before");
    });

    function toggleServices(id) {

       
        document.querySelectorAll('.services-box').forEach(box => {
            box.style.display = "none";
        });

    document.getElementById(id).style.display = "block";
    }

