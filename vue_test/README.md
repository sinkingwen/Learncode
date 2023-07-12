# Note
## 脚手架文件结构
```c
├── node_modules 
├── public
│   ├── favicon.ico: 页签图标
│   └── index.html:  主页面
├── src
│   ├── assets: 存放静态资源
│   │   └── logo.png
│   │── component: 存放组件
│   │   └── HelloWorld.vue
│   │── App.vue: 汇总所有组件
│   │── main.js: 入口文件
├── .gitignore: git版本管理忽略的配置
├── babel.config.js: babel的配置文件
├── package.json: 应用包配置文件 
├── README.md: 应用描述文件
├── package-lock.json：包版本控制文件
```
## 关于不同版本的Vue
1、`vue.js`与`vue.runtime.xxx.js`的区别：  
- `vue.js`是完整版的Vue，包含着：核心功能和模板解析器
- `vue.runtime.xxx.js`是运行版的Vue，只包含：核心功能，没有模板解析器

2、因为`vue.runtime.xxx.js`没有模板解析器，所以不能使用`template`这个配置项，需要使用`render`函数接收到的`createElement`函数去指定具体内容。

## `vue.config.js`配置文件

1、使用```vue inspect > output.js```命令可以查看到Vue脚手架的默认配置；
2、使用vue.config.js可以对脚手架进行个性化定制，详情见：https://cli.vuejs.org/zh

## ref属性

1、被用来给元素或子组件注册引用信息（id的替代者）
2、应用在html标签上获取的是真实DOM元素，应用在组件标签上是组件实例对象（vc）
3、使用方式：
  1. 打标识：```<h1 ref="xxx">....</h1>```或```<School ref="xxx"></School>```
  2. 获取：```this.$refs.xxx```

## props配置项

1、功能：让组件接收外部传过来的数据
2、传递数据：<Demo name="xxx"/>
3、接收数据：
1. 第一种方式（只接收）：props:['name']
2. 第二种方式（限制类型）：props:{name:String}
3. 第三种方式（限制类型、限制必要性、指定默认值）：
   ```js
   props:{
    name:{
      type:String, //类型
      required:true, //必要性
      default:'Zhangsan' //默认值
    }
   }
   ```
>备注：props是只读的，Vue底层会监测你对props的修改，如果进行了修改，就会发出警告，若业务需求确实需要修改，那么就复制一份props的内容到data中一份，然后去修改data中的数据。

## mixin混入

1. 功能：可以把多个组件共用的配置提取成一个混入对象
2. 使用方式：
第一步定义混入：
```html
{
    data(){....},
    methods:{....}
    ....
}
```
第二步使用混入：

	全局混入：`Vue.mixin(xxx)`
	局部混入：`mixins:['xxx']`

## 插件plugins

1. 功能：用于增强Vue
2. 本质：包含install方法的一个对象，install的第一个参数是Vue，第二个以后的参数是插件使用者传递的数据。
3. 定义插件：
```js
export default {
	install(Vue,x,y,z){
		console.log(x,y,z)
		//全局过滤器
		Vue.filter('mySlice',function(value){
			return value.slice(0,4)
		})

		//定义全局指令
		Vue.directive('fbind',{
			//指令与元素成功绑定时（一上来）
			bind(element,binding){
				element.value = binding.value
			},
			//指令所在元素被插入页面时
			inserted(element,binding){
				element.focus()
			},
			//指令所在的模板被重新解析时
			update(element,binding){
				element.value = binding.value
			}
		})

		//定义混入
		Vue.mixin({
			data() {
				return {
					x:100,
					y:200
				}
			},
		})

		//给Vue原型上添加一个方法（vm和vc就都能用了）
		Vue.prototype.hello = ()=>{alert('你好啊')}
	}
}
```
4. 使用插件，在main.js文件中：Vue.use()

## scoped样式
1. 作用：让样式在局部生效，防止冲突。
2. 写法：`<style scoped>`
3. `npm view webpack versions`命令可以查看webpack一共有多少版本


## TodoList案例总结
1. 组件化编码流程：
   	(1).拆分静态组件：组件要按照功能点拆分，命名不要与html元素冲突。
   	(2).实现动态组件：考虑好数据的存放位置，数据是一个组件在用，还是一些组件在用：
   			1).一个组件在用：放在组件自身即可。
   			2). 一些组件在用：放在他们共同的父组件上（<span style="color:red; font-weight='700'">状态提升</span>）。
   	(3).实现交互：从绑定事件开始。
2. props适用于：
   	(1).父组件 ==> 子组件 通信
   	(2).子组件 ==> 父组件 通信（要求父先给子一个函数）
3. 使用v-model时要切记：v-model绑定的值不能是props传过来的值，因为props是不可以修改的！
4. props传过来的若是对象类型的值，修改对象中的属性时Vue不会报错，但不推荐这样做。

## WebStorage

1. 存储内容大小一般在5MB左右，不同浏览器可能还不太一样。

2. 浏览器端通过 Window.sessionStorage 和 Window.localStorage 属性来实现本地存储机制。

3. 相关API：

   1. ```xxxxxStorage.setItem('key', 'value');```
      		该方法接受一个键和值作为参数，会把键值对添加到存储中，如果键名存在，则更新其对应的值。

   2. ```xxxxxStorage.getItem('person');```

      ​		该方法接受一个键名作为参数，返回键名对应的值。

   3. ```xxxxxStorage.removeItem('key');```

      ​		该方法接受一个键名作为参数，并把该键名从存储中删除。

   4. ``` xxxxxStorage.clear()```

      ​		该方法会清空存储中的所有数据。

      

4. 备注：

   1. SessionStorage存储的内容会随着浏览器窗口关闭而消失。

   2. LocalStorage存储的内容，需要手动清除才会消失。

   3. ```xxxxxStorage.getItem(xxx)```如果xxx对应的value获取不到，那么getItem的返回值是null。

   4. ```JSON.parse(null)```的结果依然是null。

   5. 如果存储的是一个对象，则需要使用相应方法进行转换。

      ```js
      let p = {name:'张三',age:18}
      
      存储：localStorage.setItem('person',JSON.stringify(p))
      
      读取：const result = localStorage.getItem('person')
      			console.log(JSON.parse(result))
      
      ```

## 自定义组件事件

1. 一种组件间通信的方式，适用于：<strong style="color:red">子组件 ===> 父组件</strong>

2. 使用场景：A是父组件，B是子组件，B想给A传数据，那么就要在A中给B绑定自定义事件（<span style="color:red">事件的回调在A中</span>）。

3. 绑定自定义事件：

   1. 第一种方式，在父组件中：```<Demo @check="testfun"/>```  或 ```<Demo v-on:check="testfun"/>```

   2. 第二种方式，在父组件中：

      ```js
      <Demo ref="demo"/>
      ......
      mounted(){
         this.$refs.demo.$on('check',this.testfun)
      }
      ```

   3. 若想让自定义事件只能触发一次，可以使用```once```修饰符，或```$once```方法。

4. 触发自定义事件：```this.$emit('check',数据)```		

5. 解绑自定义事件```this.$off('check')```

6. 组件上也可以绑定原生DOM事件，需要使用```native```修饰符。

7. 注意：通过```this.$refs.demo.$on('check',回调)```绑定自定义事件时，回调<span style="color:red">要么配置在methods中</span>，<span style="color:red">要么用箭头函数</span>，否则this指向会出问题！

   

## 全局事件总线$bus(GlobalEventBus)

1. 一种组件间通信方式，适用于<span style="color:red">任意组件间通信</span>。

2. 安装全局事件总线：

   ```js
   new Vue({
   
    el: '#app',
   
    render: h => h(App),
   
    beforeCreate() {
   
     Vue.prototype.$bus = this //安装全局事件总线，$bus就是当前应用的vm
   
    }
   
   })
   ```

   3.使用全局事件总线：

   1. 接收数据：A组件想要接收数据，则在A组件身上给$bus绑定一个自定义事件，事件的<span style="color:red;">回调函数在A组件中</span>。

   2. 提供数据：```this.$bus.$emit('xxxx',数据)```

      ```js
      App.vue ==>A组件
      
      // 全局事件总线
      
        this.$bus.$on('checkTodo', this.checkTodo)
      
        this.$bus.$on('deleteTodo', this.deleteTodo)
      
      Item.vue ==> B组件
      
      methods: {
          handleCheck(id) {
            // 通知App组件去将对应的todo对象的done值修改
            // 使用全局事件总线触发checkTodo事件，并向App组件传递ID数据
            this.$bus.$emit('checkTodo', id)
          },
          handleDelete(id) {
            // 通知App组件去将对应的todo对象删除
            if (confirm('确定删除此项吗？')) {
              // 使用全局事件总线触发deleteTodo事件，并向App组件传递ID数据
              this.$bus.$emit('deleteTodo', id)
            }
          }
        }
      ```

      

4. 最好在beforeDestroy钩子中，用$off去解绑<span style="color:red">当前组件所用到的</span>事件。

   ```js
   // 在组件销毁前关闭绑定的自定义事件
   
    beforeDestroy() {
   
     // 全局事件总线
   
     this.$bus.$off('checkTodo')
   
     this.$bus.$off('deleteTodo')
   
    }
   ```

   

## 消息订阅与发布（pubsub）

1. 一种组件间通信的方式，适用于<span style="color:red">任意组件间通信</span>。

2. 使用步骤：

   1. 安装pubsub：```npm i pubsub-js```

   2. 引入: ```import pubsub from 'pubsub-js'```

   3. 接收数据：A组件想接收数据，则在A组件中订阅消息，订阅的<span style="color:red">回调留在A组件自身。</span>

      ```js
      methods(){
          // 回调,_是消息名，用来占位
        demo(_, data){......}
      }
      ......
      mounted() {
         // 返回一个消息ID
        this.pid = pubsub.subscribe('xxx',this.demo) //订阅消息
      }
      ```

   4. 提供数据：```pubsub.publish('xxx',传递的数据)```

   5. 最好在beforeDestroy钩子中，用```PubSub.unsubscribe(this.pid)```去<span style="color:red">取消订阅。</span>

## $nextTick

1. 语法：```this.$nextTick(回调函数)```

2. 作用：在下一次 DOM 更新结束后执行其指定的回调。

3. 什么时候用：当改变数据后，要基于更新后的新DOM进行某些操作时，要在nextTick所指定的回调函数中执行。

   

## Vue封装的过渡与动画

1. 作用：在插入、更新或移除 DOM元素时，在合适的时候给元素添加样式类名。

2. 写法：

   准备好样式：

   - 元素进入的样式：
     1. v-enter：进入的起点
     2. v-enter-active：进入过程中
     3. v-enter-to：进入的终点
   - 元素离开的样式：
     1. v-leave：离开的起点
     2. v-leave-active：离开过程中
     3. v-leave-to：离开的终点

​		使用```<transition>```包裹要过渡的元素，并配置name属性：

```vue
<transition name="hello">
	<h1 v-show="isShow">你好啊！</h1>
</transition>
```

​		备注：若有多个元素需要过渡，则需要使用：```<transition-group>```，且每个元素都要指定```key```值。

## Vue脚手架配置代理

### 方法一

在vue.config.js中添加如下配置：

```js
devServer:{

	proxy:"http://localhost:5000"

}
```

说明：

1. 优点：配置简单，请求资源时直接发给前端（8080）即可；

2. 缺点：不能配置多个代理，不能灵活的控制请求是否走代理；

3. 工作方式：若按照上述配置代理，当请求了前端不存在的资源时，那么该请求会转发给服务器（优先匹配前端资源）

   

### 方法二

编写vue.config.js配置文件具体的代理规则：

```js
module.exports = {
	devServer: {
      proxy: {
      '/api1': {// 匹配所有以 '/api1'开头的请求路径
        target: 'http://localhost:5000',// 代理目标的基础路径
        changeOrigin: true,
        pathRewrite: {'^/api1': ''}
      },
      '/api2': {// 匹配所有以 '/api2'开头的请求路径
        target: 'http://localhost:5001',// 代理目标的基础路径
        changeOrigin: true,
        pathRewrite: {'^/api2': ''}
      }
    }
  }
}
/*
   changeOrigin设置为true时，服务器收到的请求头中的host为：localhost:5000
   changeOrigin设置为false时，服务器收到的请求头中的host为：localhost:8080
   changeOrigin默认值为true
*/
```

说明：

1. 优点：可以配置多个代理，并且可以灵活的控制请求是否走代理。
2. 缺点：配置略微繁琐，请求资源时必须加前缀。
