import { Button, Toolbar, Box, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Theme from '../../../Theme';
import Editor from './components/Editor/index';
import Preview from './components/Preview';
import { PostProvider } from './Context';
import { useNewContext } from './Context';

const useStyles = makeStyles((theme) => ({
    root: {
        //height: 'calc(100% - 70px)',
        //overflow: 'scroll',
        height: '100vh',
    },
    appBar: { 
        top: 'auto',
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        marginRight: theme.spacing(2)
    }
}));

export default function New() {
    const classes = useStyles();

    const ctx = useNewContext();
    const handleSaveDraft = () => {
        // acessar backend e salvar rascunho
    }

    const handlePublish = () => {
        // acessar backend e salvar rascunho
    }

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
                    <Toolbar className={classes.appBar}>
                        <Button className={classes.button}>Salvar rascunho</Button>
                        <Button color="secondary" variant="outlined">Publicar</Button>
                    </Toolbar>
                </Container>
            </PostProvider>
        </Theme>
    )
}