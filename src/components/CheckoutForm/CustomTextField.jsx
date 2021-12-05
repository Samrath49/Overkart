import React from 'react'
import { TextField, Grid } from '@material-ui/core';
import { useFormContext, Controller } from 'react-hook-form';

const FormInput = ({ name, label }) => {
    const { control } = useFormContext();
    const isError = false;

    return (
        <Grid item xs={12} sm={6}>
            if(!isError){
                <Controller
                    control={control}
                    name={name}
                    defaultValue=""
                    render={({ textField }) => (
                        <TextField
                            fullWidth
                            label={label}
                            required
                        />
                    )}
                />
            }
          else{
              console.error("Error : ", isError)
          }
        </Grid>
    )
}

export default FormInput