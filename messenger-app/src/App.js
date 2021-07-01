
import React , {useState, useEffect} from 'react';
import './App.css';
import {Button, FormControl, InputLabel, Input } from '@material-ui/core';
import Message from './components/Message';
import db from './firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import { Send } from '@material-ui/icons';
import { IconButton } from '@material-ui/core';

function App() {

  const [userName,setUserName] = useState('');
  const [input,setInput] = useState('');
  const [messages,setMessages] = useState([]);

  useEffect(() => {
    db.collection('messages')
    .orderBy('timestamp','desc').onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc => ({id : doc.id , message : doc.data()})))
    });
  }, []);


  useEffect(() => {
    setUserName(prompt('Please enter your name'));
  }, [])

  const sendMessage = (event) => {
    event.preventDefault();
    db.collection('messages').add({
      message: input ,
      username: userName,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    });
    setInput('');
  }

  return (
    <div className="App">
      <h1>yo {userName}</h1>
      <form className="app__form">
      <FormControl className="app__formControl">
        <Input className='app__input' placeholder='Enter a message' value={input} onChange = {e => setInput(e.target.value)} />
        <IconButton className='app__iconButton' disabled={!input} type='submit' variant="contained" color="primary" onClick={sendMessage} >
          <Send/>
        </IconButton>
      </FormControl>
      </form>

      <FlipMove>
      {
        messages.map(({id , message}) => (
          <Message key ={id} message={message} userName={userName}/>
        ))
      }
      </FlipMove>
    </div>
  );
}

export default App;
