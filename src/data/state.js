let store = {
    _state: {
        links: [
            {
                id: 0,
                path: '/main',
                value: 'Главная',
                innerLinks: []
            },
            {
                id: 1,
                path: '/serviceOfGUKVV',
                value: 'Ресурсы ГУКВВ',
                innerLinks: [
                    {
                        id: 0,
                        path: '/serviceOfGUKVV',
                        value: 'Ресурсы ГУКВВ'
                    },
                    {
                        id: 1,
                        path: '/serviceOfGUKVV',
                        value: 'Ресурсы ГУКВВ'
                    },
                    {
                        id: 2,
                        path: '/serviceOfGUKVV',
                        value: 'Ресурсы ГУКВВ'
                    }
                ]
            },
            {
                id: 2,
                path: '/serviceOfMVDRB',
                value: 'Ресурсы МВД РБ',
                innerLinks: [
                    {
                        id: 0,
                        path: '/serviceOfGUKVV',
                        value: 'Ресурсы ГУКВВ'
                    },
                    {
                        id: 1,
                        path: '/serviceOfGUKVV',
                        value: 'Ресурсы ГУКВВ'
                    },
                    {
                        id: 2,
                        path: '/serviceOfGUKVV',
                        value: 'Ресурсы ГУКВВ'
                    }
                ]
            },
            {
                id: 3,
                path: '/photoGallery',
                value: 'Фотогалерея',
                innerLinks: []
            }
        ],
        holidays: [
            {
                id: 0,
                holiday: 'Вьюн Денис Олегович',
                position: 'Главный специалист по инженерно-техническому обеспечению',
                date: '2020-06-15'
            },
            {
                id: 1,
                holiday: 'Вьюн Денис Олегович',
                position: 'Главный специалист по инженерно-техническому обеспечению',
                date: '2020-06-15'
            },
            {
                id: 2,
                holiday: 'Вьюн Денис Олегович',
                position: '',
                date: '2020-06-16'
            },
            {
                id: 1,
                holiday: 'Вьюн Денис Олегович',
                position: 'Главный специалист по инженерно-техническому обеспечению',
                date: '2020-06-15'
            },
            {
                id: 1,
                holiday: 'Вьюн Денис Олегович',
                position: 'Главный специалист по инженерно-техническому обеспечению',
                date: '2020-06-15'
            }
        ]
    },

    getState() {
        return this._state;
    },
};

export default store;