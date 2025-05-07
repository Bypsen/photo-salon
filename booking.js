// booking.js - полная рабочая версия

// Глобальная переменная для хранения бронирований
let bookings = [];

document.addEventListener('DOMContentLoaded', function() {
    // Инициализация данных
    bookings = JSON.parse(localStorage.getItem('photoStudioBookings')) || [
        { id: 1, date: "2025-05-15", time: "10:00", client: "Иван Петров", service: "Свадебная съемка", email: "ivan@example.com", phone: "+79123456789" },
        { id: 2, date: "2025-05-15", time: "14:00", client: "Анна Смирнова", service: "Портретная съемка", email: "anna@example.com", phone: "+79234567890" },
        { id: 3, date: "2025-05-16", time: "11:00", client: "Сергей Иванов", service: "Семейная фотосессия", email: "sergey@example.com", phone: "+79345678901" }
    ];

    // Элементы DOM
    const bookingForm = document.getElementById('booking-form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const serviceSelect = document.getElementById('service');
    const dateInput = document.getElementById('date');
    const slotsContainer = document.getElementById('slots-container');
    const successModal = document.getElementById('success-modal');
    const closeModalBtn = document.querySelector('.close-modal');
    const closeSuccessBtn = document.getElementById('close-success-btn');
    const successMessage = document.getElementById('success-message');

    // Инициализация календаря
    // Инициализация календаря
    flatpickr(dateInput, {
        locale: "ru",
        minDate: "today",
        dateFormat: "Y-m-d",
        disable: [
            function(date) {
                return (date.getDay() === 0 || date.getDay() === 6);
            }
        ],
        onChange: function(selectedDates, dateStr) {
            updateTimeSlots(dateStr);
        }
    });

    // Функция обновления временных слотов (ПОСТРОЧНО)
    function updateTimeSlots(date) {
        slotsContainer.innerHTML = '';
        
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const selectedDate = new Date(date);
        
        if (selectedDate < today) {
            slotsContainer.innerHTML = '<p class="error">Пожалуйста, выберите дату в будущем</p>';
            return;
        }
        
        const dayOfWeek = selectedDate.getDay();
        const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;
        const endHour = isWeekend ? 18 : 20;
        
        for (let hour = 10; hour < endHour; hour++) {
            const time = `${hour}:00`;
            const timeSlot = document.createElement('div');
            timeSlot.className = 'time-slot';
            timeSlot.innerHTML = `
                <span class="time-text">${time}</span>
                ${bookings.some(b => b.date === date && b.time === time) ? 
                    '<span class="booked-icon">✗</span>' : ''
                }
            `;
            timeSlot.dataset.time = time;
            
            const isBooked = bookings.some(booking => 
                booking.date === date && booking.time === time
            );
            
            if (isBooked) {
                timeSlot.classList.add('booked');
                const tooltip = document.createElement('div');
                tooltip.className = 'booking-tooltip';
                tooltip.innerHTML = '<strong>Забронировано</strong>';
                timeSlot.appendChild(tooltip);
            } else {
                timeSlot.addEventListener('click', function() {
                    document.querySelectorAll('.time-slot').forEach(slot => {
                        slot.classList.remove('selected');
                    });
                    this.classList.add('selected');
                });
            }
            
            slotsContainer.appendChild(timeSlot);
        }
    }

    // ... (остальные функции без изменений) ...

    // Валидация формы
    function validateForm() {
        let isValid = true;
        
        // Валидация имени
        if (nameInput.value.trim() === '') {
            showError(nameInput, 'Введите ваше имя');
            isValid = false;
        }
        
        // Валидация email
        if (!validateEmail(emailInput.value.trim())) {
            showError(emailInput, 'Введите корректный email');
            isValid = false;
        }
        
        // Валидация телефона
        if (!validatePhone(phoneInput.value.trim())) {
            showError(phoneInput, 'Введите телефон в формате +7XXXXXXXXXX');
            isValid = false;
        }
        
        // Валидация услуги
        if (serviceSelect.value === '') {
            showError(serviceSelect, 'Выберите тип съемки');
            isValid = false;
        }
        
        // Валидация даты
        if (dateInput.value === '') {
            showError(dateInput, 'Выберите дату');
            isValid = false;
        }
        
        // Валидация времени
        if (!document.querySelector('.time-slot.selected')) {
            showError(slotsContainer, 'Выберите время');
            isValid = false;
        }
        
        return isValid;
    }

    // Обработчик отправки формы
    bookingForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        if (!validateForm()) return;
        
        const selectedTime = document.querySelector('.time-slot.selected').dataset.time;
        const newBooking = {
            id: Date.now(), // Уникальный ID
            date: dateInput.value,
            time: selectedTime,
            client: nameInput.value.trim(),
            service: serviceSelect.options[serviceSelect.selectedIndex].text,
            email: emailInput.value.trim(),
            phone: phoneInput.value.trim()
        };
        
        // Добавляем бронирование
        bookings.push(newBooking);
        saveBookings();
        
        // Показываем успешное сообщение
        showSuccessMessage(newBooking);
        
        // Обновляем слоты
        updateTimeSlots(dateInput.value);
        
        // Сбрасываем форму (кроме даты)
        bookingForm.reset();
        dateInput.value = newBooking.date;
    });

    // Сохранение бронирований в localStorage
    function saveBookings() {
        localStorage.setItem('photoStudioBookings', JSON.stringify(bookings));
    }

    // Показ сообщения об успехе
    function showSuccessMessage(booking) {
        successMessage.innerHTML = `
            <h3>Запись подтверждена!</h3>
            <p><strong>Дата:</strong> ${booking.date}</p>
            <p><strong>Время:</strong> ${booking.time}</p>
            <p><strong>Услуга:</strong> ${booking.service}</p>
            <p><strong>Имя:</strong> ${booking.client}</p>
            <p>Подтверждение отправлено на ${booking.email}</p>
        `;
        successModal.style.display = 'flex';
    }

    // Вспомогательные функции
    function validateEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    function validatePhone(phone) {
        return /^(\+7|8)[0-9]{10}$/.test(phone.replace(/[^0-9+]/g, ''));
    }

    function showError(field, message) {
        const errorElement = document.getElementById(`${field.id}-error`) || field;
        errorElement.textContent = message;
        errorElement.classList.add('error');
    }

    // Закрытие модального окна
    closeModalBtn.addEventListener('click', function() {
        successModal.style.display = 'none';
    });
    
    closeSuccessBtn.addEventListener('click', function() {
        successModal.style.display = 'none';
    });
    
    successModal.addEventListener('click', function(e) {
        if (e.target === successModal) {
            successModal.style.display = 'none';
        }
    });

    // Первоначальная загрузка
    if (dateInput.value) {
        updateTimeSlots(dateInput.value);
    }
});