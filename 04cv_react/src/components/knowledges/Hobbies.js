import React from 'react';

const Hobbies = () => {
    return (
        <div className="hobbies">
            <h3>Intérêts</h3>
            <ul>
                <li className="hobby"><i className="fas fa-running"></i><span> Course à pied</span></li>
                <li className="hobby"><i className="fas fa-hiking"></i><span> Randonnées</span></li>
                <li className="hobby"><i className="fas fa-film"></i><span> Fiction</span></li>
                <li className="hobby"><i className="fas fa-atom"></i><span> Science</span></li>
            </ul>
        </div>
    );
};

export default Hobbies;