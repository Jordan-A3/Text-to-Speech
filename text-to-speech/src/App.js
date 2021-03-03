import React, {useEffect, useState} from 'react'
import './App.css';

function App() {

  const [comments,setComments] = useState([])
  const [comment, setComment] = useState('')

  useEffect(() => {
    const getComments = () => {
      return fetch('http://localhost:3333/comments', {method: "GET"})
        .then(function(response) {
            return response.json()
        })
        .then(function(response) {
            console.log(response)
            setComments(response)
            
        })
    }
    getComments()
  }, [])

  function registerComments() {
    let dados = {
      comment
    }
    return fetch('http://localhost:3333/comment', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(dados)
    })
  }

  function playComment(id){
      fetch(`http://localhost:3333/play/${id}`)
      .then(function(response){
        const audio = new Audio( `http://localhost:3333/comment-audio-${id}.wav`)
        audio.play()
      })
  }

  function deleteComment(id){
    fetch(`http://localhost:3333/comments/${id}`, {method: 'DELETE'})
  }
  
  return ( 
    <div className="body" > 
      <div className="comment" >
        <h1>Comentário</h1>
        <textarea 
            placeholder="Seu Comentário" 
            value={comment}
            onChange={e => setComment(e.target.value)}
        />
        <button onClick={() => registerComments()}>Cadastrar</button>
        
        
      </div>

      <div className="comments">
        <h1>Comentários</h1>
        
        <ul id="list" >
          {comments.map(comment => (
            <div key={comment.id} >
              <strong>{comment.comment}</strong>
              <button onClick={() => playComment(comment.id)}>PLAY</button>
              <button style={{ backgroundColor: 'red', color: '#fff'}} onClick={() => deleteComment(comment.id)}>DELETE</button>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
