import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import ActiveVisit from '../components/visits/ActiveVisit'

class CurrentVisitorsList extends React.PureComponent {
    componentDidMount() {
        this.props.fetchVisits()
    }

    renderVisits(visits) {
        return visits.map(visit => {
            return <ActiveVisit visit={visit} key={visit.id} handleCheckOut={this.props.handleCheckOut} />
        })
    }

    render() {
        const {visits} = this.props
        return(
            <>
                <h1 className="text-center">VISITORS</h1>
                <br></br>
                <ListGroup>
                    {this.renderVisits(visits)}
                </ListGroup>
            </>
        )
    }
}

export default CurrentVisitorsList