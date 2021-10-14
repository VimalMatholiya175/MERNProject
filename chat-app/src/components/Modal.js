import React from 'react'

export default function Modal(props) {
  return (
    <>
      <div className="modal fade" id={props.id} tabIndex="-1" aria-labelledby="Group" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="Group">{props.title}</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <form className="modal-body">
                    {props.children}
                </form>

            </div>
        </div>
    </div> 
    </>
  )
}
