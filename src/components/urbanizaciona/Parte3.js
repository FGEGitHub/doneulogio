import React from 'react';
import videoSrc from '../../Assets/videodron.mp4'; // Ajusta el path según la ubicación de tu video


const UrbanizacionAbierta = () => {
  return (
    <div style={styles.container}>
      <div style={styles.textContainer}>
        <h1 style={styles.title}>Urbanización Abierta</h1>
      </div>
      <div style={styles.videoContainer}>
        <video style={styles.video} controls>
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: '1200px',
    margin: '0 auto',
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  textContainer: {
    flex: 1,
    textAlign: 'left',
  },
  title: {
    fontSize: '36px',
    fontWeight: 'bold',
    margin: '0',
  },
  videoContainer: {
    flex: 1,
    maxWidth: '600px',
  },
  video: {
    width: '100%',
    borderRadius: '10px',
  },
};

export default UrbanizacionAbierta;
