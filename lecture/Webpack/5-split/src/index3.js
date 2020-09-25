function myFunc() {
  import('./util').then(({ add }) =>
    import('lodash').then(({ default: _ }) =>
      console.log('value', _.fill([1, 2, 3], add(10, 20))),
    ),
  );
}
myFunc();

// async function myFunc() {
//   const [{ add }, { default: _ }] = await Promise.all([
//     import('./util'),
//     import('lodash'),
//   ]);
//   console.log('value', _.fill([1, 2, 3], add(30, 20)));
// }
// myFunc();

// async function myFunc() {
//   const [{ add }, { default: _ }] = await Promise.all([
//     import(/* webpackPreload: true */ './util'),
//     import(/* webpackPrefetch: true */ 'lodash'),
//   ]);
//   console.log('value', _.fill([1, 2, 3], add(30, 20)));
// }
// myFunc();
