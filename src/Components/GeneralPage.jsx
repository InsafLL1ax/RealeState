import './generalPage.css'

export function BackgroundImage() {
   document.body.style.backgroundColor = "#f3f3f3";
    document.body.style.backgroundImage = "url('house.jpg')" ;
    document.body.style.backgroundRepeat ="no-repeat";
    document.body.style.backgroundSize = "100% 100%";
    document.body.style.backgroundPosition = "bottom, right, left, right;"
    document.body.style.margin = "auto";
   
    
  
   /* document.body.style.backgroundImage = "url('house2.jpg')";*/
  }

export function GeneralPage(){
    
window.scrollTo(0, 0);
    return(<>
        <div className="general__text">
        <h2>HELLO, can i help you?</h2> 
        </div>
        </>
    )
}
