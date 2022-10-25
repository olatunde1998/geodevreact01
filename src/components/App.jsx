import React from "react";
import Card from "../Card";
import informat from "../informa";

function App(){
  return(
    
    <div className="overall-container">
      <h2 className="nav-bar">Geodev APP</h2>
      <div className="card-container">
        {informat.map(item =>
          <Card 
            title = {item.title}
            content = {item.content}
            img = {item.imgURL}
            button = {item.button}
          
          />
        )}
      </div>
      <div className="footer">
                <h5>olatunde336@gmail.com</h5>
      </div>
    </div>
  )


}

export default App;