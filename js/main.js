$(document).ready(function() {
    $('#titleWeb').text(CONFIG.titleWeb)
    //$('body').css('background-image', 'url(./images/' + CONFIG.background + ')')

    for (let i = 1; i <= 6; i++)
        $('#min' + i).css('background-image', 'url(./images/' + CONFIG['min' + i] + ')')

    for (let i = 1; i <= 6; i++)
        $('#max' + i).css('background-image', 'url(./images/' + CONFIG['max' + i] + ')')
})

  // Получаем элементы кнопки и плеера
        const playButton = document.getElementById('playButton');
        const audioPlayer = document.getElementById('player');
    
let isPlaying = false;

// Функция для переключения состояния воспроизведения
        playButton.addEventListener('click', function () {
            if (isPlaying) {
                // Если играет, то останавливаем
                audioPlayer.pause();
                playButton.textContent = 'Включить трек';
            } else {
                // Если остановлено, то включаем
                audioPlayer.play();
                playButton.textContent = 'Остановить трек';
            }
            // Меняем состояние
            isPlaying = !isPlaying;
        });