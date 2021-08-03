import { TextField } from '@material-ui/core';

export default function Title({ title, setTitle }) {
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