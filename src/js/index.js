document.addEventListener('DOMContentLoaded', function () {
    // Отримання всіх необхідних елементів
    const inputField = document.querySelector('.money-input-contenteditable');
    const chipButtons = document.querySelectorAll('.chip-button');

    // Функція для обробки кліків по кнопках з чіпами
    function handleChipClick(event) {
        const chipValue = parseInt(event.target.innerText.replace(/\D/g, ''));
        let currentValue = parseInt(inputField.innerText);

        // Перевірка на максимальне значення
        if (currentValue + chipValue > 29999) {
            currentValue = 29999;
        } else {
            currentValue += chipValue;
        }

        // Оновлення значення поля вводу
        inputField.innerText = currentValue;
    }

    // Додавання обробника подій для кожної кнопки з чіпом
    chipButtons.forEach(function (button) {
        button.addEventListener('click', handleChipClick);
    });

    // Обмеження вводу на значення від 10 до 29999
    inputField.addEventListener('input', function () {
        let currentValue = parseInt(inputField.innerText);

        if (isNaN(currentValue) || currentValue < 10) {
            currentValue = 10;
        } else if (currentValue > 29999) {
            currentValue = 29999;
        }

        inputField.innerText = currentValue;
    });
});