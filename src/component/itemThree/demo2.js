import React, { Component } from 'react'

let names = ['Amy', 'Joe', 'Eve', 'Bob']

class Component2 extends Component {
    render () {
        return (
            <div>
                <h3>DEMO 2, JSX syntax你好啊</h3>
                <ul>
                    {
                        names.map( (name) => {
                            return ( <li key={ name }>Hello, { name }!</li> )
                        } )
                    }
                </ul>
                <hr/>
            </div>
        )
    }
}
export default Component2;