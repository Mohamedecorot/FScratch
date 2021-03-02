import React, { Component } from 'react';
import ProgressBar from './ProgressBar';

class Languages extends Component {
    state = {
        languages: [
            {id: 1, value: "Javascript", xp:1.5},
            {id: 2, value: "Css", xp:1.8},
            {id: 3, value: "Php", xp:1.3},
            {id: 4, value: "Sql", xp:1.3}
        ],
        frameworks: [
            {id: 1, value: "React", xp:0.2},
            {id: 2, value: "Bootstrap", xp:1},
            {id: 3, value: "Sass", xp:0.4},
            {id: 4, value: "VueJs", xp:0.5},
            {id: 5, value: "Symfony", xp:0.7}
        ]
    }
    render() {
        let {languages, frameworks} = this.state;
        return (
            <div className="languagesFrameworks">
                <ProgressBar
                    languages={languages}
                    className="languageDisplay"
                    title="languages"
                />
                <ProgressBar
                    languages={frameworks}
                    className="frameworkDisplay"
                    title="frameworks & bibliothéques"
                />
            </div>
        );
    }
}

export default Languages;