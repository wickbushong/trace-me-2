import React from 'react'
import { connect } from 'react-redux'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import ReportForm from '../components/reports/ReportForm'
import ReportVisitList from '../components/reports/ReportVisitList'
import Error from '../components/Error'

import submitReport from '../actions/reports/submitReport'

class ReportPage extends React.Component {
    
    handleSubmitReport = (report) => {
        this.props.submitReport(report)
    }

    render() {
        const {report, errors} = this.props
        return (
            <Container>
                <Row>
                    <Error errors={errors} />
                    <Col>
                        <ReportForm submitReport={this.handleSubmitReport}/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        { !!report.id ? <ReportVisitList report={report} /> : <h1 className="text-center">FLAGGED VISITS WILL APPEAR BELOW</h1> }
                        
                    </Col>
                </Row>
            </Container>
        )
    }
}

const mapStateToProps = ({report, errors}) => {
    return {report, errors}
}

export default connect(mapStateToProps, {submitReport})(ReportPage)