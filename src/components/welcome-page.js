import React from 'react';
import Typography from '@material-ui/core/Typography';

export const WelcomePage = () => (
  <>
    <Typography variant="h3" component="h1" gutterBottom color="primary">
      ¡Hola Mundo!
    </Typography>

    <Typography variant="h4" component="h2">
      Esta aplicación forma parte del curso Guía definitiva: Aprende los 9
      Patrones Avanzados en ReactJS
    </Typography>
  </>
);
