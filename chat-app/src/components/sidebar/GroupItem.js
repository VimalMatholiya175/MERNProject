import React from 'react'

export default function GroupItem(props) {
    return (
        <>
            <div id={props.groupId} className="h d-flex align-items-center">
                <h5 className="group-img">EM</h5>
                <h6 className="my-auto">{props.groupName}</h6>
            </div>
        </>
    )
}
