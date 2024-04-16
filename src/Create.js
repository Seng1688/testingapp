import React from 'react';

import { TextField } from '@material-ui/core';
// Make me an 
const Create = () => {
  return (
    <form className={classes.root} noValidate autoComplete="off">
  <TextField id="standard-basic" label="Standarad" />
  <TextField id="filled-basic" label="Filled" variant="filled" />
  <TextField id="outlined-basic" label="Outlined" variant="outlined" />
</form>
  );
}

export default Create