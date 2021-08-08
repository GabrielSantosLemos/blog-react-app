import { useState, useEffect, useCallback } from 'react';
import { Container, makeStyles, Hidden, Box } from "@material-ui/core";
import axios from "../../utils/axios";
import Theme from "../../Theme";
import PostCard from './components/PostCard';
import NavBar from './components/NavBar';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        backgroundColor: theme.palette.background.dark,
    }
}));
  
export default function Feed() {

    const classes = useStyles();

    const [posts, setPosts] = useState([]);

    const getPosts = useCallback(async () => {
        const feed = await axios.get('/api/feed');
        setPosts(feed.data.posts);
    }, [setPosts]);

    useEffect(() => {
        getPosts();
    }, [getPosts]);

    return (
        <Theme>
            <Container maxWidth="lg">
                <Box display="flex">
                    <Hidden smDown>
                        <NavBar />
                    </Hidden>
                    <div>
                        {posts.map((post) => (
                            <PostCard key={post.id} post={post} />
                        ))}
                    </div>
                </Box>
            </Container>
        </Theme>
    )
}