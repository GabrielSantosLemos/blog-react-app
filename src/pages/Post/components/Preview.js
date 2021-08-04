import { Box, Typography, Divider, Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ReactMarkdown from 'react-markdown';
import { useSelector } from 'react-redux';
import { usePost } from '../PostContext';

const useStyles = makeStyles((theme) => ({
    avatar: {
        marginRight: theme.spacing(1)
    }
}));

export default function Preview() {

    const classes = useStyles();

    const {
        image,
        title,
        tags,
        markdownText,
    } = usePost();

    const account = useSelector(state => state.account);

    return (
        <>
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
        </>
    )
}