var mobiles = [
  { brand: 'samsung', model: 'S568' },
  { brand: 'apple', model: 'A500' },
  { brand: 'one+', model: 'O508' },
];

mobiles.forEach(function (ele) {
  console.log(ele.brand);
});

var out = mobiles.map(function (ele) {
  return ele.brand;
});
console.log(out);
