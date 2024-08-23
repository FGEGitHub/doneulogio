import React, { useState, useEffect } from "react";
import Nav from '../../components/inicio/nav';
import General from '../../components/mapas/doneulogiocompleto';

export default function Paginas() {
    const [showSecondBackground, setShowSecondBackground] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            if (scrollPosition >= 1000) {
                setShowSecondBackground(true);
            } else {
                setShowSecondBackground(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <Nav /> <br /><br />
            <div style={{ backgroundColor: 'darkgreen', padding: '20px', textAlign: 'center' }}>
                <General />
            </div>
        </>
    );
}
