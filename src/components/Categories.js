import React, { Component } from 'react'

export class Categories extends Component {
    constructor(props){
        super(props)
        this.state = {
            categories:[
                {
                    key:'all',
                    name:'All'
                },
                {
                    key:'chairs',
                    name:'Chairs'
                },
                {
                    key:'sofas',
                    name:'Sofas'
                },
                {
                    key:'lamps',
                    name:'Lamps'
                },
                {
                    key:'tables',
                    name:'Tables'
                },
                {
                    key:'bads',
                    name:'Bads'
                },

            ]
        }
    }
  
    render() {
    return (
      <div className='categories'>
        {this.state.categories.map(el=>(
            <div key={el.id} onClick={() =>this.props.chooseCategory(el.key)}>{el.name}</div>
        ))}

      </div>
    )
  }
}

export default Categories