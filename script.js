document.addEventListener("DOMContentLoaded", function () {
    const text = "Walter Daza";
    const animatedText = document.getElementById("animated-text");

    let index = 0;

    function type() {
        if (index < text.length) {
            animatedText.innerHTML += text.charAt(index);
            index++;
            setTimeout(type, 200); // Cambia el tiempo para ajustar la velocidad de la animación
        }
    }

    type();
});


// circulos 

document.addEventListener("DOMContentLoaded", function () {
    const circlesContainer = document.querySelector('.circles');
    const maxCircles = 12; // Máximo de círculos permitidos
    const icons = [`<i class='bx bxl-react'></i>`, `<i class='bx bxl-java'></i>`, `<i class='bx bxl-javascript' ></i>`, `<i class='bx bxl-html5' ></i>`, `<i class='bx bxl-css3' ></i>`, `<i class='bx bxl-bootstrap'></i>`, `<i class='bx bxl-spring-boot' ></i>`, `<i class='bx bxl-spring-boot' ></i>`];
    let iconIndex = 0;

    function createCircle() {
        // Verifica cuántos círculos hay actualmente
        const currentCircles = circlesContainer.querySelectorAll('.circle').length;
        
        // Solo crea un nuevo círculo si no se ha alcanzado el máximo
        if (currentCircles < maxCircles) {
            const circle = document.createElement('div');
            circle.className = 'circle';
            
            // Establece un tamaño aleatorio entre 50px y 150px
            const size = Math.random() * 100 + 50; // Tamaño aleatorio
            circle.style.width = `${size}px`;
            circle.style.height = `${size}px`;
            
            // Establece una posición aleatoria en el eje X
            circle.style.left = `${Math.random() * 150}vw`;
            
            // Establece una posición inicial en el eje Y desde la parte inferior de la pantalla
            circle.style.bottom = `-${size / 2}px`; // Comienza desde la mitad del círculo hacia abajo
            
            // Establece un tiempo de animación aleatorio entre 5 y 15 segundos
            circle.style.animationDuration = `${Math.random() * 10 + 5}s`;
            
            // Asigna el ícono o letra del array y actualiza el índice
            circle.innerHTML = icons[iconIndex];
            iconIndex = (iconIndex + 1) % icons.length; // Ciclo en el array de íconos
            
            // Añade el círculo al contenedor
            circlesContainer.appendChild(circle);

            // Elimina el círculo después de que la animación termine
            circle.addEventListener('animationend', () => {
                circle.remove();
            });

            // Añadir evento click para eliminar el círculo al hacer clic
            circle.addEventListener('click', () => {
                circle.remove(); // Elimina el círculo al hacer clic
            });
        }
    }

    // Crea un círculo cada 1.5 segundos
    setInterval(createCircle, 1500);
});
