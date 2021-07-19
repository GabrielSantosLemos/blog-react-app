import mock from '../utils/mock';

mock.onPost('/api/login/me').reply(200, {
    user: {
        'id': 1,
        'username': 'gabriel',
        'avatar': '/avatar.jpg',
        'name': 'Gabriel Santos Lemos',
        'email': 'gabriel.lemos@gmail.com'
    }
})


mock.onPost('/api/login').reply((request) => {

    const { email, password } = JSON.parse(request.data);

    if (email !== 'gabriel.lemos1001@gmail.com' || password !== 'admin123') {
        return [400, { message: 'Seu e-mail ou senha estão incorretors' }]
    }
    const user = {
        'id': 1,
        'username': 'gabriel',
        'avatar': '/avatar.jpg',
        'name': 'Gabriel Santos Lemos',
        'email': 'gabriel.lemos@gmail.com'
    }

    return [200, { user }]
})