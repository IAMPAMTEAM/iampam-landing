import React from 'react';
import Navbar from './global-components/navbar-v2';
import PageHeader from './global-components/page-header';
import Contact from './section-components/contact-page';
import Footer from './global-components/footer-v2';
import Signup from './getstarted-components/signup';
import Login from './getstarted-components/login';

const ContactPage = () => {
  return (
    <div className="contact-wrap">
      {/* <Navbar /> */}
      {/* <PageHeader headertitle="Contact Us" /> */}
      {/* <Contact /> */}
      <Login />
      {/* <Footer /> */}
    </div>
  );
};

export default ContactPage;
