import styles from './Services.module.css';
import Image from 'next/image';

const logos = [
  { src: '/images/electricidad.png', alt: 'Logo para empresa A' },
  { src: '/images/verduleria.png', alt: 'Logo para empresa B' },
  { src: '/images/it.png', alt: 'Logo para empresa C' },
];

export default function Services() {
  return (
    <section className={styles.services}>
      <div className={styles.services__content}>
        <h2 className={styles.services__title}>Servicios que ofrezco</h2>
        <p className={styles.services__description}>
          Me especializo en el diseño de landing pages profesionales para empresas, creación de logos e imágenes con IA,
          y gestión de redes sociales con publicaciones semanales para maximizar tu presencia online.
        </p>
        <div className={styles.services__cards}>
          {logos.map((logo, index) => (
            <div key={index} className={styles.services__card}>
              <Image src={logo.src} alt={logo.alt} width={200} height={200} />
              <p className={styles.services__caption}>{logo.alt}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
