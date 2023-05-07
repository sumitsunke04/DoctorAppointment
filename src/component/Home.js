import './Home.css';
import quick from './Quick response.jpg';
import quality from './Img/quality.png';
import sati from './Img/satisfaction2.jpg';
import doctor from './Img/doctor.jpg'



const Home = () => {
  return (
    

    <main>
      <div class="intro">
        <h1>Your Health Consultant</h1>
        <p>"Your health is our priority: Book your appointment with ease."</p>
        <button >Book Appointment</button>
      </div>
      <div>
        <h1 class ="whychoose ">Why Choose Us ?</h1>
      </div>
      <div class="achievements">
        <article class="card">
          <img class="card-image" src={quick} alt="QR code" />
          <section class="text-wrapper">
            <h1 class="card-title">QUICK RESPONSE</h1>
            <p class="card-text">
              "Book your doctor appointment hassle-free with just a few clicks
              on our user-friendly website. Get the care you need when you need
              it, without any wait times."
            </p>
          </section>
        </article>
        <article class="card">
          <img
            class="card-image"
            src={sati}
            alt="100 % SATISFACTION"
          />
          <section class="text-wrapper">
            <h1 class="card-title">100 % SATISFACTION</h1>
            <p class="card-text">
              "Book your doctor appointment with ease and get the care you need,
              guaranteed satisfaction."
            </p>
          </section>
        </article>
        <article class="card">
          <img class="card-image" src={quality} alt="quality" />
          <section class="text-wrapper">
            <h1 class="card-title">QUALITY SERVICE</h1>
            <p class="card-text">
              "Experience top-notch quality service when you book your doctor
              appointment through our website."
            </p>
          </section>
        </article>
      </div>
      <div class="about-me">
        <div class="about-me-text">
          <h2 >About Our Doctors</h2>
        </div>
      </div>
      <div class="Profile-card">
        <img src={doctor} alt="doctor"  />
        <h1>Dr. XYZ</h1>
        <p class="title">MBBS , MD </p>
        <p>BJMC-Pune</p>
        <a href="#"><i class="fa fa-dribbble"></i></a>
        <a href="#"><i class="fa fa-twitter"></i></a>
        <a href="#"><i class="fa fa-linkedin"></i></a>
        <a href="#"><i class="fa fa-facebook"></i></a>
        <p><button class="Contact-Button">Contact</button></p>
      </div>
    </main>
    



  );
}

export default Home;