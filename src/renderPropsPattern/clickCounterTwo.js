import React, { Component } from 'react'

class ClickCounterTwo extends Component {


    render() {
        const { count, increamentCount } = this.props
        return (
            <button onClikc={increamentCount}>Clicked X times</button>
        )
    }
}
export default ClickCounterTwo;