import { Button } from "@material-ui/core";
import { useNavigate } from "react-router-dom";

export default function WritePost() {

    const navigate = useNavigate();

    const handlerClick = () => {
        navigate('/post/new');
    }

    return (
        <Button 
        variant="contained" 
        color="primary"
        onClick={handlerClick}
        >
            Novo Post
        </Button>
    )
}