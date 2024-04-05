import './workPage.css'

export function WorkPage({HowItWorksRef}){
    return(
        <div className="workPage">
        <div className="workPage__info">
            <div className="workPage__info__text" ref={HowItWorksRef}>
                <div className="workPage__info__text__about">
                    <h1>How does it work? Quite simple!</h1>
                    <h1 style= {{ margin: '0'}}>Everything is very simple!</h1>
                </div>
            </div>
            <div className='workPage__info__about'>
            <img className='workPage__info__text__picture' src ="second_home.png" alt="House"></img>
            <div className='workPage__info__about__us'>
            <h3>1. You fill out the form.</h3>
            <img className= 'mark' src ="mark.png" alt="mark"></img>
            <h3>2. We receive a request.</h3>
            <img className= 'mark' src ="mark.png" alt="mark"></img>
            <h3>3. We will contact you immediately.</h3>
            <img className= 'mark' src ="mark.png" alt="mark"></img>
            <h3>4. We come to a mutually beneficial solution</h3>
            <img className= 'mark' src ="mark.png" alt="mark"></img>
            </div>
            </div>
        </div>
    </div>
    );
}