import Channels from "../Channels/Channels";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import  "./Home.css";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="home-wrapper">
        <div className="home-main">
          <h1>Welcome to Prime Video</h1>
          <p>Watch the latest movies, TV shows, and award-winning Amazon Originals</p>
          <button>Sign in join Prime</button>
        </div>
      </div>
      <div className="home-wrapper-2">
        <div className="home-main-2">
          <h1>Movie rentals on Prime Video</h1>
          <p>Early Access to new movies, before digital subscription</p>
          <button>Rent now</button>
        </div>
      </div>
      <Channels />
      <div className="home-wrapper-3">
        <div className="home-main-2">
          <h1>Movie rentals on Prime Video</h1>
          <p>Early Access to new movies, before digital subscription</p>
          <button>Rent now</button>
        </div>
      </div>
      <div className="home-wrapper-4">
        <div className="home-main">
          <h1>Family Friendlyo</h1>
          <p>With easy to use Parental Controls and a dedicated kids page, enjoy secure, ad-free kids entertainment. Kids can enjoy popular TV shows like Peppa Pig, Powerpuff Girls, and Chhota Bheem.</p>
          <button>Get Started</button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
 
export default Home;