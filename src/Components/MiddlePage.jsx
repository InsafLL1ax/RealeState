
import './middlePage.css'


export function MiddlePage({middlePageRef}){
    return(
        <div className="middlePage">
        <div className="middlePage__info">
            <div className="middlePage__info__text" ref={middlePageRef}>
                <div className="middlePage__info__text__about">
                    <h1>We’ve Reinvented The Way Homes Are Sold To Benefit</h1>
                    <h1 style= {{ margin: '0'}}>Homeowners Like You (You Save Thousands!)</h1>
                </div>
            </div>
            <div className='middlePage__info__about'>
            <img className='middlePage__info__text__picture' src ="house.jpg" alt="House"></img>
            <div className='middlePage__info__about__us'>
            <h4>No realtor commissions out of your pocket, you get 100% of cash</h4>
            <h4>We will connect you to our home buyers network and start reciving offers today!</h4>
            <h4>We buy houses for cash so we’re able to complete the process 5 times faster than others!</h4>
            </div>
            </div>
        </div>
    </div>
    );
}