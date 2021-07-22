import { useCallback, useState } from 'react';
import { AppBar, Button, Toolbar, Box, TextField, Typography, Divider, Avatar, Container, Grid } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';
import { useDropzone } from 'react-dropzone';
import ReactMarkdown from 'react-markdown';
import { useSelector } from 'react-redux';

import Theme from '../../Theme';
import Editor from './components/Editor';

const useStyles = makeStyles((theme) => ({
    root: {
        //height: 'calc(100% - 70px)'
        //overflow: 'scroll'
        //height: '100vh',
    },
    appBar: {
        top: 'auto',
        bottom: 0,
        alignItems: 'center'
    },
    button: {
        marginRight: theme.spacing(2)
    },
    image: {
        height: 100
    },
    imagePreview: {
        width: '100%'
    },
    textArea: {
        width: "100%",
        height: "100%",
        resize: "none",
        border: "none",
        outline: "none",
        fontSize: 15 
    },
    avatar: {
        marginRight: theme.spacing(1)
    }
}));


export default function NewPost() {

    const classes = useStyles();
    const account = useSelector(state => state.account);

    const [image, setImage] = useState(null);
    const [title, setTitle] = useState('');
    const [tags, setTags] = useState([]);
    const [markdownText, setmarkdownText] = useState('');


    return (
        <Theme>
            <Container maxWidth="lg" display="flex" className={classes.root}>

                <h1>Novo post</h1>

                <Box display="flex" className={classes.root}>
                    <Editor />
                    <Box width="50%" height="100%" padding={2}>
                        <Box display="flex" alignItems="center">
                            <Box>
                                <Avatar 
                                className={classes.avatar}
                                src={account.user?.avatar}
                                />
                            </Box>
                            <Box>
                                <Typography>{account.user?.name}</Typography>
                                <Typography color="textSecondary">10 meses atrás</Typography>
                            </Box>
                        </Box>
                        <Typography variant="h2">{title}</Typography>
                        {image && <img className={classes.imagePreview} src={image} alt="any" />}
                        <Typography variant="h6">{tags.map(tag => tag.title).join(',')}</Typography>
                        <Divider />
                        <ReactMarkdown>{markdownText}</ReactMarkdown>
                    </Box>
                </Box>

                <Toolbar>
                    <Button className={classes.button}>Salvar rascunho</Button>
                    <Button color="secondary" variant="outlined">Publicar</Button>
                </Toolbar>

            </Container>
        </Theme>
    )
}