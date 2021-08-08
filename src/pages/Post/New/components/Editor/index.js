import { useCallback } from 'react';
import { Button, TextField, Box } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';
import { useDropzone } from 'react-dropzone';
import { useNewContext } from '../../Context';

import Title from './Title';

const useStyles = makeStyles((theme) => ({
    image: {
        height: 100
    }
}));

export default function Editor() {

    const {
        image,
        setImage,
        tags,
        setTags,
        markdownText,
        setMarkdownText
    } = useNewContext();

    const classes = useStyles();

    const arrayTags = [
        { title: 'react.js' },
        { title: 'node.js' },
        { title: 'dotnetcore' },
        { title: 'webdev' }
    ]

    const onDrop = useCallback((acceptedFiles) => {
        console.log(acceptedFiles);
        const file = acceptedFiles[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            const base64data = reader.result;
            setImage(base64data);
        }
    }, [setImage]);

    const { getRootProps, getInputProps } = useDropzone({
        onDrop,
        multiple: false,
        accept: 'image/*'
    })

    return (
        <>
            <div {...getRootProps()}>
                <input {...getInputProps()} />
                <Button>Carregar imagem</Button>
            </div>

            {image && <img className={classes.image} src={image} alt="any" />}

            <Box mb={2}>
                <Title />
            </Box>

            <Box mb={2}>
                <TextField
                    id="filled-multiline-static"
                    label="Texto"
                    multiline
                    fullWidth
                    variant="filled"
                    value={markdownText}
                    onChange={setMarkdownText}
                />
            </Box>

            <Box mb={2}>
                <Autocomplete
                    multiple
                    id="fixed-tags-demo"
                    onChange={setTags}
                    getOptionLabel={(option) => option.title}
                    options={arrayTags}
                    renderInput={(params) => (
                        <TextField {...params} variant="filled" label="Tags" placeholder="tags" />
                    )}
                />
            </Box>
        </>
    )
}