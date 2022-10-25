import React from "react";


function Card(props){
    return(
        <div className="card-box">
            <div className='top-box'>
                <h2 className="title-name">{props.title}</h2>
                <img className="img-logo" src={props.img} alt="" />
            </div>
            <div className="bottom-box">
                <p className="content">{props.content}</p>
                <p className="content">{props.button}</p>
            </div>
            

        </div>
    )
}
export default Card;