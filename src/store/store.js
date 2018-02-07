import Vue from 'vue';
import Vuex from 'vuex';

// 使用vuex
Vue.use(Vuex);

let tag = 1;
const state = {
  count: 1,
};
// getters获取数据之前进行再编辑，相当于计算属性;eslint:不能在return语句中进行计算，否则会有警告
const getters = {
  count: state => {
    if (tag === 2) {
      state.count += 100;
    } else {
      state.count += 0;
    }
    return state.count;
  },
};
// 添加改变state的方法。此处的mutaions是固定写法，意思是改变，改变state数值的方法必须写在这里面
// actions和mutations一样，不同的是actions是异步改变state;mutations是同步改变state
const mutat = {
  // 加1
  add(state, n) {
    tag = 2;
    state.count += n;
  },
  // 减1
  reduce(state) {
    tag = 1;
    state.count -= 1;
  },
};
const actions = {
  // context 表示store本身
  addAction(context) {
    context.commit('add', 10);
  },
  // 直接把commit对象传过来，使方法体逻辑和代码清晰明了
  reduceAction({ commit }) {
    commit('reduce');
  },
};
// 封装代码，使外部可以调用
export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  // 相当于state:state,如果key和value一样，可以简写;mutations同上,state和mutations是固定写法
  state,
  mutations: mutat,
  getters,
  actions,
});
