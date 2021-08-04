import { Button, Toolbar, Box, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Theme from '../../Theme';
import Editor from './components/Editor/index';
import Preview from './components/Preview';
import { PostProvider } from './PostContext';

const useStyles = makeStyles((theme) => ({
    root: {
        //height: 'calc(100% - 70px)',
        //overflow: 'scroll',
        height: '100vh',
    },
    appBar: {
        top: 'auto',
        bottom: 0,
        alignItems: 'center'
    },
    button: {
        marginRight: theme.spacing(2)
    },
}));

export default function NewPost() {
    const classes = useStyles();
    return (
        <Theme>
            <PostProvider>
                <Container>
                    <h1>Novo post</h1>
                    <Box display="flex" className={classes.root}>
                        <Box width="50%" height="100%" padding={2}>
                            <Editor />
                        </Box>
                        <Box width="50%" height="100%" padding={2}>
                            <Preview />
                        </Box>
                    </Box>
                    <Toolbar>
                        <Button className={classes.button}>Salvar rascunho</Button>
                        <Button color="secondary" variant="outlined">Publicar</Button>
                    </Toolbar>
                </Container>
            </PostProvider>
        </Theme>
    )
}