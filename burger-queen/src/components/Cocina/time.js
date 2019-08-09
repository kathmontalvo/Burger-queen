import React from 'react';
import Moment from 'react-moment';


export default ({ timer }) => {
  return (
    <Moment interval={1000}>
      {timer}
    </Moment>
  )
}