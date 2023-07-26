import './Home.css';
import quick from './Quick response.jpg';
import quality from './Img/quality.png';
import sati from './Img/satisfaction2.jpg';
import doctor from './Img/doctor.jpg'
import img1 from '../doctor-doing-their-work-pediatrics-office.jpg';
import img2 from '../female-doctor-with-smart-glasses-touching-virtual-screen-medical-technology.jpg';
import img3 from '../medical-banner-with-doctor-wearing-goggles.jpg'


const Home = () => {
  return (






    // <main>
    //   <div class="intro">
    //     <h1>Your Health Consultant</h1>
    //     <p>"Your health is our priority: Book your appointment with ease."</p>
    //     <button >Book Appointment</button>
    //   </div>
    //   <div>
    //     <h1 class="whychoose ">Why Choose Us ?</h1>
    //   </div>
    //   <div class="achievements">
    //     <article class="card">
    //       <div class="text-wrapper">
    //         <h1 class="card-title">QUICK RESPONSE</h1>
    //         <p class="card-text">
    //           Book your doctor appointment hassle-free with just a few clicks
    //           on our user-friendly website. Get the care you need when you need
    //           it, without any wait times.
    //         </p>
    //       </div>
    //     </article>
    //     <article class="card">
    //       <div class="ctext-wrapper">
    //         <h1 class="card-title">100 % SATISFACTION</h1>
    //         <p class="card-text">
    //           Book your doctor appointment with ease and get the care you need,
    //           guaranteed satisfaction.
    //         </p>
    //       </div>
    //     </article>
    //     <article class="card">
    //       <div class="text-wrapper">
    //         <h1 class="card-title">QUALITY SERVICE</h1>
    //         <p class="card-text">
    //           Experience top-notch quality service when you book your doctor
    //           appointment through our website.
    //         </p>
    //       </div>
    //     </article>
    //   </div>

    //   <footer class="footer">
    //     <div class="footer-content">
    //       <p>&copy; 2023 Your Website. All rights reserved.</p>
    //     </div>
    //   </footer>

    // </main>






    /////////////////////////////////////////////////////////////////

    <>
      {/* <header>

          <ul class="hp-navbar">
            <li><a href="#">Home</a></li>
            <li><a href="#">Find Doctors</a></li>
            <li><a href="#">Appointments</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Patient Login</a></li>
            <li><a href="#">Doctor Login</a></li>
            <li><a href="#">Log Out</a></li>
          </ul>
        <img style="position:relative;border:3px solid rgb(40 47 84);border-radius:10px;right:-10%;width: 300px;height: 110px;" src="logofinal.jpg" alt=""/>
      </header> */}
      <main>
        <div class="hp-intro">
          <h1>Your Health Consultant</h1>
          <div class="hp-container">
            <p class="hp-text"> Empowering Hospitals for Seamless Patient Management</p>
          </div>

        </div>

        <div class="hp-achieve">
          <div class="hp-why">
            <h1 style={{textAlign:"center",fontWeight:"700"}}> Services we provide </h1>
          </div>
          <div class="hp-achievements">
            <article class="hp-card P-5">
              <div class="hp-text-wrapper">
                <h1 class="hp-card-title">QUICK RESPONSE</h1>
                <p class="hp-card-text">
                  Book your doctor appointment hassle-free with just a few clicks
                  on our user-friendly website. Get the care you need when you need
                  it, without any wait times.
                </p>
              </div>
            </article>
            <article class="hp-card">
              <div class="hp-ctext-wrapper">
                <h1 class="hp-card-title">100 % SATISFACTION</h1>
                <p class="hp-card-text">
                  Book your doctor appointment with ease and get the care you need,
                  guaranteed satisfaction.With our robust and user-friendly software and optimize your overall
                  hospital operations.
                </p>
              </div>
            </article>
            <article class="hp-card">
              <div class="hp-text-wrapper">
                <h1 class="hp-card-title">QUALITY SERVICE</h1>
                <p class="hp-card-text">
                  Experience top-notch quality service when you book your doctor
                  appointment through our website to empower hospitals for seamless patient management.
                </p>
              </div>
            </article>
          </div>
        </div>

      </main>


      <section id="about" class="about">
      <div class="container-fluid">

        <div class="row">
          <div class="col-xl-5 col-lg-6 video-box d-flex justify-content-center align-items-stretch position-relative">
            <a href="https://www.youtube.com/watch?v=e89J3eW4a24" class="glightbox play-btn mb-4"></a>
          </div>

          <div class="col-xl-7 col-lg-6 icon-boxes d-flex flex-column align-items-stretch justify-content-center py-5 px-lg-5">
            <h3>What are some facilities that set us apart from others ?</h3>
            <p>A user-friendly appointment booking system with seamless online booking, real-time availability, and automated reminders and notifications for improved efficiency and patient experience.</p>

            <div class="icon-box">
              <div class="icon"><i class="bx bx-fingerprint"></i></div>
              <h4 class="title">Seamless Online Booking</h4>
              <p class="description">Effortless scheduling of appointments online with preferred date, time, and healthcare professional.</p>
            </div>

            <div class="icon-box">
              <div class="icon"><i class="bx bx-gift"></i></div>
              <h4 class="title">Real time availability</h4>
              <p class="description">Instant display of doctors' availability for informed decision-making and avoiding scheduling conflicts.</p>
            </div>

            <div class="icon-box">
              <div class="icon"><i class="bx bx-atom"></i></div>
              <h4 class="title">Reminders and Notifications</h4>
              <p class="description"> Automated reminders and notifications for improved attendance, communication, and updates regarding appointments.</p>
            </div>

          </div>
        </div>

      </div>
    </section>



      <footer class="hp-footer mt-5">
        <div class="hp-f-container">
          <div class="hp-f-row">
            <div class="hp-footer-col">
              <h4>MedMate</h4>
              <ul>
                <li><a href="#">about us</a></li>
                <li><a href="#">our services</a></li>
                <li><a href="#">privacy policy</a></li>

              </ul>
            </div>

            <div class="hp-footer-col">
              <h4>Sevices</h4>
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Contact us</a></li>
                <li><a href="#">Feedback</a></li>

              </ul>
            </div>
            <div class="hp-footer-col">
              <h4>follow us</h4>
              <div class="hp-social-links">
                <a href="https://www.facebook.com/"><i class="fab fa-facebook-f"></i></a>
                <a href="#"><i class="fab fa-twitter"></i></a>
                <a href="#"><i class="fab fa-instagram"></i></a>
                <a href="#"><i class="fab fa-linkedin-in"></i></a>
              </div>
            </div>
          </div>

        </div>
        <div class="hp-copy">Copyright &copy; 2023 Developer</div>
      </footer>
    </>






  );
}

export default Home;