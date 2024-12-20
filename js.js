document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.getElementById('toggleButton');
  const photoBlock = document.getElementById('photoBlock');
  const arrowSymbol = document.querySelector('.arrow-symbol');

  toggleButton.addEventListener('click', () => {
    if (photoBlock.style.display === 'none' || !photoBlock.style.display) {
      photoBlock.style.display = 'block';
      toggleButton.innerHTML = 'Убрать котика <span class="arrow-symbol">&#9650;</span>'; // Текст меняется на "Скрыть фото котика" с стрелочкой вверх
    } else {
      photoBlock.style.display = 'none';
      toggleButton.innerHTML = 'Фото котика <span class="arrow-symbol">&#9660;</span>'; // Текст возвращается на "Фото котика" с стрелочкой вниз
    }
  });
});
