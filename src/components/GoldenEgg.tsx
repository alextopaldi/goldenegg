import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faLocationDot, faPhone, faEnvelope, faX  } from "@fortawesome/free-solid-svg-icons"
import { faInstagram, faTwitter, faFacebook } from "@fortawesome/free-brands-svg-icons"
import {Link} from 'react-scroll'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay} from 'swiper';
import 'swiper/swiper-bundle.css'
import { useState } from 'react';


export function GoldenEgg() {

    const video = require('../media/dish.mp4')
    const logo = require('../media/dish.png')
    const about = require('../media/about.jpg')
    const videoTeam = require('../media/team.mp4')
    const chief = require('../media/chief.jpg')
    const booking = require('../media/booking.jpg')
    const spec_egg = require('../media/spec-egg.png')
    const spec2 = require('../media/spec2.png')
    const cesar = require('../media/cesar.png')
    const event1 = require('../media/event1.png')
    const event2 = require('../media/event2.png')

    const [navBackVision, setNavBackVision] = useState(false)

    function NavBackChanger() {
        if(window.scrollY >= 100) {
            setNavBackVision(true)
        }
        else {
            setNavBackVision(false)
        }
    }

    window.addEventListener('scroll', NavBackChanger)

    function BookingSubmit(event: React.FormEvent) {
        event.preventDefault()

    }

    function ContactsSubmit(event: React.FormEvent) {
        event.preventDefault()

    }

    return(
        <>
        <div className="wrapper">
        <div className="burger">
            <div className='burger-lines'>
                <div className="burger-line"></div>
            </div>
        </div>
        <div className='burger-close'>
            <FontAwesomeIcon className='burger-close__icon' icon={faX} />
        </div>
            <div className="home" id='home'>
                <video className="home__video" src={video} autoPlay loop muted></video>
                <div className="home__container">
                    <div className="container">
                        <nav className={navBackVision? 'top-menu active' : 'top-menu'}>
                            <div className='top-menu__list'>
                                <Link className='top-menu__item' to='about' smooth={true} duration={1000}>О ресторане</Link>
                                <Link className='top-menu__item' to='team' smooth={true} duration={1000}>Команда</Link>
                                <Link className='top-menu__item' to='booking' smooth={true} duration={1000}>Заказать</Link>
                                <Link className='logo' to='home' smooth={true} duration={1000}><img src={logo} alt="" /></Link>
                                <Link className='top-menu__item' to='menu' smooth={true} duration={1000}>Меню</Link>
                                <Link className='top-menu__item' to='events' smooth={true} duration={1000}>Мероприятия</Link>
                                <Link className='top-menu__item' to='contacts' smooth={true} duration={1000}>Контакты</Link>
                            </div>
                        </nav>
                    </div>
                    <div className="container home__container-center">
                        <div className="time-work">Пн - Пт: 8 - 22, Сб - Вс: 9 - 24</div>
                        <div className="home__text">
                            <h6>РЕСТОРАН</h6>
                            <h1>GOLDEN EGG</h1>
                            <div className="home__btns">
                                <Link className='home__btn' to='booking' smooth={true} duration={1000}>Заказать столик</Link>
                                <Link className='home__btn' to='about' smooth={true} duration={1000}>О ресторане</Link>
                            </div>
                            <div className='arrow-border'>
                                <Link className='home__arrow' to='about' smooth={true} duration={1000}>
                                    <FontAwesomeIcon className='arrow' icon={faChevronDown} />
                                </Link>
                            </div>
                        </div>
                            <div className='socials'>
                                <Link to='home' smooth={true} duration={1000}>
                                    <FontAwesomeIcon className='social' icon={faFacebook} />
                                </Link>
                                <Link to='home' smooth={true} duration={1000}>
                                    <FontAwesomeIcon className='social' icon={faTwitter} />
                                </Link>
                                <Link to='home' smooth={true} duration={1000}>
                                    <FontAwesomeIcon className='social' icon={faInstagram} />
                                </Link>
                            </div>
                    </div>
                </div>
            </div>
            <div className="about" id='about'>
                <div className="container about__container">
                    <div className='about__text'>
                        <h2>О РЕСТОРАНЕ</h2>
                        <p className='intro'>
                            Волшебная атмосфера, безукоризненное обслуживание, изысканный интерьер и, самое главное, богатейший выбор вкуснейших блюд отменного качества – именно эти характеристики привлекают гостей в наш ресторан</p>
                        <p>Официанты этого заведения знают все тонкости приготовления блюд, они подскажут гостям наиболее подходящие для них яства. Тут хорошо знают постоянных клиентов, умело угождая их вкусам.</p>
                        <p>Идеально дополняет ресторан уютная кофейня, находящаяся на первом этаже. Чашечка изумительного кофе и сладости от местного кондитера зарядят вас бодростью и позитивной энергией.</p>
                    </div>
                    <div className='about__img'>
                        <img src={about} alt=""/>
                        <div className="circle"></div>
                    </div>
                </div>
            </div>
            <div className="team" id='team'>
                <video className="team__video" src={videoTeam} autoPlay loop muted></video>
                <div className="main-team__container">
                    <div className="container">
                        <h6>НАША КОМАНДА</h6>
                    </div>
                </div>
                <div className="container team__container">
                    <div className="team__img">
                        <img src={chief} alt=""/>
                        <div className="circle"></div>
                    </div>
                    <div className="team__text">
                        <h2>ШЕФ-ПОВАР</h2>
                        <p className='intro'>За подбор продуктов и приготовление вкусных  блюд отвечает наш высококвалифицированный шеф-повар. Блюда в его исполнении превращаются в настоящие шедевры. Никто не останется равнодушным к такому                 непревзойденному сочетанию. </p>
                        <p>Своей работой мы хотим радовать каждого нашего посетителя. Мы гарантируем всем клиентам, что время, проведенное в нашем заведении, будет отличаться особым теплом и изысканным вкусом.</p>
                    </div>
                </div>
            </div>
            <div className='booking' id='booking'>
                <div className="container booking__container">
                    <div className='booking__text'>
                        <h2>ЗАКАЗАТЬ СТОЛИК</h2>
                        <form onSubmit={BookingSubmit} className='booking__form' action="">
                            <input type="text" required placeholder='Имя' />
                            <input type="text" required placeholder='Email'/>
                            <input type="text" required placeholder='Телефон'/>
                            <div className='booking__select'>
                                <select required
                                // onChange={event => setCaloriesValues(prev => ({...prev, eating: event.target.value}))}
                                >
                                    <option value=''>Кол-во людей</option>
                                    <option value='1'>1</option>
                                    <option value='2'>2</option>
                                    <option value='3-5'>3-5</option>
                                </select>
                            </div>
                            <input type="text" required placeholder='Дата(дата/месяц)'/>
                            <div className='booking__select'>
                                <select required
                                // onChange={event => setCaloriesValues(prev => ({...prev, eating: event.target.value}))}
                                >
                                    
                                    <option value=''>Время</option>
                                    <option value='14:00-16:00'>14:00-16:00</option>
                                    <option value='16:00-18:00'>16:00-18:00</option>
                                    <option value='18:00-20:00'>18:00-20:00</option>
                                    <option value='20:00-22:00'>20:00-22:00</option>
                                </select>
                            </div>
                            
                            <button type='submit'>ОФОРМИТЬ ЗАКАЗ</button>
                        </form>
                    </div>
                    <div className="booking__img">
                        <img src={booking} alt="" />
                        <div className="circle"></div>
                    </div>
                </div>
                <div className="container">
                    <div className='booking__contacts'>Пн - Пт: <strong>8 - 22</strong>, Сб - Вс: <strong>9 - 23</strong>, Телефон: <strong>+38098 729 13 67/+38097 458 78 79</strong></div>
                </div>
            </div>
            <div className="spec">
                <div className="main-spec__container">
                    <div className="contrainer">
                        <h6>СПЕЦ-ПРЕДЛОЖЕНИЯ</h6>
                    </div>
                </div>
                <div className="spec__slider">
                <Swiper
                    modules={[Autoplay, Pagination]}
                    autoplay = { { delay: 2500}}
                    pagination = {{ clickable: true }}
                    >
                    <SwiperSlide>
                        <div className="spec__slide">
                            <div className="container spec__slide-container">
                                <div className="spec__img">
                                    <img src={spec_egg} alt=""/>
                                    <div className="circle"></div>
                                </div>
                                <div className="spec__text">
                                    <h2>GOLDEN EGG</h2>
                                    <p className='intro'>Невероятно красивый десерт Пирожное "Golden Egg". 3D пирожное в форме яйца в гнёздышке.</p>
                                    <p>Узнать, каково золото на вкус, приглашаем в наш ресторан. Темный бельгийский шоколад, Амаретто, мусс мята-лемонграсс, центр морковь-маракуйя  — удержаться почти невозможно. </p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="spec__slide">
                            <div className="container spec__slide-container">
                                <div className="spec__img">
                                    <img src={spec2} alt=""/>
                                    <div className="circle"></div>
                                </div>
                                <div className="spec__text">
                                    <h2>УТИННЫЕ ИСТОРИИ</h2>
                                    <p className='intro'>Утиные ножки здесь маринуют с травами, запекают, а потом тушат, пока мясо не приобретет нежную текстуру. </p>
                                    <p> К утке подают красную капусту, томлёную в красном вине, а также толчёный картофель со шкварками. Фермерскую утиную грудку обжаривают и подают с соусом демиглас и вишнёвым кули, а также с нежным картофельным гратеном, запечённым со сливками, тимьяном и сыром пармезан. </p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
                </div>
            </div>
            <div className="menu" id='menu'>
                <h2>НАШЕ МЕНЮ</h2>
                <p className='intro menu__intro'>Предлагаем насладиться кухней от профессиональных поваров ресторана GOLDEN EGG!</p>
                <div className='container tabs__container'>
                    <ul className='tabs'>
                        <li className='tabs__item'>Закуски</li>
                        <li className='tabs__item'>Мясные блюда</li>
                        <li className='tabs__item'>Салаты</li>
                        <li className='tabs__item'>Десерты</li>
                        <li className='tabs__item'>Вина</li>
                        <li className='tabs__item'>Напитки</li>
                    </ul>
                </div>
                <Swiper
                    modules={[Autoplay, Pagination]}
                    autoplay = { { delay: 3000}}
                    pagination = {{ clickable: true }}
                    
                    >
                    <SwiperSlide>
                        <div className='container menu__slide-container'>
                            <div className='menu__items'>
                                <div className='menu__item'>
                                    <div className='menu__item-img'>
                                        <img src={cesar} alt="" />
                                    </div>
                                    <div className='menu__item-text'>
                                        <h6>Фирменный цезарь</h6>
                                        <div className='menu-line'></div>
                                        <h6>350,00 РУБ</h6>
                                        <p>с тигровыми креветками, копченой куриной грудкой, курицей-гриль, салатом Айсберг, перепелиными яйцами, томатами Черри и и соусом Дор-Блю</p>
                                    </div>
                                </div>
                                <div className='menu__item'>
                                    <div className='menu__item-img'>
                                        <img src={cesar} alt="" />
                                    </div>
                                    <div className='menu__item-text'>
                                        <h6>Фирменный цезарь</h6>
                                        <div className='menu-line'></div>
                                        <h6>350,00 РУБ</h6>
                                        <p>с тигровыми креветками, копченой куриной грудкой, курицей-гриль, салатом Айсберг, перепелиными яйцами, томатами Черри и и соусом Дор-Блю</p>
                                    </div>
                                </div>
                                <div className='menu__item'>
                                    <div className='menu__item-img'>
                                        <img src={cesar} alt="" />
                                    </div>
                                    <div className='menu__item-text'>
                                        <h6>Фирменный цезарь</h6>
                                        <div className='menu-line'></div>
                                        <h6>350,00 РУБ</h6>
                                        <p>с тигровыми креветками, копченой куриной грудкой, курицей-гриль, салатом Айсберг, перепелиными яйцами, томатами Черри и и соусом Дор-Блю</p>
                                    </div>
                                </div>
                                <div className='menu__item'>
                                    <div className='menu__item-img'>
                                        <img src={cesar} alt="" />
                                    </div>
                                    <div className='menu__item-text'>
                                        <h6>Фирменный цезарь</h6>
                                        <h6>350,00 РУБ</h6>
                                        <p>с тигровыми креветками, копченой куриной грудкой, курицей-гриль, салатом Айсберг, перепелиными яйцами, томатами Черри и и соусом Дор-Блю</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='container menu__slide-container'>
                            <div className='menu__items'>
                                <div className='menu__item'>
                                    <div className='menu__item-img'>
                                        <img src={cesar} alt="" />
                                    </div>
                                    <div className='menu__item-text'>
                                        <h6>Фирменный цезарь</h6>
                                        <div className='menu-line'></div>
                                        <h6>350,00 РУБ</h6>
                                        <p>с тигровыми креветками, копченой куриной грудкой, курицей-гриль, салатом Айсберг, перепелиными яйцами, томатами Черри и и соусом Дор-Блю</p>
                                    </div>
                                </div>
                                <div className='menu__item'>
                                    <div className='menu__item-img'>
                                        <img src={cesar} alt="" />
                                    </div>
                                    <div className='menu__item-text'>
                                        <h6>Фирменный цезарь</h6>
                                        <div className='menu-line'></div>
                                        <h6>350,00 РУБ</h6>
                                        <p>с тигровыми креветками, копченой куриной грудкой, курицей-гриль, салатом Айсберг, перепелиными яйцами, томатами Черри и и соусом Дор-Блю</p>
                                    </div>
                                </div>
                                <div className='menu__item'>
                                    <div className='menu__item-img'>
                                        <img src={cesar} alt="" />
                                    </div>
                                    <div className='menu__item-text'>
                                        <h6>Фирменный цезарь</h6>
                                        <div className='menu-line'></div>
                                        <h6>350,00 РУБ</h6>
                                        <p>с тигровыми креветками, копченой куриной грудкой, курицей-гриль, салатом Айсберг, перепелиными яйцами, томатами Черри и и соусом Дор-Блю</p>
                                    </div>
                                </div>
                                <div className='menu__item'>
                                    <div className='menu__item-img'>
                                        <img src={cesar} alt="" />
                                    </div>
                                    <div className='menu__item-text'>
                                        <h6>Фирменный цезарь</h6>
                                        <h6>350,00 РУБ</h6>
                                        <p>с тигровыми креветками, копченой куриной грудкой, курицей-гриль, салатом Айсберг, перепелиными яйцами, томатами Черри и и соусом Дор-Блю</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='container menu__slide-container'>
                            <div className='menu__items'>
                                <div className='menu__item'>
                                    <div className='menu__item-img'>
                                        <img src={cesar} alt="" />
                                    </div>
                                    <div className='menu__item-text'>
                                        <h6>Фирменный цезарь</h6>
                                        <div className='menu-line'></div>
                                        <h6>350,00 РУБ</h6>
                                        <p>с тигровыми креветками, копченой куриной грудкой, курицей-гриль, салатом Айсберг, перепелиными яйцами, томатами Черри и и соусом Дор-Блю</p>
                                    </div>
                                </div>
                                <div className='menu__item'>
                                    <div className='menu__item-img'>
                                        <img src={cesar} alt="" />
                                    </div>
                                    <div className='menu__item-text'>
                                        <h6>Фирменный цезарь</h6>
                                        <div className='menu-line'></div>
                                        <h6>350,00 РУБ</h6>
                                        <p>с тигровыми креветками, копченой куриной грудкой, курицей-гриль, салатом Айсберг, перепелиными яйцами, томатами Черри и и соусом Дор-Блю</p>
                                    </div>
                                </div>
                                <div className='menu__item'>
                                    <div className='menu__item-img'>
                                        <img src={cesar} alt="" />
                                    </div>
                                    <div className='menu__item-text'>
                                        <h6>Фирменный цезарь</h6>
                                        <div className='menu-line'></div>
                                        <h6>350,00 РУБ</h6>
                                        <p>с тигровыми креветками, копченой куриной грудкой, курицей-гриль, салатом Айсберг, перепелиными яйцами, томатами Черри и и соусом Дор-Блю</p>
                                    </div>
                                </div>
                                <div className='menu__item'>
                                    <div className='menu__item-img'>
                                        <img src={cesar} alt="" />
                                    </div>
                                    <div className='menu__item-text'>
                                        <h6>Фирменный цезарь</h6>
                                        <h6>350,00 РУБ</h6>
                                        <p>с тигровыми креветками, копченой куриной грудкой, курицей-гриль, салатом Айсберг, перепелиными яйцами, томатами Черри и и соусом Дор-Блю</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className='events' id='events'>
                <h6>ЧАСТНЫЕ МЕРОПРИЯТИЯ</h6>
                <div className="container events__container">
                    <div className="left-event">
                        <img src={event1} alt="" />
                        <div className="circle"></div>
                        <div className="event__title">свадебный банкет</div>
                    </div>
                    <div className="right-event">
                        <img src={event2} alt=""/>
                        <div className="circle"></div>
                        <div className="event__title">корпоративные вечеринки</div>
                    </div>
                </div>
                <div className='container events__contacts'>По вопросам частных мероприятий звоните: +38098 729 13 67/+38097 458 78 79  или используйте контактную форму.</div>
            </div>
            <div className="contacts" id='contacts'>
                <h2>КОНТАКТЫ</h2>
                <p className="intro">Вы можете оставить нам сообщение через форму ниже, или любым другим, удобным вам способом</p>
                <form onSubmit={ContactsSubmit} className='container contacts__form' action="">
                    <input placeholder='Имя' type="text" name="" id="" />
                    <input placeholder='Email' type="text" name="" id="" />
                    <input placeholder='Телефон' type="text" name="" id="" />
                    <textarea placeholder='Сообщение'></textarea>
                    <div className="contacts__data-submit">
                        <div className="contacts__data-items">
                            <div className="contacts__data-item">
                                <FontAwesomeIcon className='contacts-icon' icon={faLocationDot} />
                                <p>пр-т. Победы, 105, Москва</p>
                            </div>
                            <div className="contacts__data-item">
                                <FontAwesomeIcon className='contacts-icon' icon={faPhone} />
                                <p>+38098 729 13 67</p>
                            </div>
                            <div className="contacts__data-item">
                                <FontAwesomeIcon className='contacts-icon' icon={faEnvelope} />
                                <p>info@goldenegg.com</p>
                            </div>
                        </div>
                        <button>Отправить сообщение</button>
                    </div>
                </form>
            </div>
            <div className="map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8980.73224949833!2d37.616016750851635!3d55.75532208886354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54a5c6ae39171%3A0x95bf7ced8fea5cc1!2z0JrQuNGC0LDQuS3Qs9C-0YDQvtC0LCDQnNC-0YHQutCy0LA!5e0!3m2!1sru!2sru!4v1675850812458!5m2!1sru!2sru"></iframe>
            </div>
            <footer>
                © Copyright <a>LectorWeb</a>  2023
            </footer>
        </div>
        </>
    )
}