let store = {
    _state:{
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
       ]
    },

    getState(){
        return this._state;
    },
};

export default store;