import React, {useState, useEffect} from 'react';

import MeetupList from '../components/meetups/MeetupList';

const DUMMY_DATA = [
  {
    id: 'm1',
    title: 'This is a first meetup',
    image:
      'https://images.unsplash.com/photo-1604745055299-ea7488126d9b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1075&q=80',
    address: 'Meetupstreet 5, 12345 Meetup City',
    description:
      'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
  },
  {
    id: 'm2',
    title: 'This is a second meetup',
    image:
      'https://images.unsplash.com/photo-1602797882193-51cb0e037534?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZHVibGlufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    address: 'Meetupstreet 5, 12345 Meetup City',
    description:
      'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
  },
];

const AllMeetup = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([])

  useEffect(() => {
    setIsLoading(true);
    fetch('https://react-meetup-app-2b82f-default-rtdb.europe-west1.firebasedatabase.app/meetups.json')
    .then(res => {
      return res.json();
    })
    .then(data => {
      const meetups = [];
      for (const key in data) {
        const meetup = {
          id: key,
          ...data[key]
        }
        meetups.push(meetup);
      }
      setIsLoading(false);
      setLoadedMeetups(meetups);
    });
  }, [])

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    )
  }

  return (
    <section>
      <MeetupList meetups={loadedMeetups} />
    </section>
  )
}

export default AllMeetup
