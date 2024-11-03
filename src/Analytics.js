// src/analytics.js
import ReactGA from 'react-ga4';

export const initGA = () => {
    const measurementId = process.env.REACT_APP_GA_MEASUREMENT_ID;
    if (!measurementId) {
        console.error('GA_MEASUREMENT_ID is required');
        return;
    }
    ReactGA.initialize(measurementId);
};

export const logPageView = () => {
    ReactGA.send({ hitType: 'pageview', page: window.location.pathname + window.location.search });
};