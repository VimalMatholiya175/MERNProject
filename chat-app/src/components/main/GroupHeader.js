import React, { useContext } from 'react'
import GroupContext from '../../contexts/GroupContext'
import { Link } from 'react-router-dom'

export default function GroupHeader() {
    
    const { currentGroup } = useContext(GroupContext);

    const findImageText = () => {
        let arr = currentGroup.groupName.split(" ");
        let imageText;
        if (arr.length === 1) {
            imageText = arr[0][0];
        }
        else {
            imageText = arr[0][0] + arr[1][0];
        }
        return imageText.toUpperCase();

    }

    return (
        <>
            <div className="d-flex align-items-center justify-content-between" style={{ backgroundColor: '#5c5a8c',height: '9%', color: 'white' }}>
                <div className="d-flex align-items-center">
                    <h5 className="group-img">{findImageText()}</h5>
                    <h5 className="my-auto">{currentGroup.groupName}</h5>
                </div>
                <Link className="bg-transparent" to="/groupinfo">
                    <i className="fa fa-info-circle mx-3" style={{ fontSize: '28px', color: 'lightgrey' }}></i>
                </Link>
            </div>
        </>
    )
}
