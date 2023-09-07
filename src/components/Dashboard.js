import React, { useEffect, useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Typography, Box } from '@mui/material';
import { useNavigate, useParams} from 'react-router-dom';
import Fab from '../components/FAB';
import { FcAbout, FcBusinessman, FcCamera, FcFullTrash,FcOpenedFolder } from "react-icons/fc";
import { v4 as uuidV4 } from 'uuid';
import Data from './Profile-card/Data';
import ProfileCard from './Profile-card/Profile-card';
import './dialog.css'
import {initSocket} from '../socket'

const Dashboard = () => {
  const [token, setToken] = useState('');
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [documentName, setDocumentName] = useState('');
  const [documentCode, setDocumentCode] = useState('');
  const navigate=useNavigate();
  const dynamicUuid = uuidV4();
  const [socket, setSocket] = useState(null);
  const [files, setFiles] = useState([]); 

  const user_name = localStorage.getItem("jwtToken");
  const user_mail = localStorage.getItem("jwtToken1")



  const handleCreateDocument = () => {
    setOpen(true);
  };

  const handleDialogClose = () => {
    setOpen(false);
  };

  const handleDocumentCode=()=>{
    setOpen1(true)
  }

  const handleDialogClose1 = () => {
    setOpen1(false);
  };

  const handleCreateDocumentConfirm = () => {
    console.log(dynamicUuid,",",documentName)
    navigate(`/document/${dynamicUuid}?name=${encodeURIComponent(documentName)}`);
  };

  const handleEnterDocumentConfirm=()=>{
    navigate(`/document/${documentCode}`)
  }

  useEffect(() => {
    const storedToken = localStorage.getItem("jwtToken");
    setToken(storedToken);

    const initSocketConnection = async (storedToken) => {
      const s = await initSocket(storedToken); 
      setSocket(s);

      s.on('docslist', (receivedFiles) => {
        console.log('Received files:', receivedFiles);
        setFiles(receivedFiles); 
      });


      return s;
    };

    initSocketConnection(storedToken);

    
    return () => {
      if (socket) {
        socket.disconnect();
      }
    };


  }, []);

  useEffect(() => {
    if (socket == null) return;

    socket.emit('don', user_name);
    // const bucketName = removeDomain(user_mail)
    // socket.emit("creationReq",bucketName)
  }, [socket]);

  const drive=()=>{
    navigate('/workdrive')
  }

  const jkl=()=>{
    localStorage.removeItem('jwtToken');
    localStorage.removeItem('jwtToken1');
    navigate('/logster')
}


  const actions = [
    // { label: "Work Drive", icon: <FcOpenedFolder />, onClick: drive}, 
    { label: "Log Out🏃‍♀️", icon: <FcFullTrash />, onClick: jkl },  
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',paddingBottom:'5%',}}>
          <div className="background">
      <ProfileCard
        name={token}
        mail={user_mail}
        onCreateDocumentClick={handleCreateDocument}
        onEnterDocumentClick={handleDocumentCode}
      ></ProfileCard>
    </div>
      <Fab actions={actions} />
      <Data files={files} /> 
      <Box height={'vh'}>

      </Box>
      <Dialog open={open} onClose={handleDialogClose} className='fancy-dialog'>
        <DialogTitle>Create a Document</DialogTitle>
        <DialogContent>
          <DialogContentText>Enter the document name:</DialogContentText>
          <input type="text" value={documentName} onChange={(e) => setDocumentName(e.target.value)} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose}>Cancel</Button>
          <Button onClick={handleCreateDocumentConfirm} color="primary">
            Create
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog open={open1} onClose={handleDialogClose1} className='fancy-dialog'>
        <DialogTitle>Enter the Document Code</DialogTitle>
        <DialogContent>
          <DialogContentText>Collaboration code</DialogContentText>
          <input type="text" value={documentCode} onChange={(e) => setDocumentCode(e.target.value)} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose1}>Cancel</Button>
          <Button onClick={handleEnterDocumentConfirm} color="primary">
            Collaborate
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Dashboard;
