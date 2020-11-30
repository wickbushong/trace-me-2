import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'

class ActiveVisit extends React.Component {

    render() {
        return (
            <ListGroup.Item>{this.props.visit.user.first_name} {this.props.visit.user.last_name} <Button variant="info" size="sm" className="float-right">Check Out</Button></ListGroup.Item>
        )
    }

}

export default ActiveVisit