// import React, { useEffect, useState } from "react";
// import Modal from "react-bootstrap/Modal";
// import AddIcon from "@mui/icons-material/Add";
// import RemoveIcon from "@mui/icons-material/Remove";
// import { useLocation, useSearchParams } from "react-router-dom";
// const AddExtraModel = ({extraItems = [],selectFunction}) => {
//   console.log(extraItems);
//   const [show, setShow] = useState(false);
//   const handleClose = () => {
//     setModel({});
//     setShow(!show);}
//   const [model,setModel] = useSearchParams();
//   const parent = model.get("p");
  
//   useEffect(()=>{
//     if (model.get("model") === "addExtra") {
//      setShow(true);
    
//    }
//   },[model])
//   return (
//     <Modal
//       show={show}
//       onHide={() => handleClose()}
//       centered
//       className="text-black"
//     >
//       <Modal.Header closeButton className="py-1">
//         <h4> Add Extra</h4>
//       </Modal.Header>
//       <Modal.Body className="p-0 extraModelbody">
//         <div className="p-3">Add an extra your order.</div>
//         <div className="bg-black text-white">
//           {extraItems[parent].items.map((e, child) => (
//             <div className="d-flex justify-content-between p-3">
//               <div className="d-flex">
//                 {e.addExtra ? (
//                  <div onClick={()=> selectFunction(parent,child,1)}> <RemoveIcon className="btn-circle"/></div>
//                 ) : ( 
//                 <div onClick={()=> selectFunction(parent,child,1)}> <AddIcon className="btn-circle" /></div> 
//                )} 
//                 &#160;&#160;
//                  {e.name} 
//               </div>
//              <span>{e.extraPrice && "+$ " + e.extraPrice}</span> 
//             </div>
//            ))} 
//         </div>
//       </Modal.Body>
//        {/* <Modal.Footer></Modal.Footer>  */}
//     </Modal>
//   );
// };

// export default AddExtraModel;
import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
const AddExtraModel = ({ show, handleClose, extraItems = [], parent,selectFunction }) => {
  useEffect(()=>{
    console.log("effec Add Extra Model");
  })
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
