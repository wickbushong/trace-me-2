import React from 'react'

import Card from 'react-bootstrap/Card'
import Accordion from 'react-bootstrap/Accordion'
import Button from 'react-bootstrap/Button'
import ListGroup from 'react-bootstrap/ListGroup'

class ReportVisit extends React.PureComponent {

    renderOverlaps = (visit) => {
        return visit.overlap_visits.map(overlap => {
            return <ListGroup.Item>{overlap.user.first_name} {overlap.user.last_name}</ListGroup.Item>
        })
    }

    render() {
        const {visit} = this.props
        const week = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
        let time = new Date(visit.time_in)
        return (
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey={visit.id} >
                    {visit.business.name} // {week[time.getDay()]}, {time.toLocaleString()}
                </Accordion.Toggle>
                <Accordion.Collapse eventKey={visit.id} >
                    <ListGroup>
                        {this.renderOverlaps(visit)}                        
                    </ListGroup>
                </Accordion.Collapse>
            </Card>
        )
    }
}

export default ReportVisit