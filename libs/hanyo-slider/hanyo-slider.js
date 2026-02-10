function hanyoSlider(params) {
    const slider = document.querySelector(params.sliderSelector);
    const slides = slider.querySelectorAll(params.slidesSelector);
    const prevBtn = document.querySelector(params.prevBtnSelector);
    const nextBtn = document.querySelector(params.nextBtnSelector);

    if (!slider || !prevBtn || !nextBtn) return;

    // 1. Ограничиваем ширину и скрываем лишнее именно у слайдера
    slider.style.width = '100%';
    slider.style.overflow = 'hidden'; 
    slider.style.display = 'flex';
    slider.style.position = 'relative';

    // 2. Создаем внутреннюю "ленту", которую будем двигать
    // Чтобы не менять HTML, мы обернем все слайды в новый div программно
    const wrapper = document.createElement('div');
    wrapper.style.display = 'flex';
    wrapper.style.transition = 'transform 0.5s ease-in-out';
    wrapper.style.width = '100%';
    
    // Перемещаем слайды в обертку
    slides.forEach(slide => {
        slide.style.flex = '0 0 100%'; // Каждый слайд ровно 100% от родителя
        slide.style.boxSizing = 'border-box';
        wrapper.appendChild(slide);
    });
    
    slider.appendChild(wrapper);

    let currentIndex = 0;

    function updateSlider() {
        // Сдвигаем обертку на 100% за каждый индекс
        wrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    nextBtn.addEventListener('click', (e) => {
        e.preventDefault(); // На всякий случай, если кнопка в форме
        currentIndex = (currentIndex < slides.length - 1) ? currentIndex + 1 : 0;
        updateSlider();
    });

    prevBtn.addEventListener('click', (e) => {
        e.preventDefault();
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : slides.length - 1;
        updateSlider();
    });

    if (params.autoplay) {
        setInterval(() => nextBtn.click(), params.interval)
    }
}