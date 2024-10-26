// Zona de reconfigurar los puntos para el redimensionado del navegador
/*
document.addEventListener("DOMContentLoaded", function() {
    // Obtener la imagen del mapa
    const mapImage = document.getElementById("mapImage");

    // Lista de puntos y sus posiciones iniciales en porcentaje
    const points = [
       /* { id: "pointNY", top: 35, left: 60 },
        { id: "pointLA", top: 45, left: 20 },
        { id: "pointChicago", top: 40, left: 50 }
        // Puedes agregar más puntos aquí
    ];

    // Función para reposicionar un punto específico
    function positionPoint(pointElement, initialTopPercentage, initialLeftPercentage) {
        const mapWidth = mapImage.clientWidth;
        const mapHeight = mapImage.clientHeight;

        // Calcular las posiciones en píxeles basadas en los porcentajes y el tamaño del mapa
        const topPosition = (initialTopPercentage / 100) * mapHeight;
        const leftPosition = (initialLeftPercentage / 100) * mapWidth;

        // Aplicar las posiciones al punto
        pointElement.style.top = `${topPosition}px`;
        pointElement.style.left = `${leftPosition}px`;
    }

    // Función para reposicionar todos los puntos
    function positionAllPoints() {
        points.forEach(point => {
            const pointElement = document.getElementById(point.id);
            if (pointElement) {
                positionPoint(pointElement, point.top, point.left);
            }
        });
    }

    // Reposicionar todos los puntos cuando la ventana cambia de tamaño
    window.addEventListener("resize", positionAllPoints);

    // Reposicionar todos los puntos inicialmente
    positionAllPoints();
});
*/