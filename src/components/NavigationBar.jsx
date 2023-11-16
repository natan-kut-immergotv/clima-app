import React from 'react';
import PropTypes from 'prop-types';

function NavigationBar({ links }) {
    return (
        <nav className="nav-bar">
            <ul>
                {links.map((link, index) => (
                    <li key={index}>
                        <a href={link.href}>{link.title}</a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

NavigationBar.propTypes = {
    links: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            href: PropTypes.string.isRequired
        })
    ).isRequired
};

export default NavigationBar;
