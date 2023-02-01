import React,{ useState} from 'react'
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import './HomeModal.scss'

const style = {
  position: "absolute" ,
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 776,
  height:598,
  bgcolor: "background.paper",
  border: "2px solid #000",
  borderRadius:'20px',
  boxShadow: 24,
  p: 4,
  padding:' 64px',

  zoom: '90%',
    


};
const HomeModal = () => {
  const [open, setOpen] =  useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    
         <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h3 className='modal-h3'>
          Save One Day Every Week!
          </h3>
          <p className='modal-p'>
          We analyzed the time saved by over 4,000 teams after 
          switching to ClickUp to manage their projects. That's
           52 days back every year!
          </p>
          <div className='modal-div'>
          <input type="text" placeholder='Your Email Address*' className='modal-input' />
          <button className='modal-button'>Save a Day</button>
          </div>
          <p className='modal-close'  onClick={handleClose}>No, I don't want to save my time</p>
          
          <div className="modal-footer">
              
                    <div><img src="https://staging.postlater.io/assets/landing/img/modal-platform-webwork.svg"/></div>
                    <div><img src="https://staging.postlater.io/assets/landing/img/modal-platform-programmer.svg"/></div>
                    <div><img src="https://staging.postlater.io/assets/landing/img/modal-platform-kiwi.svg"/></div>
                    
            </div>
            
            <img src="https://staging.postlater.io/assets/landing/img/icon-ellipse-2.svg" className="modal-icon-1"></img>
            <img src="https://staging.postlater.io/assets/landing/img/icon-square-6.svg" className="modal-icon-2"></img>
            <img src="https://staging.postlater.io/assets/landing/img/icon-polygon-1.svg" className="modal-icon-3"></img>
            <img src="https://staging.postlater.io/assets/landing/img/icon-square-6.svg" className="modal-icon-4"></img>

        </Box>
        </Modal>
    
  )
}

export default HomeModal;