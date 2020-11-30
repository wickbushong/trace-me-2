import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
// import { connect } from 'react-redux'
import ActiveVisit from '../components/visits/ActiveVisit'
import Button from 'react-bootstrap/Button'

class CurrentVisitorsList extends React.PureComponent {
    componentDidMount() {
        this.props.fetchVisits()
    }

    renderVisits(visits) {
        return visits.map(visit => {
            return <ActiveVisit visit={visit} handleCheckOut={this.props.handleCheckOut} />
        })
    }

    render() {
        console.log(this.props)
        const {business, visits} = this.props
        return(
            <>
                <br></br>
                <h1 className="text-center">VISITORS</h1>
                <br></br>
                <ListGroup>
                    {this.renderVisits(this.props.visits)}
                </ListGroup>
            </>
        )
    }
}

export default CurrentVisitorsList