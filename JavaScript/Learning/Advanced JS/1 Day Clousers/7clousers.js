let a = 'Global';

function outerPrint() {
  let b = 'OuterPrint';

  return function innerPrint() {
    let c = 'innerPrint';
    return `${a} -> ${b} -> ${c}`;
  };

}
const show = outerPrint();
console.log(show);
const printInner = show();
console.log(printInner);
