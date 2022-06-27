const name  = 'john bob'
const element = (<h1>hello, {name}</h1>)
// 大括号内 可以放置 任何  有效的JavaScript 表达式

const ele0 = (
    <h1 className="greeting">
        hello, world!
    </h1>
)

const ele1 = React.createElement(
    'h1',
    {className: 'greeting'},
    'hello, world!'
)

//内部语法转换后，它创建了一个这样的对象
const ele2 = {
    type:'h1',
    props:{
        className:'greeting',
        children:'Hello, world!'
    }
}

