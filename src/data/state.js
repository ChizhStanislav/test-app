import holiday from './images/holiday.png'

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
        ],
        servicesGUKVV: [
            {
                id: 0,
                text: 'Дни рождения и знаменательные даты',
                link: '',
                imagePath: holiday
            },
            {
                id: 1,
                text: 'Сводка',
                link: '',
                imagePath: holiday
            },
            {
                id: 2,
                text: 'Выезды за пределы Минского гарнизона',
                link: '',
                imagePath: holiday
            },
            {
                id: 3,
                text: 'База приказов',
                link: '',
                imagePath: holiday
            },
            {
                id: 4,
                text: 'Учет связи и автоматизации',
                link: '',
                imagePath: holiday
            },
            {
                id: 5,
                text: 'Ведомственная отчетность',
                link: '',
                imagePath: holiday
            },
            {
                id: 6,
                text: 'Документы на контроле',
                link: '',
                imagePath: holiday
            },
            {
                id: 7,
                text: 'Фотогалерея',
                link: '/photoGallery',
                imagePath: holiday
            },
            {
                id: 7,
                text: 'Справочная информация',
                link: '',
                imagePath: holiday
            }
        ]
    },

    getState() {
        return this._state;
    },
};

export default store;