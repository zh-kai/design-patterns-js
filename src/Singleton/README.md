# 单例模式

## 定义
> 保证一个类仅有一个实例，并提供一个访问它的全局访问点。

## 简单实现
使用变量标识是否已创建过当前类的对象，如果创建过就直接返回，否则先创建后返回。简单实现增加了类的 **不透明性**，若使用者不知道此类为单例，可能会通过 new xxx 的形式进行创建。
```js
var Singleton = function(name){
  this.name = name
  this.instance = null
}

Singleton.prototype.getName = function(){
  console.log(this.name)
}

Singleton.getInstance = function(name){
  if(!this.instance) this.instance = new Singleton(name)
  return this.instance
}

var a = Singleton.getInstance('sam')
var b = Singleton.getInstance('tom')

console.log(a === b)

// OR
var Singleton = function(name){
  this.name = name
}

Singleton.prototype.getName = function(){
  console.log(this.name)
}

Singleton.getInstance = (function(){
  var instance = null
  return function(name) {
    if(!instance) instance = new Singleton(name)
    return instance
  }
})()

var c = Singleton.getInstance('sam')
var d = Singleton.getInstance('tom')

console.log(c === d)
```

## 透明的单例模式
实现单例模式，可以在使用时像使用普通类一样。
```js
var CreateDiv = (function(){
  var instance;

  var Create = function(text){
    if(instance) {
      return instance
    }
    this.text = text
    this.init()

    return instance = this
  }

  Create.prototype.init = function(){
    var div = document.createElement('div')
    div.innerHTML = this.text
    document.body.appendChild(div)
  }

  return Create
})()

var a = new CreateDiv('sam')
var b = new CreateDiv('tom')

console.log(a === b)
```

## 代理实现单例
引入代理的概念，让类只负责最初的任务，管理单例的任务交给代理来做。
```js
var CreateDiv = function(text){
  this.text = text
  this.init()
}

CreateDiv.prototype.init = function(){
  var div = document.createElement('div')
  div.innerHTML = this.text
  document.body.appendChild(div)
}

var ProxySingletonCreateDiv = (function(){
  // 管理单例
  var instance
  return function(text){
    if(!instance) instance = new CreateDiv(text)

    return instance
  }
})()

var a = new ProxySingletonCreateDiv('sam')
var b = new ProxySingletonCreateDiv('tom')

console.log(a === b)
```
