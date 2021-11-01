'use strict';

class Header {
    showModal(modalName) {
        const modal = document.querySelector(`#modal-${modalName}`);
        modal.classList.remove('es-hide--animation')
        modal.classList.add('es-show--animation')
    }
    render() {
        const headerHtml = () => {
            return `
            <header class="es-header">
                <div class="es-header__top">
                    <div class="es-container">
                        <div class="es-header__top-content">
                            <a class="es-logo" href="index.html">
                                <img class="es-logo-image" src="images/logo.svg" alt="Logo" width="160" height="27.57">
                            </a>
                            <nav class="es-header__nav">
                                <ul class="es-header__nav-list">
                                    <li class="es-header__nav-item">
                                        <a class="es-link" href="catalog.html">Каталог</a>
                                    </li>
                                    <li class="es-header__nav-item">
                                        <a class="es-link" href="about-us.html">О нас</a>
                                    </li>
                                    <li class="es-header__nav-item">
                                        <a class="es-link" href="shipping-and-payment.html">Доставка и оплата</a>
                                    </li>
                                    <li class="es-header__nav-item">
                                        <a class="es-link" href="offers.html">Акции</a>
                                    </li>
                                    <li class="es-header__nav-item">
                                        <a class="es-link" href="reviews.html">Отзывы</a>
                                    </li>
                                    <li class="es-header__nav-item">
                                        <a class="es-link" href="contacts.html">Контакты</a>
                                    </li>
                                </ul>
                            </nav>
                            <a class="es-header__phone" href="tel:+78918774-74">+7 (891) 877-42-74</a>
                        </div>
                    </div>
                </div>

                <div class="es-header__bottom">
                    <div class="es-container">
                        <div class="es-header__bottom-content">
                            <div class="es-header__catalog">
                                <button class="es-btn-orange es-btn es-btn--size-small es-header__btn-catalog">
                                    <img class="es-btn-orange__image" src="images/catalog-menu.svg" alt="">
                                    <span class="es-btn-orange__text">Каталог</span>
                                    <div class="es-btn-orange__bg-1"></div>
                                    <div class="es-btn-orange__bg-2"></div>
                                </button>
                                <div class="es-header__catalog-bg1 es-opacity-hide es-opacity-hide--hover">
                                    <div class="es-header__catalog-bg2" data-simplebar>
                                        <ul class="es-drop-down">
                                            <li class="es-drop-down__item">
                                                <a class="es-text es-drop-down__link" href="#">Кровати</a>
                                            </li>
                                            <li class="es-drop-down__item">
                                                <a class="es-text es-drop-down__link" href="#">Матрасы</a>
                                            </li>
                                            <li class="es-drop-down__item">
                                                <a class="es-text es-drop-down__link" href="#">Диваны</a>
                                            </li>
                                            <li class="es-drop-down__item">
                                                <a class="es-text es-drop-down__link" href="#">Шкафы</a>
                                            </li>
                                            <li class="es-drop-down__item">
                                                <a class="es-text es-drop-down__link" href="#">Комоды</a>
                                            </li>
                                            <li class="es-drop-down__item">
                                                <a class="es-text es-drop-down__link" href="#">Тумбочки</a>
                                            </li>
                                            <li class="es-drop-down__item">
                                                <a class="es-text es-drop-down__link" href="#">Зеркала</a>
                                            </li>
                                            <li class="es-drop-down__item">
                                                <a class="es-text es-drop-down__link" href="#">Столы</a>
                                            </li>
                                            <li class="es-drop-down__item">
                                                <a class="es-text es-drop-down__link" href="#">Стулья</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                                
                            <div class="es-input-search">
                                <input class="es-input-search__input" type="search" placeholder="Поиск">
                                <button class="es-input-search__btn">
                                    <svg width="20" height="20" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path  class="es-input-search__btn-icon" d="M34.4678 31.8795L25.8397 23.2158C28.0582 20.6697 29.2737 17.4662 29.2737 14.1312C29.2737 6.3394 22.7075 0 14.6368 0C6.56621 0 0 6.3394 0 14.1312C0 21.9231 6.56621 28.2625 14.6368 28.2625C17.6667 28.2625 20.5539 27.3802 23.0225 25.7053L31.7161 34.4348C32.0795 34.7991 32.5682 35 33.092 35C33.5877 35 34.058 34.8175 34.415 34.4857C35.1736 33.781 35.1978 32.6124 34.4678 31.8795ZM14.6368 3.68641C20.6023 3.68641 25.4554 8.37184 25.4554 14.1312C25.4554 19.8906 20.6023 24.5761 14.6368 24.5761C8.67137 24.5761 3.81831 19.8906 3.81831 14.1312C3.81831 8.37184 8.67137 3.68641 14.6368 3.68641Z"/>
                                    </svg>
                                </button>
                            </div>

                            <button class="es-btn-orange es-btn es-btn--size-normal es-margin-left" onclick="header.showModal('call')">
                                <span class="es-btn-orange__text">Заказать звонок</span>
                                <div class="es-btn-orange__bg-1"></div>
                                <div class="es-btn-orange__bg-2"></div>
                            </button>

                            <div class="es-header__user-buttons">
                                <a class="es-header__chosen-btn" href="#">
                                    <span class="es-header__quantity-products">3</span>
                                    <img src="images/chosen.svg" alt="Chosen">
                                </a>

                                <div class="es-header__account">
                                    <a class="es-header__account-btn" href="#"><img src="images/account.svg" alt="Account"></a>
                                    <div class="es-header__account-bg1 es-opacity-hide es-opacity-hide--hover">
                                        <div class="es-header__account-bg2">
                                            <ul class="es-drop-down">
                                                <li class="es-drop-down__item">
                                                    <button class="es-text es-drop-down__link es-center" onclick="header.showModal('register')">Зарегистрироваться</button>
                                                </li>
                                                <li class="es-drop-down__item ">
                                                    <button class="es-text es-drop-down__link es-center" onclick="header.showModal('login')">Войти</button>
                                                </li>
                                            </ul>
                                        </div>
                                    </div> 
                                </div>
                                
                                <div class="es-header__cart">
                                    <a class="es-header__cart-btn" href="#">
                                        <span class="es-header__quantity-products">3</span>
                                        <img src="images/cart.svg" alt="Cart">
                                    </a>
                                    <div class="es-header__cart-bg-1 es-opacity-hide es-opacity-hide--hover">
                                        <div class="es-header__cart-bg-2" >
                                            <div class="es-header__cart-products" data-simplebar>
                                                <ul class="es-header__cart-products-list">
                                                    <li class="es-header__cart-products-item">
                                                        <img class="es-header__cart-image" src="images/product-images/product9/image1.png"  alt="Chair">
                                                        <div class="es-header__cart-info">
                                                            <a class="es-header__cart-title" href="">Кресло Hygge, темно-бирюзовыs df sdsdds</a>
                                                            <div class="es-card-prices">
                                                                <span class="es-card-prices__price">12 000 ₽</span>
                                                                <span class="es-card-prices__old-price"><span class="es-card-prices__old-price-line"></span> 16 000 ₽</span>
                                                                <span class="es-card-prices__discount">-50%</span>
                                                            </div>
                                                        </div>
                                                        <button class="es-btn-delete">
                                                            <svg class="es-btn-delete-icon" width="16" height="16" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M0.908239 1.8135C0.697254 1.60257 0.697254 1.25151 0.908239 1.0332C1.1266 0.822267 1.47038 0.822267 1.68874 1.0332L6.37223 5.72338L11.0636 1.0332C11.2746 0.822267 11.6257 0.822267 11.8362 1.0332C12.0546 1.25151 12.0546 1.60306 11.8362 1.8135L7.15273 6.49631L11.8362 11.1865C12.0546 11.3974 12.0546 11.7485 11.8362 11.9668C11.6252 12.1777 11.2741 12.1777 11.0636 11.9668L6.37223 7.27662L1.68874 11.9668C1.47038 12.1777 1.1266 12.1777 0.908239 11.9668C0.697254 11.7485 0.697254 11.3969 0.908239 11.1865L5.59173 6.49631L0.908239 1.8135Z"/>
                                                            </svg>
                                                        </button>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="es-header__cart-footer">
                                                <p class="es-amount">Итого: <span class="es-amount-sum">64 000 ₽</span></p>
                                                <a class="es-btn es-btn--size-all-width es-btn--style-inherit-orange es-margin-top  es-btn--link" href="/cart.html">Перейти в коризну</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>  
                </div>
            </header>
            `
        };
        document.body.insertAdjacentHTML("afterbegin", headerHtml());
    }
}

