// Gallery JavaScript for the photo studio website

document.addEventListener('DOMContentLoaded', function() {
    // Sample gallery data (in a real app, this would come from an API)
    const galleryData = [
        { id: 1, src: 'gallery1.jpg', title: 'Портретная съемка', description: 'Индивидуальный портрет в студии', tags: ['portrait', 'studio'], category: 'portrait' },
        { id: 2, src: 'gallery2.jpg', title: 'Семейная фотосессия', description: 'Семья на природе', tags: ['family', 'outdoor'], category: 'family' },
        { id: 3, src: 'gallery3.jpg', title: 'Свадебная съемка', description: 'Момент первого танца', tags: ['wedding', 'dance'], category: 'wedding' },
        { id: 4, src: 'gallery4.jpg', title: 'Ретро стиль', description: 'Черно-белая съемка в винтажном стиле', tags: ['retro', 'bw'], category: 'retro' },
        { id: 5, src: 'gallery5.jpg', title: 'Минимализм', description: 'Простота и элегантность', tags: ['minimalism', 'studio'], category: 'minimalism' },
        { id: 6, src: 'gallery6.jpg', title: 'Портрет на улице', description: 'Естественный свет и городской фон', tags: ['portrait', 'outdoor'], category: 'portrait' },
        { id: 7, src: 'gallery7.jpg', title: 'Семья с детьми', description: 'Веселые моменты с детьми', tags: ['family', 'kids'], category: 'family' },
        { id: 8, src: 'gallery8.jpg', title: 'Свадебные кольца', description: 'Детали свадебного дня', tags: ['wedding', 'details'], category: 'wedding' },
        { id: 9, src: 'gallery9.jpg', title: 'Винтажный портрет', description: 'Стилизация под 60-е годы', tags: ['retro', 'portrait'], category: 'retro' },
        { id: 10, src: 'gallery10.jpg', title: 'Минималистичный портрет', description: 'Акцент на эмоции', tags: ['minimalism', 'portrait'], category: 'minimalism' },
        { id: 11, src: 'gallery11.jpg', title: 'Деловой портрет', description: 'Профессиональный имидж для бизнеса', tags: ['portrait', 'professional'], category: 'portrait' },
        { id: 12, src: 'gallery12.jpg', title: 'Креативный портрет', description: 'Эксперименты с цветом и светом', tags: ['portrait', 'creative'], category: 'portrait' },
        { id: 13, src: 'gallery13.jpg', title: 'Портрет в высоком ключе', description: 'Светлая и воздушная атмосфера', tags: ['portrait', 'high-key'], category: 'portrait' },
        { id: 14, src: 'gallery14.jpg', title: 'Портрет в низком ключе', description: 'Драматичное освещение', tags: ['portrait', 'low-key'], category: 'portrait' },
        { id: 15, src: 'gallery15.jpg', title: 'Портрет с отражателем', description: 'Мягкий естественный свет', tags: ['portrait', 'reflector'], category: 'portrait' },
    
        // Семейные фотосессии
        { id: 16, src: 'gallery16.jpg', title: 'Семья в студии', description: 'Классическая семейная фотография', tags: ['family', 'studio'], category: 'family' },
        { id: 17, src: 'gallery17.jpg', title: 'Поколения', description: 'Бабушки, дедушки и внуки', tags: ['family', 'generations'], category: 'family' },
        { id: 18, src: 'gallery18.jpg', title: 'Семейный пикник', description: 'Неформальные моменты на природе', tags: ['family', 'picnic'], category: 'family' },
        { id: 19, src: 'gallery19.jpg', title: 'Новорожденный в семье', description: 'Первые дни с малышом', tags: ['family', 'newborn'], category: 'family' },
        { id: 20, src: 'gallery20.jpg', title: 'Семейные объятия', description: 'Теплые эмоции и близость', tags: ['family', 'hugs'], category: 'family' },
        // Свадебная съемка
        { id: 21, src: 'gallery21.jpg', title: 'Подготовка невесты', description: 'Трогательные моменты перед церемонией', tags: ['wedding', 'preparation'], category: 'wedding' },
        { id: 22, src: 'gallery22.jpg', title: 'Первый взгляд', description: 'Реакция жениха на невесту', tags: ['wedding', 'first-look'], category: 'wedding' },
        { id: 23, src: 'gallery23.jpg', title: 'Свадебный банкет', description: 'Праздничное застолье', tags: ['wedding', 'banquet'], category: 'wedding' },
        { id: 24, src: 'gallery24.jpg', title: 'Свадебный букет', description: 'Красивая деталь образа невесты', tags: ['wedding', 'bouquet'], category: 'wedding' },
        { id: 25, src: 'gallery25.jpg', title: 'Свадебный салют', description: 'Фейерверк в честь молодых', tags: ['wedding', 'fireworks'], category: 'wedding' },
    
        // Ретро и винтаж
        { id: 26, src: 'gallery26.jpg', title: 'Стиль 20-х годов', description: 'Эпоха Великого Гэтсби', tags: ['retro', '1920s'], category: 'retro' },
        { id: 27, src: 'gallery27.jpg', title: 'Пленочная фотография', description: 'Аутентичный пленочный эффект', tags: ['retro', 'film'], category: 'retro' },
        { id: 28, src: 'gallery28.jpg', title: 'Стиль 50-х', description: 'Рок-н-ролл и юбки-колокола', tags: ['retro', '1950s'], category: 'retro' },
        { id: 29, src: 'gallery29.jpg', title: 'Старый город', description: 'Винтажные улочки и архитектура', tags: ['retro', 'urban'], category: 'retro' },
        { id: 30, src: 'gallery30.jpg', title: 'Стиль пин-ап', description: 'Яркие образы в духе 40-50-х', tags: ['retro', 'pinup'], category: 'retro' },
    
        // Минимализм
        { id: 31, src: 'gallery31.jpg', title: 'Одинокое дерево', description: 'Простота и гармония с природой', tags: ['minimalism', 'nature'], category: 'minimalism' },
        { id: 32, src: 'gallery32.jpg', title: 'Геометрические формы', description: 'Четкие линии и структура', tags: ['minimalism', 'geometry'], category: 'minimalism' },
        { id: 33, src: 'gallery33.jpg', title: 'Монохром', description: 'Игра оттенков одного цвета', tags: ['minimalism', 'monochrome'], category: 'minimalism' },
        { id: 34, src: 'gallery34.jpg', title: 'Негативное пространство', description: 'Сила пустоты в композиции', tags: ['minimalism', 'negative-space'], category: 'minimalism' },
        { id: 35, src: 'gallery35.jpg', title: 'Абстракция', description: 'Форма и содержание', tags: ['minimalism', 'abstract'], category: 'minimalism' },
  



        { id: 36, src: 'gallery36.jpg', title: 'Семейный завтрак', description: 'Утренние моменты за столом', tags: ['family', 'morning', 'home'], category: 'family' },
        { id: 37, src: 'gallery37.jpg', title: 'Игра с детьми', description: 'Смех и веселье в движении', tags: ['family', 'kids', 'fun'], category: 'family' },
        { id: 38, src: 'gallery38.jpg', title: 'Семья на пляже', description: 'Отдых у воды с песочными замками', tags: ['family', 'beach', 'summer'], category: 'family' },
        { id: 39, src: 'gallery39.jpg', title: 'Танцующие молодые', description: 'Первый танец под романтичный свет', tags: ['wedding', 'dance', 'romance'], category: 'wedding' },
        { id: 40, src: 'gallery40.jpg', title: 'Кольца на книгах', description: 'Символизм и эстетика деталей', tags: ['wedding', 'rings', 'details'], category: 'wedding' },
        { id: 41, src: 'gallery41.jpg', title: 'Дождь в день свадьбы', description: 'Капли на фате и счастливые эмоции', tags: ['wedding', 'rain', 'emotions'], category: 'wedding' },
        { id: 42, src: 'gallery42.jpg', title: 'Чёрно-белые портреты', description: 'Тени и свет в винтажном стиле', tags: ['retro', 'bw', 'portrait'], category: 'retro' },
        { id: 43, src: 'gallery43.jpg', title: 'Старый автомобиль', description: 'Ретро-машина как символ эпохи', tags: ['retro', 'car', 'vintage'], category: 'retro' },
        { id: 44, src: 'gallery44.jpg', title: 'Кофейня 60-х', description: 'Атмосфера прошлого в интерьере', tags: ['retro', 'cafe', '1960s'], category: 'retro' },
        { id: 45, src: 'gallery45.jpg', title: 'Окно и свет', description: 'Игра солнечных лучей на стене', tags: ['minimalism', 'light', 'shadow'], category: 'minimalism' },
        { id: 46, src: 'gallery46.jpg', title: 'Один шарик', description: 'Яркий акцент в пустом пространстве', tags: ['minimalism', 'color', 'simplicity'], category: 'minimalism' },
        { id: 47, src: 'gallery47.jpg', title: 'Горизонт', description: 'Чистая линия между небом и землей', tags: ['minimalism', 'landscape', 'calm'], category: 'minimalism' },
        { id: 48, src: 'gallery48.jpg', title: 'Семейный велопоход', description: 'Приключения на двух колесах', tags: ['family', 'adventure', 'bike'], category: 'family' },
        { id: 49, src: 'gallery49.jpg', title: 'Чтение перед сном', description: 'Тихие вечера с книгой', tags: ['family', 'cozy', 'evening'], category: 'family' },
        { id: 50, src: 'gallery50.jpg', title: 'Семья и собака', description: 'Верный друг в кадре', tags: ['family', 'pet', 'joy'], category: 'family' },
        { id: 51, src: 'gallery51.jpg', title: 'Обручальные кольца в руках', description: 'Нежность и обещания', tags: ['wedding', 'rings', 'hands'], category: 'wedding' },
        { id: 52, src: 'gallery52.jpg', title: 'Невеста у окна', description: 'Естественный свет и мечты', tags: ['wedding', 'bride', 'window'], category: 'wedding' },
        { id: 53, src: 'gallery53.jpg', title: 'Шампанское в кадре', description: 'Брызги праздника', tags: ['wedding', 'champagne', 'fun'], category: 'wedding' },
        { id: 54, src: 'gallery54.jpg', title: 'Старый фотоаппарат', description: 'Классика в деталях', tags: ['retro', 'camera', 'nostalgia'], category: 'retro' },
        { id: 55, src: 'gallery55.jpg', title: 'Девушка с зонтом', description: 'Элегантность', tags: ['retro', 'umbrella', 'style'], category: 'retro' },
    ];

    const allGalleryData = [...galleryData];

    // DOM elements
    const galleryGrid = document.getElementById('gallery-grid');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const searchInput = document.getElementById('search-input');
    const searchBtn = document.getElementById('search-btn');
    const prevPageBtn = document.getElementById('prev-page');
    const nextPageBtn = document.getElementById('next-page');
    const pageNumbers = document.getElementById('page-numbers');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const imageTitle = document.getElementById('image-title');
    const imageDescription = document.getElementById('image-description');
    const closeBtn = document.querySelector('.close-btn');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');

    // Pagination variables
    let currentPage = 1;
    const itemsPerPage = 12;
    let filteredData = [...allGalleryData];
    let currentFilter = 'all';
    let currentSearchTerm = '';

    /**
     * Filter gallery by category
     * @param {string} category - The category to filter by
     */
    function filterGallery(category) {
        currentFilter = category;
        currentPage = 1;
        
        if (category === 'all') {
            filteredData = [...allGalleryData];
        } else {
            filteredData = allGalleryData.filter(item => item.category === category);
        }
        
        // Apply search filter if there's a search term
        if (currentSearchTerm) {
            filteredData = filteredData.filter(item => 
                item.title.toLowerCase().includes(currentSearchTerm) || 
                item.description.toLowerCase().includes(currentSearchTerm) ||
                item.tags.some(tag => tag.toLowerCase().includes(currentSearchTerm))
            );
        }
        
        renderGallery();
        renderPagination();
    }

    /**
     * Search gallery by term
     * @param {string} term - The search term
     */
    function searchGallery(term) {
        currentSearchTerm = term.toLowerCase();
        currentPage = 1;
        
        if (currentFilter === 'all') {
            filteredData = [...allGalleryData];
        } else {
            filteredData = allGalleryData.filter(item => item.category === currentFilter);
        }
        
        if (term) {
            filteredData = filteredData.filter(item => 
                item.title.toLowerCase().includes(currentSearchTerm) || 
                item.description.toLowerCase().includes(currentSearchTerm) ||
                item.tags.some(tag => tag.toLowerCase().includes(currentSearchTerm))
            );
        }
        
        renderGallery();
        renderPagination();
    }

    /**
     * Render gallery items based on current page and filters
     */
    function renderGallery() {
        galleryGrid.innerHTML = '';
        
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const itemsToDisplay = filteredData.slice(startIndex, endIndex);
        
        if (itemsToDisplay.length === 0) {
            galleryGrid.innerHTML = '<p class="no-results">Ничего не найдено. Попробуйте изменить критерии поиска.</p>';
            return;
        }
        
        itemsToDisplay.forEach((item, index) => {
            const galleryItem = document.createElement('div');
            galleryItem.className = 'gallery-item';
            galleryItem.dataset.id = item.id;
            galleryItem.style.animationDelay = `${index * 0.1}s`;
            
            galleryItem.innerHTML = `
                <img src="${item.src}" alt="${item.title}">
                <div class="image-overlay">
                    <h3>${item.title}</h3>
                    <div class="image-tags">
                        ${item.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                    </div>
                </div>
            `;
            
            galleryItem.addEventListener('click', () => openLightbox(item));
            galleryGrid.appendChild(galleryItem);
        });
    }

    /**
     * Render pagination controls
     */
    function renderPagination() {
        pageNumbers.innerHTML = '';
        const totalPages = Math.ceil(filteredData.length / itemsPerPage);
        
        prevPageBtn.disabled = currentPage === 1;
        nextPageBtn.disabled = currentPage === totalPages || totalPages === 0;
        
        if (totalPages === 0) return;
        
        // Show up to 5 page numbers around current page
        let startPage = Math.max(1, currentPage - 2);
        let endPage = Math.min(totalPages, currentPage + 2);
        
        // Adjust if we're at the start or end
        if (currentPage <= 3) {
            endPage = Math.min(5, totalPages);
        }
        if (currentPage >= totalPages - 2) {
            startPage = Math.max(1, totalPages - 4);
        }
        
        // Always show first page
        if (startPage > 1) {
            const firstPage = document.createElement('span');
            firstPage.className = 'page-number' + (1 === currentPage ? ' active' : '');
            firstPage.textContent = '1';
            firstPage.addEventListener('click', () => {
                currentPage = 1;
                renderGallery();
                renderPagination();
            });
            pageNumbers.appendChild(firstPage);
            
            if (startPage > 2) {
                const ellipsis = document.createElement('span');
                ellipsis.className = 'ellipsis';
                ellipsis.textContent = '...';
                pageNumbers.appendChild(ellipsis);
            }
        }
        
        // Show range around current page
        for (let i = startPage; i <= endPage; i++) {
            const pageNumber = document.createElement('span');
            pageNumber.className = 'page-number' + (i === currentPage ? ' active' : '');
            pageNumber.textContent = i;
            pageNumber.addEventListener('click', () => {
                currentPage = i;
                renderGallery();
                renderPagination();
            });
            pageNumbers.appendChild(pageNumber);
        }
        
        // Always show last page
        if (endPage < totalPages) {
            if (endPage < totalPages - 1) {
                const ellipsis = document.createElement('span');
                ellipsis.className = 'ellipsis';
                ellipsis.textContent = '...';
                pageNumbers.appendChild(ellipsis);
            }
            
            const lastPage = document.createElement('span');
            lastPage.className = 'page-number' + (totalPages === currentPage ? ' active' : '');
            lastPage.textContent = totalPages;
            lastPage.addEventListener('click', () => {
                currentPage = totalPages;
                renderGallery();
                renderPagination();
            });
            pageNumbers.appendChild(lastPage);
        }
    }

    /**
     * Open lightbox with selected image
     * @param {object} item - The gallery item to display
     */
    function openLightbox(item) {
        lightbox.style.display = 'block';
        document.body.style.overflow = 'hidden';
        
        lightboxImg.src = item.src;
        imageTitle.textContent = item.title;
        imageDescription.textContent = item.description;
        
        // Store current item index for navigation
        const currentIndex = filteredData.findIndex(i => i.id === item.id);
        lightbox.dataset.currentIndex = currentIndex;
    }

    /**
     * Close lightbox
     */
    function closeLightbox() {
        lightbox.style.display = 'none';
        document.body.style.overflow = 'auto';
    }

    /**
     * Navigate to previous image in lightbox
     */
    function prevImage() {
        let currentIndex = parseInt(lightbox.dataset.currentIndex);
        currentIndex = (currentIndex - 1 + filteredData.length) % filteredData.length;
        
        const item = filteredData[currentIndex];
        lightboxImg.src = item.src;
        imageTitle.textContent = item.title;
        imageDescription.textContent = item.description;
        lightbox.dataset.currentIndex = currentIndex;
    }

    /**
     * Navigate to next image in lightbox
     */
    function nextImage() {
        let currentIndex = parseInt(lightbox.dataset.currentIndex);
        currentIndex = (currentIndex + 1) % filteredData.length;
        
        const item = filteredData[currentIndex];
        lightboxImg.src = item.src;
        imageTitle.textContent = item.title;
        imageDescription.textContent = item.description;
        lightbox.dataset.currentIndex = currentIndex;
    }

    // Event listeners
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            filterGallery(this.dataset.filter);
        });
    });

    searchBtn.addEventListener('click', function(e) {
        e.preventDefault();
        searchGallery(searchInput.value);
    });

    searchInput.addEventListener('keyup', function(e) {
        if (e.key === 'Enter') {
            searchGallery(this.value);
        }
    });

    prevPageBtn.addEventListener('click', function() {
        if (currentPage > 1) {
            currentPage--;
            renderGallery();
            renderPagination();
        }
    });

    nextPageBtn.addEventListener('click', function() {
        const totalPages = Math.ceil(filteredData.length / itemsPerPage);
        if (currentPage < totalPages) {
            currentPage++;
            renderGallery();
            renderPagination();
        }
    });

    closeBtn.addEventListener('click', closeLightbox);
    prevBtn.addEventListener('click', prevImage);
    nextBtn.addEventListener('click', nextImage);

    // Close lightbox when clicking outside the image
    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });

    // Keyboard navigation in lightbox
    document.addEventListener('keydown', function(e) {
        if (lightbox.style.display === 'block') {
            if (e.key === 'Escape') {
                closeLightbox();
            } else if (e.key === 'ArrowLeft') {
                prevImage();
            } else if (e.key === 'ArrowRight') {
                nextImage();
            }
        }
    });

    // Initialize gallery
    filterGallery('all');
});