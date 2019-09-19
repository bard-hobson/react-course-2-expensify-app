import React from 'react';
import Modal from 'react-modal';

const RemoveExpenseModal = (props) => (
    <Modal
        isOpen={!!props.modelOpen}
        onRequestClose={props.handleNoOption}
        contentLabel="Remove Expense"
        closeTimeoutMS={200}
        className="modal"
        ariaHideApp={false}
    >
        <h1 className="modal__title">Do you want to remove the below expense?</h1>
        <p className="modal__body">Add below expense here</p>
        <button className="button" onClick={props.handleNoOption}>Keep Expense</button>
        <button className="button button--red" onClick={props.handleYesOption}>Delete Expense</button>
        
    </Modal>    
); 

export default RemoveExpenseModal;