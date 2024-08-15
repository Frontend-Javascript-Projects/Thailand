import { defineStore } from 'pinia';

export const useTourStore = defineStore('tours', {
  state: () => ({
    tours: [
      {
        id: 0,
        title: 'Бангкок',
        visited: 45,
        ordered: 50,
        favorite: 320,
        feedback: 15,
        stars: 4,
        adultPrice: 100,
        infantPrice: 35,
        infantAge: '3-9',
        timeDuration: 8,
        count: 70,
        type: 'Группавая',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn2p3xRAPsZDtCigNjp5Zi7FP5hHxErTcUuQ&s',
      },
      {
        id: 1,
        title: 'Анталья',
        visited: 65,
        ordered: 75,
        favorite: 250,
        feedback: 12,
        stars: 5,
        adultPrice: 110,
        infantPrice: 40,
        infantAge: '3-9',
        timeDuration: 10,
        count: 75,
        type: 'Группавая',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOL98pqF2MzI7lcvMinp7vAJiPzLulIt-FVBTd55tfzGBRl7_L5bd0THOFqNK0KBeBU5Y&usqp=CAU',
      },
      {
        id: 2,
        title: 'Пхукет',
        visited: 50,
        ordered: 60,
        favorite: 300,
        feedback: 18,
        stars: 3,
        adultPrice: 95,
        infantPrice: 38,
        infantAge: '3-9',
        timeDuration: 9,
        count: 65,
        type: 'Группавая',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP5Yrvn1x90IuKpYBvlgXvCT6YCSfQ5pugdd1VofRIAarZ4DJx8OsV37vDIkm1LgO6CdE&usqp=CAU',
      },
      {
        id: 3,
        title: 'Измир',
        visited: 70,
        ordered: 80,
        favorite: 270,
        feedback: 20,
        stars: 4,
        adultPrice: 105,
        infantPrice: 41,
        infantAge: '3-9',
        timeDuration: 12,
        count: 80,
        type: 'Группавая',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ884jJbvwORnX_olEtxP33S1YfwUl-PLlRiPzjuiKVvr_o6sHMGA-7Dy1vDj1ebdkf9o0&usqp=CAU',
      },
      {
        id: 4,
        title: 'Чиангмай',
        visited: 55,
        ordered: 65,
        favorite: 310,
        feedback: 13,
        stars: 5,
        adultPrice: 99,
        infantPrice: 39,
        infantAge: '3-9',
        timeDuration: 7,
        count: 68,
        type: 'Группавая',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTadg1sgXPM7Dwax9XSatftPauY9ym2XNiJlEaG9ZkIGQLcX2kmX7yW8NQqepnjI7MVa28&usqp=CAU',
      },
      {
        id: 5,
        title: 'Бурса',
        visited: 63,
        ordered: 70,
        favorite: 200,
        feedback: 14,
        stars: 3,
        adultPrice: 108,
        infantPrice: 37,
        infantAge: '3-9',
        timeDuration: 9,
        count: 73,
        type: 'Группавая',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-05wq7Vl-FES8TT3EheJ2VCIaoat6LQIR6Q&s',
      },
      {
        id: 6,
        title: 'Паттайя',
        visited: 40,
        ordered: 55,
        favorite: 320,
        feedback: 16,
        stars: 4,
        adultPrice: 105,
        infantPrice: 36,
        infantAge: '3-9',
        timeDuration: 8,
        count: 70,
        type: 'Группавая',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDcVv-0cfBppcoFac0IXy6TSbfYg8X_KYxGg&s',
      },
      {
        id: 7,
        title: 'Анкара',
        visited: 75,
        ordered: 78,
        favorite: 260,
        feedback: 10,
        stars: 5,
        adultPrice: 115,
        infantPrice: 42,
        infantAge: '3-9',
        timeDuration: 11,
        count: 77,
        type: 'Группавая',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8ov8sRhM64d1tCx4L7eMO9g5YxgTVHN7Wmg&s',
      },
      {
        id: 8,
        title: 'Хуа Хин',
        visited: 47,
        ordered: 60,
        favorite: 325,
        feedback: 12,
        stars: 4,
        adultPrice: 106,
        infantPrice: 39,
        infantAge: '3-9',
        timeDuration: 7,
        count: 66,
        type: 'Группавая',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDzz8D241URzRwI-62aB8bD-XalSmStjxi4w&s',
      },
      {
        id: 9,
        title: 'Стамбул',
        visited: 68,
        ordered: 75,
        favorite: 230,
        feedback: 17,
        stars: 3,
        adultPrice: 109,
        infantPrice: 38,
        infantAge: '3-9',
        timeDuration: 10,
        count: 72,
        type: 'Группавая',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS11_qV5kDOkmGZRjQO72lYUYC_XT_qycijHQ&s',
      },
      {
        id: 10,
        title: 'Аюттхая',
        visited: 42,
        ordered: 54,
        favorite: 310,
        feedback: 14,
        stars: 5,
        adultPrice: 104,
        infantPrice: 40,
        infantAge: '3-9',
        timeDuration: 9,
        count: 70,
        type: 'Группавая',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPuD0K5YE8uq6CpDS2fvGATG0VhljVpTde6Q&s',
      },
      {
        id: 11,
        title: 'Газиантеп',
        visited: 60,
        ordered: 65,
        favorite: 210,
        feedback: 13,
        stars: 4,
        adultPrice: 97,
        infantPrice: 39,
        infantAge: '3-9',
        timeDuration: 8,
        count: 64,
        type: 'Группавая',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzMaODWxDfo4Ls2w2QkQzQJDnK8oMvBSCaIA&s',
      },
      {
        id: 12,
        title: 'Краби',
        visited: 35,
        ordered: 49,
        favorite: 300,
        feedback: 18,
        stars: 3,
        adultPrice: 101,
        infantPrice: 38,
        infantAge: '3-9',
        timeDuration: 8,
        count: 67,
        type: 'Группавая',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsuUUAwjenC5sywvbi3AaKqla0GMpnRK3RHA&s',
      },
      {
        id: 13,
        title: 'Мардин',
        visited: 72,
        ordered: 78,
        favorite: 240,
        feedback: 20,
        stars: 5,
        adultPrice: 114,
        infantPrice: 42,
        infantAge: '3-9',
        timeDuration: 12,
        count: 77,
        type: 'Группавая',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdTAKXvKu-aBvhz1rdDCgYunSgR4bSVfGL4A&s',
      },
    ],
  }),
});
