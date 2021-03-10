const input = [
  {
    id: 1,
    component: 'Root',
    children: [
      {
        id: 2,
        component: 'To Do Item',
        children: [
          {
            id: 3,
            component: 'Nested To Do Item',
            children: [],
          },
          {
            id: 4,
            component: 'Nested To Do Item',
            children: [],
          },
        ],
      },
      {
        id: 5,
        component: 'To Do item',
        children: [],
      },
    ],
  },
];

// {
//   id: '4',
//   position: { x: 250, y: 200 },
//   data: {
//     label: 'Body',
//   },
// }
