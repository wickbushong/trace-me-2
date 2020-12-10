import React from 'react'
import {connect} from 'react-redux'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import CurrentVisitorsList from './CurrentVisitorsList'
import CheckInForm from '../components/visits/checkInForm'

import checkIn from '../actions/visits/checkIn'
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

    render() {
        const {business, visits} = this.props
        return (
            <Container>
                <Row>
                    <Col><CheckInForm business={business} handleCheckIn={this.handleCheckIn}/></Col>
                    { !!visits.length ? <Col><CurrentVisitorsList business={business} visits={visits} /></Col> : null }
                </Row>
            </Container>
        )
    }
}

const mapStateToProps = ({business, errors, visits}) => {
    return {business, errors, visits}
}

export default connect(mapStateToProps, {fetchVisits, checkIn})(VisitsPage)