
import React from 'react';
import Grid from './grid';

const App: () => React$Node = () => {
  const array = [
    'suscipitsuscipit recusandae consequuntur expedita et ',
    ' quas totamnostrum rerum est aut  ',
    'quia ',

    3,
    'quia ',
    ' quas totamnostrum rerum est aut quas totamnostrum rerum est aut',
    ' quas totamnostrum rerum est aut',
    3,
    'quia et suscipitsuscipit recusandae consequuntur expedita et cumreprehenderit molestiae ut ut quas totamnostrum rerum est ',
    'suscipitsuscipit recusandae consequuntur ',
    ' quas totamnostrum rerum est aut',
    'quia et suscipitsuscipit recusandae consequuntur expedita et cumreprehenderit molestiae ut ut quas totamnostrum rerum est autem sunt rem eveniet architecto quia et suscipitsuscipit recusandae consequuntur expedita et cumreprehenderit molestiae ut ut quas totamnostru quia et suscipitsuscipit recusandae consequuntur',
    'suscipitsuscipit recusandae consequuntur expedita et cumreprehenderit molestiae ut ut quas totamnostrum rerum est aut',
    ' quas totamnostrum rerum est aut',
    'quia ',
    ' quas totamnostrum rerum est aut',
    ' quas totamnostrum rerum est aut',
      'quia et suscipitsuscipit recusandae consequuntur expedita et cumreprehenderit molestiae ut ut quas totamnostrum rerum est autem sunt rem eveniet architecto',
      'quia et suscipitsuscipit recusandae consequuntur expedita et cumreprehenderit molestiae ut ut quas totamnostrum rerum est autem sunt rem eveniet architecto'
  ];

  const dummyArray = [
    { name:["Pizza Pack","Panini Meal Deal",]},
    { name:["Pizza Pack","Panini Meal Deal","Bargan Bucket","Tiger Value Box", "Pizza Pack","Panini Meal Deal","Tiger Value Box", "Pizza Pack","Panini Meal Deal","Tiger Value Box", "Pizza Pack","Pizza Pack","Pizza Pack","Panini Meal Deal","Panini Meal Deal",]},
    {name:["Pizza Pack","Panini Meal Deal","Bargan Bucket","Tiger Value Box"]},
    {name:["Pizza Pack"]},
    { name:["Pizza Pack","Panini Meal Deal","Panini Meal Deal",]},
    { name:["Pizza Pack","Panini Meal Deal","Panini Meal Deal","Panini Meal Deal",]},
    { name:["Pizza Pack","Panini Meal Deal","Panini Meal Deal","Panini Meal Deal","Panini Meal Deal",]},
    { name:["Pizza Pack","Panini Meal Deal",]},
    { name:["Pizza Pack","Panini Meal Deal","Panini Meal Deal",]},
    { name:["Pizza Pack",]},
    { name:["Pizza Pack","Panini Meal Deal","Panini Meal Deal","Panini Meal Deal",]},
    { name:["Pizza Pack","Panini Meal Deal","Panini Meal Deal",]},
    { name:["Pizza Pack","Panini Meal Deal","Panini Meal Deal",]},
    { name:["Pizza Pack","Panini Meal Deal",]},
    { name:["Pizza Pack","Panini Meal Deal",]},
    { name:["Pizza Pack","Panini Meal Deal","Panini Meal Deal",]},

  ]

  return (
    <>
      <Grid value={dummyArray} />
    </>
  );
};
export default App;


