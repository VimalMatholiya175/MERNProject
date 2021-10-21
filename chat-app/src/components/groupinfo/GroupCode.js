import React, { useContext } from 'react'
import GroupContext from '../../contexts/group/GroupContext'
import UserContext from '../../contexts/user/UserContext'

export default function GroupCode(props) {

    const { currentGroup } = useContext(GroupContext);
    const { user } = useContext(UserContext);

    const handleOnClick = () => {
        navigator.clipboard.writeText(currentGroup.groupCode);
        props.setIsCoppied(true);
    }

    return (
        <>
            {user._id === currentGroup.owner &&
                <div className="mb-4">
                    <h6 className="text-light rounded-3 p-2 mb-3" style={{ backgroundColor: '#2f2d52' }}>Group Code</h6>
                    <div className="d-flex justify-content-between mx-3 border rounded-3 p-2">
                        <span>{currentGroup.groupCode}</span>
                        {!props.isCoppied && <i className="far fa-copy my-auto" onClick={handleOnClick}></i>}
                        {props.isCoppied && <i className="fas fa-copy my-auto"></i>}
                    </div>
                </div>
            }
        </>
    )
}
