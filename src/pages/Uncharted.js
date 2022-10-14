import React from 'react'

const Uncharted = () => {
  return (
    <>
    <h2>Uncharted</h2>
    <a href='https://thawing-oasis-45194.herokuapp.com/' target="_blank" rel="noreferrer" title='Uncharted' style={{marginLeft:"48%"}}><h5 >Live Link</h5></a>
    <h4>What is it?</h4>
    <div className='info'>
      <p>Revisiting trip highlights and those carefree moments has never been easier! For the first time ever, avid or aspiring travelers can now archive previous trips using photos and personal details. 'Uncharted' combines travel mapping and the art of journaling into an interactive life story experience. Document old memories, while creating new ones all in place! So whether you want a way to keep track of already visited destinations, searching for location inspiration, or are looking for resources on how to make traveling less complicated and more affordable; 'Uncharted' has your back.
      <br/>
      </p>
      <p>
      This is a React in Rails application with full CRUD functionality. We used the gem devise for user authentication and have 2 database tables. We planned, organized a work flow for the team and built wireframes before coding began, during which we practiced Test Driven Development. We are proud to present 'Uncharted'!
      </p>
    </div>
    <h4>Features</h4>
    <div className='features'>
      <p style={{marginRight:"50px"}}>One of the pages we incorporated into our app is a display of the Seven Wonders of the world. Our intention was to inspire people to get out there and explore by displaying these beautiful locations in an automated carousel, that also allows for user interaction. </p>
      <img src='/Wonders.gif' alt='wonders gif' width="45%" />
    </div>
    <div className='features'>
      <img src='/RandomTrip.gif' alt='random gif' width="45%" />
      <p>For a logged in user, we included the option of randomizing a trip. The user is able to click on a button and see a random location generated for them with a beautiful image and a name. Perfect for those travelers that love being spontaneous and its a good starting point for the next trip! </p>
    </div>
    <h4>Challenges & Lessons Learned</h4>
    <div className='info'>
      <li>Finding an external API that would generate a random location and provide an image and name at a minimum.</li>
      <p><strong>Learned:</strong> Doing research and finding an API that will provide you with the endpoints that you need takes time. We were able to still implement the feature that we desired, but we had to create our own data. We then used Math.random to select a random index in our array and display the pertinent information to the user.</p>
    </div>
    </>
  )
}

export { Uncharted }