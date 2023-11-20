import { InputAdornment, TextField } from '@mui/material'


const Input = (props) => {
   const {value, onChange,label,unit} = props
  return (
    <div className='mx-2 sm:mx-10'>
      <label className='text-left'>{label}*</label>
      <TextField type='tel' value={value} onBlur={onChange} 
      InputProps={{
      endAdornment:<InputAdornment position="end">{unit}</InputAdornment>
    }}
      // endAdornment={<InputAdornment position="end">kg</InputAdornment>}
      className='w-full mx-5'
      />
      </div>
  )
}

export default Input
