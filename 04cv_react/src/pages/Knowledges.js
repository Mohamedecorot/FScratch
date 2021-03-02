import React from 'react';
import Navigation from '../components/Navigation';
import Languages from '../styles/components/knowledges/Languages';
import Experiences from '../styles/components/knowledges/Experiences';
import OtherSkills from '../styles/components/knowledges/OtherSkills';
import Hobbies from '../styles/components/knowledges/Hobbies';

const Knowledges = () => {
    return (
        <div className="knowledges">
            <Navigation />
            <div className="knowledgesContent">
                <Languages />
                <Experiences />
                <OtherSkills />
                <Hobbies />
            </div>
        </div>
    );
};

export default Knowledges;