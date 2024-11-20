import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function Main({login, id, avatar_url, html_url, removeUser}) {
  return (
    <>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={avatar_url} />
      <Card.Body>
        <Card.Title>{login}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">
            <a href={html_url} target="_blank" className="text-white text-decoration-none">Profile Link</a></Button>
        <Button variant="danger" className='ml-2' onClick={()=>{removeUser(id)}}>Delete</Button>
      </Card.Body>
    </Card>
   </>
  )
}
export default Main