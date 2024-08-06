
import React from "react";
import Modal from "react-bootstrap/Modal";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
const AddExtraModel = ({ show, handleClose, extraItems = [], parent,selectFunction }) => {
 
  return (
    <Modal
      show={show}
      onHide={() => handleClose()}
      centered
      className="text-black"
    >
      <Modal.Header closeButton className="py-1">
        <h4> Add Extra</h4>
      </Modal.Header>
      <Modal.Body className="p-0 extraModelbody">
        <div className="p-3">Add an extra your order.</div>
        <div className="bg-black text-white">
          {extraItems.map((e, child) => (
            <div className="d-flex justify-content-between p-3" key={child}>
              <div className="d-flex">
                {e.addExtra ? (
                 <div  onClick={()=>selectFunction(parent,child,1)}> <RemoveIcon className="btn-circle"/></div>
                ) : (
                <div  onClick={()=>selectFunction(parent,child,1)}> <AddIcon className="btn-circle" /></div> 
                )}
                &#160;&#160;
                {e.name}
              </div>
              <span>{e.extraPrice && "+$ " + e.extraPrice}</span>
            </div>
          ))}
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default AddExtraModel;
