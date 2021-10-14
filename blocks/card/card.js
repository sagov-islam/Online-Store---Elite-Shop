export {Card};

function Card(container, category, num) {
    let i = 0
    const cardSliderId = []
    function cardSlider() {
        cardSliderId.forEach(item => {
            let numOfPiexels = 0
            const cardSlider = document.querySelector(`.${item}`)
            const rightBtn = cardSlider.querySelector('.es-card__slider-btn-right');
            const leftBtn = cardSlider.querySelector('.es-card__slider-btn-left');
            rightBtn.addEventListener('click', () => {
                const btnContainer = cardSlider.querySelector('.es-card__slider-list');
                numOfPiexels == 66 ? numOfPiexels = 0 : numOfPiexels += 33;
                btnContainer.style.transform = `translate(-${numOfPiexels}%, 0px)`
            });
            leftBtn.addEventListener('click', () => {
                const btnContainer = cardSlider.querySelector('.es-card__slider-list');
                numOfPiexels === 0 ? numOfPiexels = 66 : numOfPiexels -= 33;
                btnContainer.style.transform = `translate(-${numOfPiexels}%, 0px)`
            });
        });
    };


    // -------- Класс для карточки товара -------- \\
    class Card {
        constructor (container, category, numOfCards) {
            this.container = container
            this.category = category
            this.numOfCards = numOfCards
        }

        render() {
            const container = document.querySelector(`.${this.container}`);
            const cardHtml = (title, description, inStock, price, discountHtml, id, images) => {
                return`
                <li class="es-card" id="${id}">
                    <div class="es-card__slider slider${i}">
                        <div class="es-card__slider-buttons">
                            <button class="es-btn-slider es-card__slider-btn-left"><img class="es-rotate180" src="images/arrow.png" alt="Налево"></button>
                            <button class="es-btn-slider es-card__slider-btn-right"><img src="images/arrow.png" alt="Направо"></button>
                        </div>
                        <div class="es-card__slider-container">
                            <div class="es-card__slider-list">
                                <div class="es-card__slider-slide">
                                    <img src="${images[0]}" alt="${title}">
                                </div>
                                <div class="es-card__slider-slide">
                                    <img src="${images[1]}" alt="${title}">
                                </div>
                                <div class="es-card__slider-slide">
                                    <img src="${images[2]}" alt="${title}">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="es-card__info">
                        <div>
                            <h3 class="es-title--h3 es-card__title"><a href="#">${title}</a></h3>
                            <p class="es-card__description">${description}</p>
                            <p class="es-card__in-stock">В наличи <span class="es-card__in-stock-num">${inStock}</span></p>
                        </div>
                        <div>
                            <div class="es-card-prices">
                                <span class="es-card-prices__price">${price} ₽</span>
                                ${discountHtml}
                            </div>
                            <div class="es-card__buttons">
                                <button class="es-btn-orange es-btn es-btn--size-all-width ">
                                    <span class="es-btn-orange__text">Добавить в корзину</span>
                                    <div class="es-btn-orange__bg-1"></div>
                                    <div class="es-btn-orange__bg-2"></div>
                                </button>
                                <button class="es-btn-chosen es-margin-left">
                                    <svg width="28" height="25" viewBox="0 0 28 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M13.5612 4.27079L13.6053 4.35296L13.6493 4.27079C13.8371 3.92062 14.0607 3.54864 14.3234 3.17781C15.3365 1.74802 17.1384 0.05 19.9828 0.05C22.0071 0.05 23.8552 0.882527 25.1878 2.39455C26.4594 3.83745 27.1606 5.77099 27.1606 7.83983C27.1606 10.0891 26.2831 12.1839 24.3904 14.435C22.6974 16.4485 20.2608 18.5251 17.434 20.9339L17.4242 20.9422C16.3742 21.8371 15.2882 22.7626 14.1322 23.774L14.1322 23.774L14.0974 23.8045C13.9565 23.9278 13.7809 23.9894 13.6053 23.9894C13.4296 23.9894 13.254 23.9278 13.1131 23.8045L13.0783 23.774L13.0783 23.774C11.9187 22.7594 10.8296 21.8313 9.77663 20.934C6.9497 18.5251 4.51307 16.4485 2.82007 14.435C0.927373 12.184 0.0498779 10.0891 0.0498779 7.83983C0.0498779 5.771 0.75115 3.83745 2.02266 2.3946C3.35527 0.882579 5.20344 0.05 7.22773 0.05C10.0721 0.05 11.874 1.74802 12.8871 3.17781C13.1499 3.54864 13.3734 3.92061 13.5612 4.27079ZM13.5724 22.2221L13.6053 22.2507L13.6381 22.2221C14.6229 21.366 15.5569 20.5701 16.4647 19.7966L16.4674 19.7942C19.2304 17.4398 21.5289 15.4812 23.1362 13.5991C24.7448 11.7155 25.6662 9.90278 25.6662 7.83983C25.6662 6.13724 25.099 4.55394 24.0667 3.38263C23.022 2.19732 21.5713 1.54438 19.9828 1.54438C17.7737 1.54438 16.3475 2.9059 15.5428 4.0417C14.8208 5.06063 14.4443 6.08723 14.3157 6.48176L14.3157 6.48177C14.2155 6.78936 13.9287 6.99753 13.6053 6.99753C13.2818 6.99753 12.995 6.78936 12.8948 6.48177L12.8948 6.48176C12.7663 6.08723 12.3897 5.06063 11.6677 4.04176C10.863 2.9059 9.43683 1.54438 7.22773 1.54438C5.63923 1.54438 4.18852 2.19732 3.14379 3.38263L3.14379 3.38263C2.11154 4.55394 1.54426 6.13724 1.54426 7.83983C1.54426 9.90278 2.46565 11.7155 4.07429 13.5991C5.68155 15.4811 7.98001 17.4397 10.7428 19.794L10.7457 19.7965C11.6536 20.5701 12.5877 21.3661 13.5724 22.2221Z" stroke-width="0.1"/>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </li>
                `
            }
            fetch('/bd.json')
            .then(res => res.json())
            .then(data => {
                let сards = []
                data.cards.forEach(card => {
                    // Лидеры продаж
                    if (this.category === 'Лидеры') {
                        if (card.information.leader === true) {
                            сards.push(card)
                        }
                    }
                    else if (this.category === card.information.category) {
                        сards.push(card)
                    }
                    else if (this.category === 'Все категории') {
                        сards.push(card)
                    };

                    // Необходимое количество карточек
                    if (this.numOfCards !== 'Все товары') {
                        сards = сards.splice(0,this.numOfCards)
                    }
                });
                сards.forEach((card) => {
                    let discountHtml = ''
                    let price = card.price;
                    if (card.discount !== false) {
                        discountHtml = `
                        <span class="es-card-prices__old-price"><span class="es-card-prices__old-price-line"></span>${card.price} ₽</span>
                        <span class="es-card-prices__discount">-${card.discountPercent}%</span>
                        `
                        price = card.price * card.discount;
                    }
                    container.innerHTML += cardHtml(
                        card.name,
                        card.description,
                        card.information.inStock,
                        price,
                        discountHtml,
                        card.id,
                        card.images
                    );

                    cardSliderId.push(`slider${i}`) ;
                    i++
                    cardSlider();
                });
            });
        };
    };
    // -------- Класс для карточки товара -------- \\

    return new Card(container, category, num)
}