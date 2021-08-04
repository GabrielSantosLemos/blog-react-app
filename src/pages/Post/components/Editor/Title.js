import { TextField } from '@material-ui/core';
import { usePost } from '../../PostContext';

export default function Title() {

    const {
        title,
        setTitle,
    } = usePost();

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