import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import CheckInForm from '../components/visits/CheckInForm'

class VisitorsPage extends React.Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col><CheckInForm /></Col>
                    <Col>Current Visitors</Col>
                </Row>
            </Container>
        )
    }
}

export default VisitorsPage