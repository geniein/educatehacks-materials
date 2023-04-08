import { Box, Divider, Typography } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import View from './View';
import Post from './Post';

export const ModalContainer = styled.div`  
  flex-flow: row wrep;
  justify-content: center;
  align-items: center;  
  z-index: 2000;
`;

export const ModalBtn = styled.button`
  background-color: #4000c7;
  text-decoration: none;
  border: none;
  padding: 20px;
  color: white;
  border-radius: 30px;
  cursor: grab;
`;

export const ModalBackdrop = styled.div`
  width: 100%;
  height:100%;
  position: fixed;
  display: flex;
  flex-flow: row wrep;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
`;

export const ModalView = styled.div`
  width: 50%;
  height: 80%;  
  text-decoration: none;
  padding: 30px 30px;
  background-color: white;
  border-radius: 30px;
  color: #000000;
  z-index: 2500;
`;

const Modal = ({openModal, onCloseModal, modalFlag, setModalFlag}) => {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef();
  const openModalHandler = () => {
    setIsOpen(!isOpen);
  };
  
  useEffect(() => {    
    if (openModal) {
      onCloseModal();
    }    
    // document.addEventListener('mousedown', handleClickOutside);
    // return document.removeEventListener('mousedown', handleClickOutside);
  },[])

  const handleClickOutside=(e)=>{
    if(e.target.className === modalRef.current.className)onCloseModal();
  }

  return (
    <>
      {openModal ? <ModalContainer>      
        <ModalBackdrop onClick={handleClickOutside} ref={modalRef}>
          {/* <Box sx={{ boxShadow: 3}} style={{width: '80%', height: '80%'}}> */}
          <ModalView >
          {modalFlag.flag =="VIEW" ? <View viewId={modalFlag.id}/> : <Post/>}
          
          </ModalView>
          {/* </Box> */}
        </ModalBackdrop>         
      </ModalContainer>
      : null}
    </>
  );
};

export default Modal