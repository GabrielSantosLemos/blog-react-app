import moment from 'moment';
import mock from '../utils/mock';

mock.onGet('/api/post/entendendo-a-estrutura-e-a-semantica').reply(200, {
  id: 1,
  title:
    'COMO MELHORAR SEU CODIGO JAVASCRIPT (ESLINT + PRETTIER + EDITORCONFIG) | Dicas e Truques #02',
  slug: 'como-melhorar-seu-codigo-javascript',
  date: moment().subtract(1, 'day').toDate().getTime(),
  author: {
    id: 1,
    name: 'Lucas Nhimi',
    avatar: '/images/avatars/avatar_1.jpeg',
  },
  markdownText: `
    _Compact style:_
    
    Term 1
      ~ Definition 1
    
    Term 2
      ~ Definition 2a
      ~ Definition 2b`,
  tags: ['eslint', 'prettier', 'editorconfig', 'vscode'],
  image: '/images/posts/post1.png',
  likes: 10,
  comments: 30,
});

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