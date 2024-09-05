import TextField from '@mui/material/TextField'

const Input = ({ value, onChange }) => {
    return (
        <div className="input_block">
            <p>https://jsonplaceholder.typicode.com/</p>
            <TextField id="outlined-basic" label="users" variant="outlined" type="text" value={value} onChange={onChange}/> 
        </div>
    );
}

export default Input;
