import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import {connect} from 'react-redux'

import CurrentVisitorsList from './CurrentVisitorsList'
import CheckInForm from '../components/visits/CheckInForm'

import checkIn from '../actions/visits/checkIn'

class VisitorsPage extends React.Component {

    // THIS IS A HARDCODED BUSINESS ID
    handleCheckIn = user => {
        this.props.checkIn(user, 1)
    }

    render() {
        const {business} = this.props
        return (
            <Container>
                <Row>
                    <Col><CheckInForm business={business} handleCheckIn={this.handleCheckIn}/></Col>
                    <Col><CurrentVisitorsList business={business}/></Col>
                </Row>
            </Container>
        )
    }
}

const mapStateToProps = state => ({business: state.business})

export default connect(mapStateToProps, {checkIn})(VisitorsPage)