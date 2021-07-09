import React from 'react';
import Tour from './Tour';
const Tours = ({data, removeItem}) => {
  // console.log(data)
  return (
    <section >
        <div className='title'>
          <h2>our tour</h2>
          <hr className='underline'/>
        </div>
        {
          data.map((items) => {
            return <Tour key={items.id} {...items} removeData={removeItem}/>
          })
        }
        
    </section>
  )
};

 export const Notour = ({getTours}) => {
  return(
    <main>
      <h1>No More Tours</h1>
      <button className='reload' onClick={getTours}>Get Tours</button>
    </main>
  )
}
export default Tours;
