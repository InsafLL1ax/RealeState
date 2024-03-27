import './generalPage.css'

export function BackgroundImage() {
    document.body.style.backgroundColor = "#f3f3f3";
    document.body.style.backgroundImage = "url('house2.jpg')";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "100% ";
    document.body.style.backgroundPosition = "center;"
    document.body.style.margin = "auto";




    /* document.body.style.backgroundImage = "url('house2.jpg')";*/
}

export function GeneralPage() {

   /* window.scrollTo(0, -100);*/
    return (<>
        <div className="header__block">
            <div className='header__block__menu'>
                <div className='header__block__menu__home'>
                    <p>Home</p>
                </div>
                <div className='header__block__menu_about'>
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
