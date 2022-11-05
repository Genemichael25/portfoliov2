import React from "react";

const ApartmentApp = () => {
  return (
  <>
    <h4>What is it?</h4>
    <div>
      <div className='info'>
        <p>Looking for the next place to call home? Check out the listings on this Apartment App!
        <br/>
        </p>
        <p>
        We used the gem devise for user authentication for this app. By signing in, the user is able to create a listing that displays for anyone, regardless if they are signed in or not.  
        </p>
      </div>
    </div>
      <h4>Features</h4>
      <div className='features'>
        <p style={{marginRight:"50px"}}> Someone using the app can see all the listings that are currently available and some of the information upfront, such as price, location, bedrooms and bathrooms. They are able to see more information by clicking on more details. This redirects them to a view which includes if pets are accepted and the manager of that listing, along with contact information. </p>
        <img src='/RecentListings.png' alt='ST index' width="35%" />
      </div>
      <div className='features'>
        <img src='/SingleApt.png' alt='ST show' width="35%" />
        <p style={{marginLeft:"50px"}}>A user is able to select a listing and if they are the owner of that listing, they are given two additional options of updating or deleting the listing. We accomplished this by using conditional rendering in which we check if the primary key matches the foreign key in the models that are associated.</p>
      </div>
  </>
  )
}

export { ApartmentApp };
