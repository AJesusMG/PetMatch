import React from 'react';
import styles from './adminReports.module.css';
import AdoptaCard from '../../../components/AdoptaCard/adoptaCard';
import Dog from '../../../public/img/dog_1.png';

export default function AdminReports() {
  return (
    <div className={styles.main}>
        <div className={styles.NavItems}>
            <div>
                <h1 className={styles.Title}>Post Reportados</h1>
            </div>
            <div>
                <img className={styles.Dog} src={Dog} alt="Profile" />
            </div>
        </div>
        <div>
            <div>
                <div>
                <AdoptaCard />
                </div>
            </div>
        </div>
    </div>
  );
}
