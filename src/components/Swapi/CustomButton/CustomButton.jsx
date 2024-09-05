import Button from "@mui/material/Button"

const CustomButton = ({ text, onClick, className="" }) => {
    return (
        <Button variant="outlined" className={className} onClick={onClick}>{text}</Button> 
    );
}

export default CustomButton;
