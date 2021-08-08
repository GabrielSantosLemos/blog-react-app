import { makeStyles } from '@material-ui/core';
import Footer from './components/Footer'
import Header from './components/Header'

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.background.dark,
    }
}));

export default function Theme({ children }) {
    const classes = useStyles();
    return(
    <div className={classes.root}>
        <Header/>
            {children}
        <Footer />
    </div>);
}