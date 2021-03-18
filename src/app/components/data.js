const input = [
  {
    id: 1,
    component: "Root",
    children: [
      {
        id: 2,
        component: "To Do Item",
        children: [
          {
            id: 3,
            component: "Nested To Do Item",
            children: [],
          },
          {
            id: 4,
            component: "Nested To Do Item",
            children: [],
          },
        ],
      },
      {
        id: 5,
        component: "To Do item",
        children: [],
      },
    ],
  },
];

// type.name

// if sibling

// if child

// {
//   id: '4',
//   position: { x: 250, y: 200 },
//   data: {
//     label: 'Body',
//   },
// }

/*

======================================
DATA STRUCTURE FROM REACT GLOBAL HOOK
======================================

{
  component: RecoilRoot,
  children : [{
    component: ContextProvider,
    children: [{
      component: ContextProvider,
      children: [
        {
          component: BATCH
        }

      ]
    }]
  }]
}

*/
