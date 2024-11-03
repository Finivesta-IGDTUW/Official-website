import React, { useEffect } from 'react';
import './Layout.css'; // Ensure you have the CSS file imported

const Layout = ({ children }) => {
    useEffect(() => {
        const handleScroll = () => {
            var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            var scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            var scrollPercentage = (scrollTop / scrollHeight) * 100;
            document.getElementById('progress-bar').style.width = scrollPercentage + '%';
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div>
            <div id="progress-bar-container">
                <div id="progress-bar"></div>
            </div>
            {children}
        </div>
    );
};

export default Layout;