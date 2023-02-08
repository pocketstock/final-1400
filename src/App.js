import team from './team.PNG'

function App() {
  return (
    <div className="App">
      <div className='header-container'>
          <div className='header-text'>
            <h1><i>STRANGERZ</i></h1>
          </div>
          <div className='header-text'>
            <p><i>GLOBAL ENGINEERING</i></p>
          </div>
      </div>
      <div className='content-container'>
        <div className='content-wrapper'>
          <div className='who-container'>
            <h1>Who We Are</h1>
            <p>We are team of engineers from all around the globe that strives to make technologies that help connect people. We have members from the east coast, west coast, peru, and mexico as well as right here in Colorado. We are a full stack engineering development team that can fit any of your needs.</p>
          </div>
        </div>
        <div className='who-container'>
          <h1>What We Do</h1>
          <p>Our mission statement is to engineer new technologies that help connect the world. We believe that the world is a better place when you are connected. </p>
        </div>
        <div className='meet-container'>
          <h1>Meet The Team</h1>
          <img src={team} ></img>
          <div className='person'>
            <div className='name'>
              <h1>Aiden</h1>
              <p>AEROSPACE ENGINEERING</p>
            </div>
            <div className='blurb'>
              <p>Aiden was born in Boston Massachusetts and is pursing a degree in Aerospace Engineering.</p>
            </div>
          </div>
          <div className='person'>
            <div className='name'>
              <h1>Diego</h1>
              <p>AEROSPACE ENGINEERING</p>
            </div>
            <div className='blurb'>
              <p>Diego was born in Mexico and is pursing a degree in Aerospace Engineering.</p>
            </div>
          </div>
          <div className='person'>
            <div className='name'>
              <h1>Nicole</h1>
              <p>AEROSPACE ENGINEERING</p>
            </div>
            <div className='blurb'>
              <p>Diego was born in Mexico and is pursing a degree in Aerospace Engineering.</p>
            </div>
          </div>
          <div className='person'>
            <div className='name'>
              <h1>Becca</h1>
              <p>AEROSPACE ENGINEERING</p>
            </div>
            <div className='blurb'>
              <p>Diego was born in Mexico and is pursing a degree in Aerospace Engineering.</p>
            </div>
          </div>
          <div className='person'>
            <div className='name'>
              <h1>Frank</h1>
              <p>AEROSPACE ENGINEERING</p>
            </div>
            <div className='blurb'>
              <p>Diego was born in Mexico and is pursing a degree in Aerospace Engineering.</p>
            </div>
          </div>
        </div>
        
        <div className='who-container'>
          <h1>Contact Us</h1>
          <p>Contact us for business inquiries at</p>
          <br></br>
          <p>engineering@strangerz.com</p>
          <p>953-5213-5214</p>
        </div>
        <div className='footer'>
          <p>Copyright never. This is a fake website for a project. Strangerz, Strangerz Engineering, and any other related information is made up. </p>
        </div>
      </div>
    </div>
  );
}

export default App;
