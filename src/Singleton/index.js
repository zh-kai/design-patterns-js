// var Singleton = function(name){
//   this.name = name
//   this.instance = null
// }

// Singleton.prototype.getName = function(){
//   console.log(this.name)
// }

// Singleton.getInstance = function(name){
//   if(!this.instance) this.instance = new Singleton(name)
//   return this.instance
// }

// var a = Singleton.getInstance('sam')
// var b = Singleton.getInstance('tom')

// console.log(a === b)

// ------------------------------------------------------------------------------------------------------------------

// var Singleton = function(name){
//   this.name = name
// }

// Singleton.prototype.getName = function(){
//   console.log(this.name)
// }

// Singleton.getInstance = (function(){
//   var instance = null
//   return function(name) {
//     if(!instance) instance = new Singleton(name)
//     return instance
//   }
// })()

// var c = Singleton.getInstance('sam')
// var d = Singleton.getInstance('tom')

// console.log(c === d)

// ------------------------------------------------------------------------------------------------------------------

// var CreateDiv = (function(){
//   var instance;

//   var Create = function(text){
//     if(instance) {
//       return instance
//     }
//     this.text = text
//     this.init()

//     return instance = this
//   }

//   Create.prototype.init = function(){
//     var div = document.createElement('div')
//     div.innerHTML = this.text
//     document.body.appendChild(div)
//   }

//   return Create
// })()

// var a = new CreateDiv('sam')
// var b = new CreateDiv('tom')

// console.log(a === b)

// ------------------------------------------------------------------------------------------------------------------

// var CreateDiv = function(text){
//   this.text = text
//   this.init()
// }

// CreateDiv.prototype.init = function(){
//   var div = document.createElement('div')
//   div.innerHTML = this.text
//   document.body.appendChild(div)
// }

// var ProxySingletonCreateDiv = (function(){
//   var instance
//   return function(text){
//     if(!instance) instance = new CreateDiv(text)

//     return instance
//   }
// })()

// var a = new ProxySingletonCreateDiv('sam')
// var b = new ProxySingletonCreateDiv('tom')

// console.log(a === b)