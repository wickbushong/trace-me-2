import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'

class ActiveVisit extends React.Component {

    render() {
        return (
            <ListGroup.Item>{this.props.visit.user.firstName} {this.props.visit.user.lastName} <Button variant="info" size="sm" className="float-right">Check Out</Button></ListGroup.Item>
        )
    }

}

export default ActiveVisit