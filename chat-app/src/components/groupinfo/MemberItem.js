import React, { useContext } from 'react'
import GroupContext from '../../contexts/group/GroupContext';

export default function MemberItem(props) {

    const { currentGroup } = useContext(GroupContext);

    return (
      <>
          <div className="d-flex align-items-center" style={{ height: '65px' }}>
              <div className="user-img">
                <i className="fas fa-user" style={{color: 'white'}}></i>
              </div>
              <h6 className="my-auto">{props.name}</h6>
              <h6 className="mx-5 text-primary my-auto">{currentGroup.owner === props.id ? 'Owner' : ''}</h6>
          </div>
      </>
  )
}
