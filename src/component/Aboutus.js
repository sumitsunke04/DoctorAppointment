import './Aboutus.css'

const Aboutus = () => {
    return (

            <main>
                <section class="about-hero">

                    <h1>About Us</h1>
                    <p>We are a leading provider of hospital management systems, helping healthcare organizations
                        streamline
                        their operations and improve patient care.</p>

                </section>


                <section class="about-mission">
                    <div class="about-mission-container">
                        <h1>Our Mission</h1>
                        <hr />
                        <p>Our mission is to empower healthcare providers with advanced technology solutions that enhance their
                            ability to deliver high-quality care to patients. We strive to be a trusted partner to
                            healthcare
                            organizations, providing them with innovative tools that help them   to
                            achieve
                            their goals.</p>
                    </div>
                </section>
                <section class="about-team">
                    <div class="about-team-container">
                        <h1>Our Team</h1>
                        <hr />
                        <p>Our team is made up of experienced professionals with diverse backgrounds in healthcare, technology,
                            and

                            business. We are dedicated to staying at the forefront of the industry and leveraging the latest
                            advances in technology to deliver cutting-edge solutions to our clients.
                        </p>
                    </div>
                </section>



                <section class="about-contact">
                    <div class="about-contact-container">
                        <h2>Contact Us</h2>
                        <hr />
                        <span>

                            {/* <!-- insert insta link here --> */}
                            <a href="https://www.codechef.com/">
                                <i class="fa fa-instagram insta"></i>
                            </a>
                        </span>
                        <span>

                            {/* <!-- insert linkedin link here --> */}
                            <a href="https://www.codechef.com/">
                                <i class="fa fa-linkedin-square li"></i>
                            </a>
                        </span>

                        <span>

                            {/* <!-- insert facebook link here --> */}
                            <a href="https://www.codechef.com/">
                                <i class="fa fa-facebook-official face"></i>
                            </a>
                        </span>
                        <span>

                            {/* <!-- insert telegram link here --> */}
                            <a href="https://www.codechef.com/"><i class="fa fa-telegram"></i>
                            </a>
                        </span>
                    </div>
                </section>
            </main>


    );
}

export default Aboutus;