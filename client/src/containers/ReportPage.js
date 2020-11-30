import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import ReportForm from '../components/reports/ReportForm'

class ReportsPage extends React.Component {

    render() {
        return (
            <Container>
                <Row>
                    <Col>
                    <h1 className="text-center">SUBMIT A REPORT</h1>
                        <ReportForm />
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default ReportsPage