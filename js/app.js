/*
5- Realizar una web con un cronómetro, que tenga las opciones de iniciar, reset (volver el cronómetro a 0) y pausar.
*/

document.addEventListener('DOMContentLoaded', function () {
    let segundos = 0, minutos = 0, horas = 0;
    let intervalo = null;
    let ejecutandose = false;

    const marcador = document.getElementById('marcador');
    const start = document.getElementById('start');
    const pause = document.getElementById('pause');
    const reset = document.getElementById('reset');

    function actualizarMarcador() {
        const formatTime = (unit) => (unit < 10 ? `0${unit}` : unit);
        marcador.textContent = `${formatTime(horas)}:${formatTime(minutos)}:${formatTime(segundos)}`;
    }
    function empezarCrono() {
        if (!ejecutandose) {
            intervalo = setInterval(() => {
                segundos++;
                if (segundos === 60) {
                    segundos = 0;
                    minutos++;
                    if (minutos === 60) {
                        minutos = 0;
                        horas++;
                    }
                }
                actualizarMarcador();
            }, 1000);
            ejecutandose = true;
        }
    }
    function pausarMarcador() {
        if (ejecutandose) {
            clearInterval(intervalo);
            ejecutandose = false;
        }
    }
    function reiniciarMarcador() {
        clearInterval(intervalo);
        ejecutandose = false;
        segundos = 0;
        minutos = 0;
        horas = 0;
        actualizarMarcador();
    }
    start.addEventListener('click', empezarCrono);
    pause.addEventListener('click', pausarMarcador);
    reset.addEventListener('click', reiniciarMarcador);
    actualizarMarcador();
});
