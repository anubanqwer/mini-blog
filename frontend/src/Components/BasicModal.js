import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  height: 200,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({type, addNewBlogAPI, userData}) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false)
    setName('')
    setStatus('')
    setCategory('')
    setContent('')
  };

  const [name, setName] = useState('')
  const [status, setStatus] = useState('')
  const [category, setCategory] = useState('')
  const [content, setContent] = useState('')

  const addNewBlog = () => {
    addNewBlogAPI({
      name: name,
      status: status,
      category: category,
      content: content,
      author: userData.username,
      userId: userData._id
    })
    handleClose()
  }

  const editBlog = () => {
    
  }

  return (
    <div>
      <Button onClick={handleOpen}>{type === 'add' ? 'add new blog' : 'Open modal'}</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)}/>
          <br />
          <label htmlFor="status">Status:</label>
          <input type="text" id="status" value={status} onChange={(e) => setStatus(e.target.value)}/>
          <br />
          <label htmlFor="category">Category:</label>
          <input type="text" id="category" value={category} onChange={(e) => setCategory(e.target.value)}/>
          <br />
          <label htmlFor="content">Content:</label>
          <input type="text" id="content" value={content} onChange={(e) => setContent(e.target.value)} />
          <br />
          <button onClick={type === 'add' ? addNewBlog: editBlog}>Add</button>
          <button onClick={handleClose}>Cancel</button>       
        </Box>
      </Modal>
    </div>
  );
}