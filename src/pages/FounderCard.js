import React, { useState } from 'react';
import styles from './about.module.css';

const FounderCard = ({ name, title, imgSrc, githubUrl, bio }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div className={styles.founderCard}>
      <img src={imgSrc} alt={name} className={styles.founderImage} />
      <div className={styles.founderContent}>
        <h3>{name}</h3>
        <p><strong>{title}</strong></p>
        <button onClick={openModal} className={styles.bioToggle}>
          Ver Mais
        </button>
        <a href={githubUrl} target="_blank" rel="noopener noreferrer" className={styles.githubLink}>
          Perfil GitHub
        </a>
        {modalOpen && (
          <div className={styles.modal}>
            <div className={styles.modalContent}>
              <span className={styles.close} onClick={closeModal}>&times;</span>
              {bio.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FounderCard;