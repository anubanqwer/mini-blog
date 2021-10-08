import { useState } from 'react';
import Box from '@mui/material/Box';
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

export default function BasicModal({type, addNewBlogAPI, editBlogAPI, userData, jsonObject}) {
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
    if(name==='' || status==='' || category==='' || content===''){
      alert('please fill all fields')
      return
    }
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

  const editBlog = async () => {
    if(name==='' && status==='' && category==='' && content===''){
      handleClose()
      return
    }
    var obj = {}
    if(name !== ''){
      Object.assign(obj, {name: name})
    }
    if(status !== ''){
      Object.assign(obj, {status: status})
    }
    if(category !== ''){
      Object.assign(obj, {category: category})
    }
    if(content !== ''){
      Object.assign(obj, {name: content})
    }
    Object.assign(obj, {_id: jsonObject._id})
    editBlogAPI(obj)
    handleClose()
  }

  return (
    <div>
      <button onClick={handleOpen}>{type === 'add' ? 'add new blog' : 'Edit'}</button >
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
          <button onClick={type === 'add' ? addNewBlog: editBlog}>{type==='add' ? 'Add': 'Edit'}</button>
          <button onClick={handleClose}>Cancel</button>       
        </Box>
      </Modal>
    </div>
  );
}
