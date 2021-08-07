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
            placeholder="Título"
            fullWidth
            value={title}
            onChange={setTitle}
        />
    )
}