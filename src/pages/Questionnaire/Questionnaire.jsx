import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Questionnaire = () => {
    return (
        <div>Questionnaire
            <Link>
                <Button variant="contained">
                    Enviar Formulario
                </Button>
            </Link>
        </div>
    )
}

export default Questionnaire