document.addEventListener("DOMContentLoaded", function() {
    const photos = document.querySelectorAll('.photo');
    let availableIndices = Array.from(photos.keys()); // Создаём массив индексов [0, 1, 2, ...]


       function resetIndices() {
        availableIndices = Array.from(photos.keys());
    }

    function getRandomIndex() {
        if (availableIndices.length === 0) {
            // В случае если все фотографии были показаны, восстанавливаем массив
            resetIndices();
            console.log('Заново');
        }

        // Выбираем случайный индекс из оставшихся доступных
        const randomIndex = Math.floor(Math.random() * availableIndices.length);
        const chosenIndex = availableIndices.splice(randomIndex, 1)[0]; // Удаляем индекс из доступных, чтобы не использовать его повторно
        console.log(chosenIndex)

        return chosenIndex;
    }

    function animatePhoto() {
        if (photos.length === 0) return;

        const currentIndex = getRandomIndex();
        const currentPhoto = photos[currentIndex];
        console.log("Displaying photo index: ", currentIndex);
        // Показываем фото (въезд)
        currentPhoto.classList.add('enter');

        // После въезда ждем 2 секунды, затем убираем фото
        setTimeout(() => {
            currentPhoto.classList.remove('enter');
            currentPhoto.classList.add('exit');

            // Ждем завершения анимации ухода
            setTimeout(() => {
                // Удаляем текущее фото из отображения
                currentPhoto.style.display = 'none';

                // Восстанавливаем стиль перед следующим показом
                currentPhoto.style.display = 'block';

                // Запускаем анимацию
                animatePhoto();
            }, 2000); // Время анимации ухода (должно совпадать с transition)
        }, 2000); // Время отображения фото
    }

    // Запускаем анимацию
    animatePhoto();
});
