import './App.scss';

import profilePictures from "./assets/profile-1x.png";
import galleryPic1 from "./assets/gallery1-1x.jpg";
import galleryPic2 from "./assets/gallery2-1x.jpg";
import galleryPic3 from "./assets/gallery3-1x.jpg";
import galleryPic4 from "./assets/gallery4-1x.jpg";

import iconGithub2 from "./assets/githubv2.svg";
import iconLinkedin2 from "./assets/linkedinv2.svg";


function App() {
  return (
    <div className="App">
        <header className="header">
            <div className="header__text">
                <h1 className="font-display-1 header__lead-text">Üdv.</h1>
                <h2 className="font-display-2 header__sub-text">Örülök, hogy benéztél</h2>
            </div>
            <div className="header__button-container">
                <a href="#gallery" className="btn btn--blue header__button">Munkáim</a>
                <a href="#contact" className='btn header_button'>Kapcsolat</a>
            </div>
        </header>

        {/* <section className="feature">
            <div className="container">
                <div className="row">
                    <div className="col-1-of-3">
                        <div className="feature__box">
                        <svg className="feature__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 12h-2v-2h2v2zm0-4h-2V6h2v4z"/></svg>
                            <h4 className="feature__title font-title">Céltudat</h4>
                            <p className="feature__text">Tudatosan haladok a célom felé. Ami pedig pontosan az, hogy webfejlesztő legyek.</p>
                        </div>
                    </div>
                    <div className="col-1-of-3">
                        <div className="feature__box">
                        <svg className="feature__icon" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"> <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/></svg>
                            <h4 className="feature__title font-title">Precizitás</h4>
                            <p className="feature__text">Precizitás alatt a technikai részleteken túl értsd azt is, hogy mindent megteszek a határidők betartásáért.</p>
                        </div>
                    </div>
                    <div className="col-1-of-3">
                        <div className="feature__box">
                            <img src="./assets/star_border.svg" className="feature__icon" alt="" />
                            <h4 className="feature__title font-title">Tanulás</h4>
                            <p className="feature__text">Nyitott vagyok a fejlődésre. Sőt, szeretek is az új webes technológiákkal megismerkedni</p>
                        </div>
                    </div>
                </div>
            </div>
        </section> */}

        <section className="about">
            <div className="container-fluid">
                <div className="about__profile">
                    <img src={profilePictures}  alt="Profilkép" className="about__profile-picture" />
                    <div className="about__social-container">
                        <a href="https://www.linkedin.com/in/%C3%A1goston-t%C3%B3th-68899012b/" className="about__social-icon ">   
                            <img src={iconLinkedin2} />
                        </a>
                        <a href="https://github.com/DepictYourself" className="about__social-icon">
                            <img src={iconGithub2} />
                        </a>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 col-md-offset-4">
                        <p className="about__text">Tóth Ágoston vagyok és frontend fejlesztéssel is foglalkozom. Ezen a területen előnyömre válik a kreativitásom és az autodidakta módon elsajátított tudásom, melyet az online fellelhető anyagoknak köszönhetően mindig up to date-en tartok</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 col-md-offset-3">
                        <h3 className="about__skill-category">Magabiztos ismeretek</h3>
                        <div className="about__skill-container">
                            <div className="about__skill-item"><span className="about__skill-text">html5</span></div>
                            <div className="about__skill-item"><span className="about__skill-text">css3</span></div>                        
                            <div className="about__skill-item"><span className="about__skill-text">javascript</span></div>
                            <div className="about__skill-item"><span className="about__skill-text">flexbox</span></div>                        
                            <div className="about__skill-item"><span className="about__skill-text">bootstrap</span></div>                        
                            <div className="about__skill-item"><span className="about__skill-text">git</span></div>
                            <div className="about__skill-item"><span className="about__skill-text">github</span></div>
                            <div className="about__skill-item"><span className="about__skill-text">npm</span></div>                        
                            <div className="about__skill-item"><span className="about__skill-text">reszponzív</span></div>
                            <div className="about__skill-item"><span className="about__skill-text">photoshop</span></div>
                            <div className="about__skill-item"><span className="about__skill-text">figma</span></div>                        
                            <div className="about__skill-item"><span className="about__skill-text">cpanel</span></div>                        
                        </div>
                        <h3 className="about__skill-category">Említésre méltó</h3>
                        <div className="about__skill-container">
                            <div className="about__skill-item"><span className="about__skill-text">jquery</span></div>
                            <div className="about__skill-item"><span className="about__skill-text">es6</span></div>
                            <div className="about__skill-item"><span className="about__skill-text">scss &amp; sass</span></div>
                            <div className="about__skill-item"><span className="about__skill-text">css grid</span></div>
                            <div className="about__skill-item"><span className="about__skill-text">webpack</span></div>
                            <div className="about__skill-item"><span className="about__skill-text">php</span></div>
                            <div className="about__skill-item"><span className="about__skill-text">phpmyadmin</span></div>
                            <div className="about__skill-item"><span className="about__skill-text">wordpress</span></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="gallery" id="gallery">
            <div className="container-fluid">
                <div className="gallery__item-wrapper">
                    <figure>
                        <a href="https://depictyourself.github.io/natours/" target="_blank">
                            <img src={galleryPic1} alt="" className="gallery__item" />
                        </a>
                        <figcaption>
                            <a href="https://github.com/DepictYourself/natours" target="_blank" className="gallery__link">
                                Natours<br />( kurzus projekt )
                            </a>
                        </figcaption>
                    </figure>
                </div>
                <div className="gallery__item-wrapper">
                    <figure>
                        <a href="https://depictyourself.github.io/trillo/index.html" target="_blank">
                            <img src={galleryPic2} alt="" className="gallery__item" />
                        </a>
                        <figcaption>
                            <a href="https://github.com/DepictYourself/trillo" target="_blank" className="gallery__link">
                                Trillo<br />( kurzus projekt )
                            </a>
                        </figcaption>
                    </figure>                
                </div>
                <div className="gallery__item-wrapper">
                    <figure>
                        <a href="https://depictyourself.github.io/just-another-weather-app/" target="_blank">
                            <img src={galleryPic3} alt="" className="gallery__item" />
                        </a>
                        <figcaption>
                            <a href="https://github.com/DepictYourself/just-another-weather-app" target="_blank" className="gallery__link">
                                Weather App
                            </a>
                        </figcaption>
                    </figure>                
                </div>
                <div className="gallery__item-wrapper">
                    <figure>
                        <a href="https://depictyourself.github.io/RandomChuckFacts/" target="_blank">                    
                            <img src={galleryPic4} alt="" className="gallery__item" />
                        </a>
                        <figcaption>
                            <a href="https://github.com/DepictYourself/RandomChuckFacts" target="_blank" className="gallery__link">
                                Chuck Norris Facts
                            </a>
                        </figcaption>
                    </figure>                
                </div>
            </div>
        </section>

        <section className="contact" id="contact">
            <div className="container">
                <div className="row">
                    <form action="https://formspree.io/totha014@gmail.com" method="POST" className="form">
                        <div className="container">
                            <h2 className="contact__title">Írj nekem</h2>
                            
                            <div className="form__group">
                                <input type="text" className="form__input" placeholder="Név*" id="name" name="name" required />
                                <label for="name" className="form__label">Név</label>
                            </div>
                            
                            <div className="form__group">
                                <input type="email" className="form__input" placeholder="Email*" id="email" name="email" required />
                                <label for="email" className="form__label">Email</label>
                            </div>
                            
                            <div className="form__group">
                                <textarea name="message" id="message" className="form__message" rows="6" placeholder="Üzenet"></textarea>
                            </div>
                            
                            <div className="form__group">
                                <button className="btn btn--blue">Küldés</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
        
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="footer__text">Készítette:
                        <a href="https://github.com/DepictYourself" className="footer__link">Tóth Ágoston</a>
                        <a href="https://github.com/DepictYourself/depictyourself.github.io" className="footer__link">
                            hosted by
                            <img src={iconGithub2} alt="Github Pages" className="footer__github-icon" />
                        </a>
                        <a href="https://github.com/DepictYourself/portfolio" className="footer__link">
                            Forráskód
                        </a>
                    </div>
                    <div className="footer__text">Minden jog fenntartva &copy; <span id="copyright"></span></div>
                </div>
            </div>
        </footer>
    </div>);
}

export default App;
