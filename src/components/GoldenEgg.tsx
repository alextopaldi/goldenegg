import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown  } from "@fortawesome/free-solid-svg-icons"
import { faInstagram, faTwitter, faFacebook } from "@fortawesome/free-brands-svg-icons"
import {Link} from 'react-scroll'

const video = require('../media/dish.mp4')
const logo = require('../media/dish.png')
const about = require('../media/about.jpg')
const videoTeam = require('../media/team.mp4')
const chief = require('../media/chief.jpg')
const booking = require('../media/booking.jpg')

export function GoldenEgg() {
    return(
        <>
        <div className="wrapper">
            <div className="home">
                <video className="home__video" src={video} autoPlay loop muted></video>
                <div className="home__container">
                    <div className="container">
                        <nav className="top-menu">
                            <div className='top-menu__list'>
                                <Link className='top-menu__item' to=''>О ресторане</Link>
                                <Link className='top-menu__item' to=''>Команда</Link>
                                <Link className='top-menu__item' to=''>Заказать</Link>
                                <Link className='logo' to=''><img src={logo} alt="" /></Link>
                                <Link className='top-menu__item' to=''>Меню</Link>
                                <Link className='top-menu__item' to=''>Мероприятия</Link>
                                <Link className='top-menu__item' to=''>Контакты</Link>
                            </div>
                        </nav>
                    </div>
                    <div className="container home__container-center">
                        <div className="time-work">Пн - Пт: 8 - 22, Сб - Вс: 9 - 24</div>
                        <div className="home__text">
                            <h6>РЕСТОРАН</h6>
                            <h1>GOLDEN EGG</h1>
                            <div className="home__btns">
                                <Link className='home__btn' to=''>Заказать столик</Link>
                                <Link className='home__btn' to=''>О ресторане</Link>
                            </div>
                            <div className='arrow-border'>
                                <div className='home__arrow'>
                                    <FontAwesomeIcon className='arrow' icon={faChevronDown} />
                                </div>
                            </div>
                        </div>
                            <div className='socials'>
                                <Link to=''>
                                    <FontAwesomeIcon className='social' icon={faFacebook} />
                                </Link>
                                <Link to=''>
                                    <FontAwesomeIcon className='social' icon={faTwitter} />
                                </Link>
                                <Link to=''>
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
                        <form className='booking__form' action="">
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
        </div>
        </>
    )
}