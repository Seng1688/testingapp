import React from 'react';

import { TextField } from '@material-ui/core';

const Create = () => {
  return (
    <form className={classes.root} noValidate autoComplete="off">
  <TextField id="standard-basic" label="Standard" />
  <TextField id="filled-basic" label="Filled" variant="filled" />
  <TextField id="outlined-basic" label="Outlined" variant="outlined" />
</form>
  );
}

export default Create