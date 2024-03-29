import React from 'react';

const SocialNetwork = () => {

    const anim = () => {
        let navLinks = document.querySelectorAll('.social-network a');
        console.log('yes')
        navLinks.forEach(link => {
            link.addEventListener('mouseover', (e) => {
                let attrX = e.offsetX -20;
                let attrY = e.offsetX -13;

                link.style.transform = `translate(${attrX}px, ${attrY}px)`;
            })
            link.addEventListener('mouseleave', () => {
                link.style.transform = '';
            })
        })
    }
    return (
        <div className="social-network">
            <ul className="content">
                <a href="https://wwww.facebook.com" target="_blank" rel="noopener noreferrer" className="hover" onMouseOver={anim}>
                    <li><i className="fab fa-facebook-f"></i></li>
                </a>
                <a href="https://wwww.twitter.com" target="_blank" rel="noopener noreferrer" className="hover" onMouseOver={anim}>
                    <li><i className="fab fa-twitter"></i></li>
                </a>
                <a href="https://wwww.instagram.com" target="_blank" rel="noopener noreferrer" className="hover" onMouseOver={anim}>
                    <li><i className="fab fa-instagram"></i></li>
                </a>
            </ul>
        </div>
    );
};

export default SocialNetwork;