import React from 'react'
import { connect } from 'react-redux'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import ReportForm from '../components/reports/ReportForm'
import ReportVisitList from '../components/reports/ReportVisitList'

import submitReport from '../actions/reports/submitReport'

const ReportPage = ({report, submitReport}) => {
    
    const handleSubmitReport = (report) => {
        submitReport(report)
    }

    return (
        <Container>
            <Row>
                <Col>
                    <ReportForm submitReport={handleSubmitReport}/>
                </Col>
            </Row>
            <Row>
                <Col>
                    { !!report.id ? <ReportVisitList report={report} /> : <p className="text-center">FLAGGED VISITS WILL APPEAR BELOW</p> }
                    
                </Col>
            </Row>
        </Container>
    )
}

const mapStateToProps = ({report}) => {
    return {report}
}

export default connect(mapStateToProps, {submitReport})(ReportPage)