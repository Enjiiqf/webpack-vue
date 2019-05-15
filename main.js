import Vue from 'vue';//汇入Vue架构
import App from './app.vue';//汇入app.vue组件

//建立Vue根实例
new Vue ({
	el: '#app',
	render: h=>h(App)
});
