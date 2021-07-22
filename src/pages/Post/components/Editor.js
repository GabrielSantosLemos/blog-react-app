import { useCallback } from 'react';
import { Button, Box, TextField } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';
import { useDropzone } from 'react-dropzone';

const useStyles = makeStyles((theme) => ({
    image: { 
        height: 100
    },
    textArea: {
        width: "100%",
        height: "100%",
        resize: "none",
        border: "none",
        outline: "none",
        fontSize: 15
    }
}));

export default function Editor({image, setImage, title, setTitle, tags, setTags, markdownText, setmarkdownText}) {
   
    const classes = useStyles();

    const arrayTags = [
        { title: 'react.js' },
        { title: 'node.js' },
        { title: 'dotnetcore' },
        { title: 'webdev' }
    ]

    const onDrop = useCallback((acceptedFiles) => {
        const file = acceptedFiles[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            const base64data = reader.result;
            setImage(base64data);
        }
    },[]);

    const { getRootProps, getInputProps } = useDropzone({
        onDrop,
        multiple: false,
        accept: 'image/*'
    })

    return (
        <Box width="50%" height="100%" padding={2} borderRight="1px solid #DDD">

            <div {...getRootProps()}>
                <input {...getInputProps()} />
                <Button>Carregar imagem</Button>
            </div>

            {image && <img className={classes.image} src={image} alt="any" />}

            <TextField 
            id="title" 
            placeholder="Título" 
            fullWidth 
            value={title} 
            onChange={setTitle} 
            />

            <Autocomplete
            multiple
            limitTags={2}
            id="multiple-limit-tags"
            options={arrayTags}
            getOptionLabel={(option) => option.title}
            value={tags}
            onChange={setTags}
            renderInput={(params) => (
                <TextField {...params} variant="standard" placeholder="tags" />
            )}
            />

            <textarea 
            className={classes.textArea} 
            value={markdownText}
            onChange={setmarkdownText}
            >
            </textarea>
        </Box>
    )
}