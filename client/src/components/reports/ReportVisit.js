import React from 'react'

import Card from 'react-bootstrap/Card'
import Accordion from 'react-bootstrap/Accordion'
import Button from 'react-bootstrap/Button'
import ListGroup from 'react-bootstrap/ListGroup'

class ReportVisit extends React.PureComponent {

    render() {
        const {visit} = this.props
        // debugger
        return (
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey={visit.id} >
                    Click me!
                </Accordion.Toggle>
                <Accordion.Collapse eventKey={visit.id} >
                    <ListGroup>
                        <ListGroup.Item>Cras justo odio</ListGroup.Item>
                        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                        <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                        <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                    </ListGroup>
                </Accordion.Collapse>
            </Card>
        )
    }
}

export default ReportVisit