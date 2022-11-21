// class -> object

class Students {
  [index: string]: 'male' | 'female';
  makr: 'male' = 'male';
}

const a = new Students();
a.mark = 'male';
a.jade = 'male';

console.log(a);

const b = new Students();
b.chloe = 'female';
b.alex = 'female';

console.log(b);
