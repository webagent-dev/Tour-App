import React, { useState } from 'react';

const Tour = ({id, image, info, name, price, removeData}) => {
  const [readMore, setReadMore] = useState(false)
  // console.log(name, price, info)
  return (
    <article className='single-tour'>
      <img  src={image} alt={name}/>
     <div className='tour-info'>
       <h4>{name}</h4>
       <h4 className='tour-name'>{price}</h4>
     </div>
     <p>{readMore ? info : `${info.substring(0,200)}...` } <button onClick={() => setReadMore(!readMore)}>read more</button></p>
    <button className='delete-btn' onClick={() => removeData(id)}>not intrested</button>
      
    </article>
  );
};

export default Tour;
