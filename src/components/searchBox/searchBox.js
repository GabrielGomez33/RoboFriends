import React from 'react'

class SearchBox extends React.Component {
    render(){
        const {searchfield,searchChange} = this.props
        return(
            <div className="tc pa2 b--green abs atv ">
                <input type="search" placeholder="Search Robots" onChange={searchChange}/>

            </div>
        )
    }
}

export default SearchBox