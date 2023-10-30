import React from 'react';
import Button from '@mui/material/Button';
import styles from './uploadImageStyles.module.css';
import CloudQueueIcon from '@mui/icons-material/CloudQueue';
import CloseIcon from '@mui/icons-material/Close';
import { styled } from '@mui/material/styles';

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});

export default function uploadImage() {


    return (
        <React.Fragment>
            <div className={styles.modalContainer}>

                <div className={styles.headModalUploadImage}>
                    <Button style={{ width: '30px', height: '30px', color: '#000', padding: '0' }}><CloseIcon /></Button>
                    <h2>Sube una foto</h2>
                </div>
                <div className={styles.ContentModalUploadGrid}>
                    <div>
                        <CloudQueueIcon />
                    </div>
                    <Button component="label" variant="contained" color="success">
                        Seleccionar desde la computadora
                        <VisuallyHiddenInput type="file" />
                    </Button>
                </div>

            </div>
        </React.Fragment>

    );
}