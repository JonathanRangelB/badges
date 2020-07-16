import React from "react";
import Modal from "./Modal";

function DeleteBadgeModal(props) {
  return (
    <Modal onClose={props.onClose} isOpen={props.isOpen}>
      <h1>Are you sure?</h1>
      <p>You cannot recover the information once deleted</p>
      <div>
        <button onClick={props.onClose} className="btn btn-primary mr-4">
          Cancel
        </button>
        <button onClick={props.onDeleteBadge} className="btn btn-danger">
          Delete
        </button>
      </div>
    </Modal>
  );
}

export default DeleteBadgeModal;
