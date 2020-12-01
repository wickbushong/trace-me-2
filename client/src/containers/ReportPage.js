import React from 'react'
import { connect } from 'react-redux'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import submitReport from '../actions/reports/submitReport'

import ReportForm from '../components/reports/ReportForm'
import ReportVisitList from '../components/reports/ReportVisitList'

class ReportPage extends React.Component {

    handleSubmitReport = (report) => {
        this.props.submitReport(report)
    }

    render() {
        const {report} = this.props
        return (
            <Container>
                <Row>
                    <Col>
                        <ReportForm submitReport={this.handleSubmitReport}/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        {/* { !!report.length ? <ReportVisitList report={report} /> : <h1 className="text-center">FLAGGED VISITS WILL APPEAR HERE</h1> } */}
                    </Col>
                </Row>
            </Container>
        )
    }
}

const mapStateToProps = state => {
    return {
        report: state.report
    }
}

export default connect(mapStateToProps, {submitReport})(ReportPage)