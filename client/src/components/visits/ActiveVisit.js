import React from 'react'

import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'

class ActiveVisit extends React.Component {

    handleOnClick = event => {
        this.props.handleCheckOut(this.props.visit.id)
    }
    
    render() {
        const {visit} = this.props
        return (
            <ListGroup.Item key={visit.id} >{visit.user.first_name} {visit.user.last_name} <Button variant="info" size="sm" className="float-right" onClick={this.handleOnClick} >Check Out</Button></ListGroup.Item>
        )
    }

}

export default ActiveVisit