import { Box, Typography, Divider, Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ReactMarkdown from 'react-markdown';
import { useSelector } from 'react-redux';
import { useNewContext } from '../Context';

const useStyles = makeStyles((theme) => ({
    avatar: {
        marginRight: theme.spacing(1)
    },
    imagePreview: {
        width: '100%'
    },
    markdownText: {
        color: theme.palette.text.primary
    }
}));

export default function Preview() {

    const classes = useStyles();

    const {
        image,
        title,
        tags,
        markdownText,
    } = useNewContext();

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
                    <Typography color="textPrimary">{account.user?.name}</Typography>
                    <Typography color="textSecondary">10 meses atrás</Typography>
                </Box>
            </Box>
            <Typography variant="h2" color="textPrimary">{title}</Typography>
            {image && <img className={classes.imagePreview} src={image} alt="any" />}
            <Typography variant="h6" color="textPrimary">{tags.map(tag => tag.title).join(',')}</Typography>
            <Divider />
            <ReactMarkdown className={classes.markdownText}>{markdownText}</ReactMarkdown>
        </>
    )
}