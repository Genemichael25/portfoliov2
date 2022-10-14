import React from 'react'

const Savannah = () => {
  return (
    <>
    <h2>Savannah Tinder</h2>
      <h4>What is it?</h4>
      <div className='info'>
        <p>Similar to another popular app, but for animals! This is two separate applications, a React frontend to handle the views and a Rails API that handles the data.
        <br/>
        </p>
      </div>
      <h4>Features</h4>
      <div className='features'>
        <p style={{marginRight:"50px"}}> One of the main features of our app was to allow users to view others. Our meet our members link takes you to a page where all users are displayed with there image, name and age. Someone catch your eye? Click About Me and find out more!</p>
        <img src='/STindex.png' alt='ST index' width="45%" />
      </div>
      <div className='features'>
        <img src='/STshow.png' alt='ST show' width="45%" />
        <p>Once a user wants more information about a certain member, they are taken to a page where only that member is displayed. By using string interpolation, we can give a friendly intro about that member and what they enjoy doing. A members info can also be updated or deleted from this page.</p>
      </div>
      <h4>Challenges & Lessons Learned</h4>
      <div className='info'>
        <li>Styling prebuilt components doesn't always go as planned.</li>
        <p><strong>Learned:</strong> Some components didn't respond to styling applied in App.css file. We were able to get the look we wanted by using some inline styling.</p>
      </div>
    </>
  )
}

export { Savannah }