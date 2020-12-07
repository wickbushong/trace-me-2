import React from 'react'

import Accordion from 'react-bootstrap/Accordion'

import ReportVisit from './ReportVisit'

const ReportVisitList = ({report}) => {

    const renderVisits = flaggedVisits => {
        return flaggedVisits.map(visit => {
            return <ReportVisit key={visit.id} visit={visit} />
        })
    }
    
    return (
        <>
            <h1 className="text-center">FLAGGED VISITS</h1>
            <Accordion>
                {renderVisits(report.flag_visits)}
            </Accordion>
        </>
    )
}

export default ReportVisitList