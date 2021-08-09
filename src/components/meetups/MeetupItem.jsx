import React from 'react';

import classes from './MeetupItem.module.css';

const MeetupItem = (props) => {
  return (
    <li className={classes.item}>
      <div className={classes.image}>
        <img src={props.image} alt={props.title} />
      </div>
      <div className={classes.content}>
        <h2>{props.title}</h2>
        <address>{props.address}</address>
        <p>{props.description}</p>
      </div>
      <div>
        <button className={classes.actions}>Add to Favorites</button>
      </div>
    </li>
  )
}

export default MeetupItem
