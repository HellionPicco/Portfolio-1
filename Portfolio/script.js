document.addEventListener('DOMContentLoaded', () => {
    let menu = document.querySelector("#menu-icon");
    let navlist = document.querySelector(".navlist");

    menu.onclick = () => {
        menu.classList.toggle("bx-x");
        navlist.classList.toggle("open");
    };
});

//email POPUP- INTENTO DE MODAL
document.addEventListener('DOMContentLoaded', () => {
    let emailIcon = document.querySelector(".email-icon");

    emailIcon.addEventListener('click', () => {
        let email = emailIcon.dataset.email;
        let emailPopup = window.open('', 'emailPopup', 'width=300,height=150,top=100,left=100,resizable=yes,scrollbars=yes,status=yes');
        emailPopup.document.body.innerHTML = `<div style="background-color: #f2f2f2; padding: 20px; text-align: center;">${email}</div>`;
    });
});




// script primer modal//
document.addEventListener("DOMContentLoaded", function() {
    var modal = document.getElementById("modal");
    var openModal = document.getElementById("open-modal");
    var closeModal = document.getElementById("close-modal");

    
    openModal.onclick = function(event) {
        event.preventDefault(); 
        modal.style.display = "block";
    }

    
    closeModal.onclick = function() {
        modal.style.display = "none";
    }

    
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});


 //modal 2


 document.addEventListener("DOMContentLoaded", function() {
    // Obtener el modal por su ID
    var modal2 = document.getElementById("modal2");

    // Obtener el botón de abrir el modal
    var btn = document.getElementById("contactBtn");

    // Obtener el botón de cerrar (el primer elemento con la clase 'modal2-close')
    var closeBtn = document.getElementsByClassName("modal2-close")[0];

    // Función para abrir el modal cuando se hace clic en el botón
    btn.onclick = function(event) {
        event.preventDefault(); // Prevenir el comportamiento predeterminado del enlace
        modal2.style.display = "flex"; // Mostrar el modal como flexbox
        centerModal(); // Centrar el modal al abrirlo
    }

    // Función para cerrar el modal cuando se hace clic en el botón de cerrar (x)
    closeBtn.onclick = function() {
        modal2.style.display = "none"; // Ocultar el modal
    }

    // Función para cerrar el modal cuando se hace clic fuera del contenido del modal
    window.onclick = function(event) {
        if (event.target == modal2) {
            modal2.style.display = "none"; // Ocultar el modal
        }
    }

    // Centrar el modal verticalmente
    function centerModal() {
        var modalHeight = modal2.offsetHeight;
        var windowHeight = window.innerHeight;
        modal2.style.top = (windowHeight - modalHeight) / 2 + "px";
    }

    // Ocultar el modal al cargar la página
    modal2.style.display = "none";
});



//MODAL 3

document.addEventListener("DOMContentLoaded", function() {
    
    var modal3 = document.getElementById("modal3");

    
    var aboutMeBtn = document.querySelector(".navlist li a");

    
    var closeBtn = document.getElementsByClassName("modal3-close")[0];

    // Función para abrir el modal
    aboutMeBtn.onclick = function(event) {
        event.preventDefault(); 
        modal3.style.display = "flex"; 
    }

    // Función para cerrar el modal
    closeBtn.onclick = function() {
        modal3.style.display = "none"; 
    }

    
    window.onclick = function(event) {
        if (event.target == modal3) {
            modal3.style.display = "none"; 
        }
    }

    // ocultar modal al iniciar
    modal3.style.display = "none";
});


// MODAL 4 Y ULTIMO!!!!
document.addEventListener("DOMContentLoaded", function() {
    var modal4 = document.getElementById("modal4");
    var myworkBtn = document.getElementById("my-work-link");
    var closeBtn = document.getElementsByClassName("modal4-close")[0];

    if (!modal4 || !myworkBtn || !closeBtn) {
        console.error("No se encontraron los elementos del modal o del enlace.");
        return;
    }

    myworkBtn.addEventListener("click", function(event) {
        event.preventDefault();
        modal4.style.display = "flex";
    });

    closeBtn.addEventListener("click", function() {
        modal4.style.display = "none";
    });

    window.addEventListener("click", function(event) {
        if (event.target == modal4) {
            modal4.style.display = "none";
        }
    });

    modal4.style.display = "none";
});
