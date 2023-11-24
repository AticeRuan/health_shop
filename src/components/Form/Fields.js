import React from 'react'
import { TextField } from '@mui/material'

const Field = (
  { label, type, name, value, onChange, placeholder, multiline = false },
  minRows,
) => {
  return (
    <>
      <TextField
        fullWidth
        margin="normal"
        label={label}
        required
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        multiline={multiline}
        minRows={minRows}
      />
    </>
  )
}

export default Field
