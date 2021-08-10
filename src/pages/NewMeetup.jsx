import React from 'react'
import { useHistory } from 'react-router-dom';
import NewMeetupForm from '../components/meetups/NewMeetupForm'

const NewMeetup = () => {
  const history = useHistory();

  function addMeetupHandler(meetupdData) {
    fetch('https://react-meetup-app-2b82f-default-rtdb.europe-west1.firebasedatabase.app/meetups.json', {
      method: 'POST',
      body: JSON.stringify(meetupdData),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(() => {
        history.replace('/');
      }) 
  }

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler}/>
    </section>
  )
}

export default NewMeetup