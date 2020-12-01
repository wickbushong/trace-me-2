import React from 'react'

import Card from 'react-bootstrap/Card'
import Accordion from 'react-bootstrap/Accordion'
import Badge from 'react-bootstrap/Badge'
import ListGroup from 'react-bootstrap/ListGroup'

class ReportVisit extends React.PureComponent {

    renderOverlaps = (visit) => {
        return visit.overlap_visits.map(overlap => {
            let user = overlap.user
            let timeIn = new Date(overlap.time_in)
            let timeOut = new Date(overlap.time_out)
            return <ListGroup.Item key={overlap.id} >
                {user.first_name} {user.last_name} // {user.email} // {user.phone} <span className="float-right">{timeIn.toLocaleTimeString()} to {timeOut.toLocaleTimeString()}</span>
            </ListGroup.Item>
        })
    }

    render() {
        const {visit} = this.props
        const week = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
        let timeIn = new Date(visit.time_in)
        let timeOut = new Date(visit.time_out)
        return (
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey={visit.id} >
                    {visit.business.name} // {week[timeIn.getDay()]}, {timeIn.toLocaleString()} to {timeOut.toLocaleTimeString()}
                    { Object.keys(visit.overlap_visits).length > 0 ? <Badge pill variant="danger" className="float-right">{visit.overlap_visits.length}</Badge> : null }
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