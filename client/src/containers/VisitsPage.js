import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import {connect} from 'react-redux'

import CurrentVisitorsList from './CurrentVisitorsList'
import CheckInForm from '../components/visits/CheckInForm'

import checkIn from '../actions/visits/checkIn'
import fetchVisits from '../actions/visits/fetchVisits'

class VisitsPage extends React.Component {

    handleCheckIn = user => {
        // THIS IS A HARDCODED BUSINESS ID
        this.props.checkIn(user, 1)
    }

    handleFetch = () => {
        // THIS IS A HARDCODED BUSINESS ID
        this.props.fetchVisits(1)
    }

    render() {
        const {business, visits} = this.props
        console.log(visits)
        return (
            <Container>
                <Row>
                    <Col><CheckInForm business={business} handleCheckIn={this.handleCheckIn}/></Col>
                    <Col><CurrentVisitorsList business={business} visits={visits} fetchVisits={this.handleFetch} /></Col>
                </Row>
                    <button onClick={this.handleFetch}>fetch em up</button>
            </Container>
        )
    }
}

const mapStateToProps = state => ({
    business: state.business,
    visits: state.visits
})

export default connect(mapStateToProps, {checkIn, fetchVisits})(VisitsPage)