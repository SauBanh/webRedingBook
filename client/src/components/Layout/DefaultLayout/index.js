import Header from './Header/Header';
import Footer from './Footer/Footer';

import React from 'react';

function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    );
}

export default DefaultLayout;
