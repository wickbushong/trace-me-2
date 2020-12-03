import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import {connect} from 'react-redux'

import CurrentVisitorsList from './CurrentVisitorsList'
import CheckInForm from '../components/visits/CheckInForm'

import checkIn from '../actions/visits/checkIn'
import checkOut from '../actions/visits/checkOut'
import fetchVisits from '../actions/visits/fetchVisits'

class VisitsPage extends React.PureComponent {

    componentDidMount() {
        const {business} = this.props
        this.props.fetchVisits(business.id)
    }
    
    handleCheckIn = user => {
        const {business} = this.props
        this.props.checkIn(user, business.id)
    }

    handleCheckOut = visitId => {
        this.props.checkOut(visitId)
    }

    render() {
        const {business, visits} = this.props
        return (
            <Container>
                <Row>
                    <Col><CheckInForm business={business} handleCheckIn={this.handleCheckIn}/></Col>
                    { !!visits.length ? <Col><CurrentVisitorsList business={business} visits={visits} handleCheckOut={this.handleCheckOut} /></Col> : null }
                </Row>
            </Container>
        )
    }
}

const mapStateToProps = state => ({
    business: state.business,
    visits: state.visits
})

export default connect(mapStateToProps, {fetchVisits, checkIn, checkOut})(VisitsPage)