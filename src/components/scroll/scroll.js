import React from 'react'

class Scroll extends React.Component{
    render(){
        const {Scroll} = this.props
        
        return (
            <div style={{overflowY: 'scroll', border: '1px solid black', height: '600px'}}>
                {this.props.children}
            </div>
        )
        
    }
}

export default Scroll