import moment from 'moment';
import mock from '../utils/mock';

mock.onGet('/api/feed').reply(200, {
    posts: [
        {
            id: 1,
            title: 'HTML5: entendendo a estrutura e a semântica',
            slug: 'entendendo-a-estrutura-e-a-semantica',
            date: moment().subtract(1, 'day').toDate().getTime(),
            author: {
                id: 1,
                name: "Gabriel Lemos",
                avatar: './img.jpeg'
            },
            tags: ['Front End', 'Article', 'Aside'],
            image: '/images/posts/post1.png',
            likes: 10,
            comments: 30
        }
    ]
});