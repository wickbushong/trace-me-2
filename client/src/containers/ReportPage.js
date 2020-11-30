import React from 'react'
import { connect } from 'react-redux'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import submitReport from '../actions/reports/submitReport'

import ReportForm from '../components/reports/ReportForm'

class ReportsPage extends React.Component {

    handleSubmitReport(report) {
        this.props.submitReport(report)
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col>
                    <h1 className="text-center">SUBMIT A REPORT</h1>
                        <ReportForm submitReport={this.handleSubmitReport}/>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default connect(null, {submitReport})(ReportsPage)