const gitSomething = {
    niz: [{num:1, num:2},[1,2,3,4,5],'string',false,true],
    add: function (a, b) {
        return a + b;
    }
}

const product = gitSomething.add(2, 2);
console.log(product);