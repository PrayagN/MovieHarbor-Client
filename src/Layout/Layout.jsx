// import React from 'react';
import PropTypes from 'prop-types';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';

function Layout({ children }) {
  return (
    <div className='bg-main text-white'>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
