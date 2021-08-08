import { TextField } from '@material-ui/core';
import { useNewContext } from '../../Context';

export default function Title() {

    const {
        title,
        setTitle,
    } = useNewContext();

    return (
        <TextField 
        id="title"
        label="Título" 
        placeholder="Título"
        variant="filled"
        fullWidth
        value={title}
        onChange={setTitle}
        />
    )
}