import React from 'react'
import Card from '../card/card'

class CardList extends React.Component {
  
    render() {
        const {robots} = this.props
        const cardComponent = robots.map((user,iter) => {
            return <Card key={robots[iter].id} id={robots[iter].id} name={robots[iter].name} email={robots[iter].email} photo={'This is A Photo'} />
        })
        return (
            <div>
                
                {cardComponent}


            </div>


    


        )
    }
}

export default CardList