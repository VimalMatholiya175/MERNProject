import React from 'react'

export default function GroupItem(props) {
    const findImageText = () => {
        let arr = props.groupName.split(" ");
        let imageText;
        if(arr.length == 1){
            imageText = arr[0][0];
        }
        else{
            imageText = arr[0][0] + arr[1][0];
        }
        return imageText.toUpperCase();

    }
    return (
        <>
            <div id={props.groupId} className="h d-flex align-items-center">
                <h5 className="group-img">{findImageText()}</h5>
                <h6 className="my-auto">{props.groupName}</h6>
            </div>
        </>
    )
}
