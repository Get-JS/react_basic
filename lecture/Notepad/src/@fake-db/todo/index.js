export default [
  {
    id: 1,
    text: 'say hi',
    checked: true,
  }, {
    id: 2,
    text: 'say I',
    checked: true,
  }, {
    id: 3,
    text: 'say am',
    checked: false,
  },
];

export const testData = () => {
  const array = [];
  for (let i = 1; i <= 25000; i++) {
    array.push({
      id: i,
      text: 'ttt',
      checked: false,
    });
  }
  return array;
};