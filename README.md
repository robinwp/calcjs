# calcjs

calcjs是学习编译原理所写的案例，一个输出四则运算结果的工具。

### example
[demo](https://robinwp.github.io/blog/calcjs)
    
```js
// <script src=calcjs.js></script>
const {result, tree, list} = calcjs('-1.25 * (10 - 2) / -1');
// result 是计算的结果  tree是解析出的语法二叉树， list 是解析出的词法集合
console.log(result); // 10
console.log(list); // [{"type":7,"value":"-1.25"},{"type":3,"value":"*"},{"type":5,"value":"("},{"type":7,"value":"10"},{"type":2,"value":"-"},{"type":7,"value":"2"},{"type":6,"value":")"},{"type":4,"value":"/"},{"type":7,"value":"-1"}]
console.log(tree); // {"uid":"f8dc6807-ab37-49dd-9f5e-005ad70bda93","type":4,"value":"/","leftChild":{"uid":"14e8e6c7-c624-4f01-a6ff-6943646978e3","type":3,"value":"*","leftChild":{"type":7,"value":"-1.25"},"rightChild":{"uid":"531f109f-a486-447f-8263-261e8e6d1ef7","type":2,"value":"-","leftChild":{"type":7,"value":"10"},"rightChild":{"uid":"24d036d0-2957-4ff8-91bc-c6563b609bee","type":7,"value":"2","leftChild":null,"rightChild":null,"status":0},"status":1},"status":1},"rightChild":{"uid":"5f733bfc-4c88-423a-b70e-7926808d320f","type":7,"value":"-1","leftChild":null,"rightChild":null,"status":0},"status":1}

// 如果输入的文本不符合规范， 则报错
calcjs('-1.2 5 * (10 - 2) / -1'); // 报错
```

