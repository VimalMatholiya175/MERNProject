import React, { useContext } from 'react'
import GroupContext from '../../contexts/group/GroupContext';

export default function MemberItem(props) {

    const { currentGroup } = useContext(GroupContext);

    const findImageText = () => {
        let arr = props.name.split(" ");
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
          <div className="d-flex align-items-center" style={{ height: '65px' }}>
              <h5 className="user-img">{findImageText()}</h5>
              <h6 className="my-auto">{props.name}</h6>
              <h6 className="mx-5 text-primary my-auto">{currentGroup.owner === props.id ? 'admin' : ''}</h6>
          </div>
      </>
  )
}
