import './generalPage.css'
import React, {useRef} from 'react';

export function BackgroundImage() {
    document.body.style.backgroundColor = "#f3f3f3";
    document.body.style.backgroundImage = "url('house2.jpg')";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "100% 50% ";
    document.body.style.backgroundPosition = "center;"
    document.body.style.margin = "auto";

}

export function GeneralPage({middlePageRef}) {
    const homePageRef = useRef(null);
    const scrollToMiddlePage = () => {
        if (middlePageRef.current) {
            window.scrollTo({
                top: middlePageRef.current.offsetTop,
                behavior: 'smooth'
            });
        }
    };

    const scrollToHomePage = () => {
        if (homePageRef.current) {
            window.scrollTo({
                top: homePageRef.current.offsetTop,
                behavior: 'smooth'
            });
        }
    };

    return (<>
        <div className="header__block">
            <div className='header__block__menu'>
                <div className='header__block__menu__home' onClick={scrollToHomePage} ref={homePageRef}>
                    <p>Home</p>
                </div>
                <div className='header__block__menu_about' onClick={scrollToMiddlePage}>
                    <p>About</p>
                </div>
                <div className='header__block__menu__How_Works'>
                    <p>How it works</p>
                </div>
                <div className='header__block__menu__reviews'>
                    <p>Reviews</p>
                </div>
            </div>
        </div>
        
    </>
    )
}
