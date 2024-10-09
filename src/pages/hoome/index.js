import React, { useState, useEffect } from 'react';
import "./style.css";
import logo from '../../Assets/logo.png';
import video from '../../Assets/videodron.mp4';
import img from "../../Assets/image 30.png";
import img2 from "../../Assets/image 31.png";
import rectangulo from "../../Assets/rectanguloverde.png"
import Footer from "../../Assets/footer.png"
import map from "../../Assets/MapaDon Eulogio.png"
import { Container, Typography, Grid, Box, CssBaseline, AppBar, Toolbar, Link } from '@mui/material';
import { useNavigate } from "react-router-dom";

// Importa todas las imágenes del carrusel
import libertad from '../../Assets/93.png';
import comunidad from '../../Assets/Comunidad.png';
import naturaleza from '../../Assets/Naturaleza.png';
import inversion from '../../Assets/Inversion.png';
import bienestar from '../../Assets/Bienestar.png';


export const Home = () => {
    const navigate = useNavigate();

    // Array de imágenes con sus textos correspondientes
    const images = [
        { src: libertad, alt: 'Libertad', text: 'Libertad' },
        { src: comunidad, alt: 'Comunidad', text: 'Comunidad' },
        { src: naturaleza, alt: 'Naturaleza', text: 'Naturaleza' },
        { src: inversion, alt: 'Inversión', text: 'Inversión' },
        { src: bienestar, alt: 'Bienestar', text: 'Bienestar' },
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Efecto para cambiar la imagen automáticamente cada 3 segundos
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); // 3000 ms = 3 segundos

        // Limpieza del intervalo al desmontar el componente
        return () => clearInterval(interval);
    }, [images.length]);

    // Funciones para navegar manualmente
    const prevImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    return (
        <div className="home">
            <div className="div-2">
                <div className="overlap">
                    {/* Insertamos el video en lugar de una imagen de fondo */}
                    <video src={video} autoPlay loop muted />
                    <div className="rectangle" />
                    <p className="tu-futuro-en-don">
                        Tu futuro en <br />
                        Don Eulogio
                    </p>
                </div>
                <div className="navbar">
                    <div className="text-wrapper-4"  onClick={() => navigate('/')}>Home</div>
                    <div className="text-wrapper-5"     onClick={() => navigate('/urbanizacion-abierta')}                    >Urbanización Abierta</div>
                    <div className="text-wrapper-6"   onClick={() => navigate('/espacios-publicos')}>Espacios públicos</div>
                    <div className="text-wrapper-7" onClick={() => navigate('/contacto')}>Contacto</div>
                    <div className="group-3">
                        <div className="text-wrapper-4"  onClick={() => navigate('/masterplan')}>MasterPlan</div>
                    </div>
                </div>
                <img className="recurso-x" alt="Recurso" src={logo} />
                <p className="don-eulogio-se-ubica">
                    Don Eulogio se ubica en el camino de acceso principal
                    <br />
                    al Pueblo de San Cayetano (Ruta Prov. Nº 08)
                </p>
                <div className="text-wrapper-8">¿Dónde estamos?</div>
                <p className="p">Está situado a 1,5 Km. de la Ruta Nac. Nº 12 y a 12 Km. de la Rotonda de la Virgen</p>
                <p className="text-wrapper-9">Hace click para verlo en Google Maps</p>
                
                {/* Carrusel de Imágenes */}
                <div className="overlap-group-wrapper">
                    <div className="overlap-group-2">
                        <div className="rectangle-2" />
                        <div className="carousel-content">
                            <img
                                className="carousel-image"
                                src={images[currentImageIndex].src}
                                alt={images[currentImageIndex].alt}
                            />
                            <div className="text-wrapper-10">{images[currentImageIndex].text}</div>
                        </div>
                    </div>
                </div>
                
                <div className="overlap-wrapper">
                    <div className="overlap-2">
                        <img className="mask-group" alt="Mask group" src={rectangulo} />
                        <p className="la-tranquilidad-de">
                            <span className="span"></span>
                            <span className="text-wrapper-11"></span>
                        </p>
                    </div>
                </div>
                <div className="group-4">
                    <div className="overlap-3">
                        <div className="text-wrapper-12"></div>
                    </div>
                </div>
                <div className="group-5">
                    <div className="overlap-4">
                        <div className="text-wrapper-13"></div>
                    </div>
                </div>
                <div className="group-6">
                <div className="group-7">
        <img className="image" alt="Image" src={img} />
        <img className="image-2" alt="Image" src={img2} />
    </div>
    <div className="desarrolla-y">
        Desarrolla <br />y Comercializa..
    </div>
</div>

                <div className="text-wrapper-14">Nuestros sectores</div>
                <img className="mapa-don-eulogio" alt="Mapa don eulogio" src={map} />



            
            </div>
        <div className="footer">
            <img className="footer-image" alt="Footer" src={Footer} />
        </div>


        </div>
    );
}