import './generalPage.css'

export function BackgroundImage() {
   /* document.body.style.backgroundColor = "#f3f3f3";*/
    document.body.style.backgroundImage = "url('house.jpg')";
  }

export function GeneralPage(){
    
    return(<>
        <div className="general__text">
        <h2>HELLO, can i help you?</h2> 
        </div>
        </>
    )
}
