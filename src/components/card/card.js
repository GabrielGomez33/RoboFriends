import React from 'react'
import Tachyons from 'tachyons'
import './card.css'


class Card extends React.Component {
    
    render(){
        //DESTRUCTURING ALLOWS FOR CLEANER CODE
        const {name,email,id} = this.props
        return (
            


            <div className="f1 tc bg-light-blue dib br3 pa3 ma2 bw2 shadow-5 grow ">
                <img  src={`https://robohash.org/${id}?200x200`} alt="robotPhoto"></img>  

                <div className="f1 tc bg-white dib br3 pa3 ma2 bw2 shadow-5 grow "sName>
                <h2>{name}</h2>
                <h2>{email}</h2>
                </div>
                
            </div>

        );

        
    }
}

export default Card