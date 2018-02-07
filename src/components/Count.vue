<template>
  <div>
    <h2>{{msg}}</h2>
    <hr />
    <h3>{{count}}</h3>
    <div>
      <!-- vuex提供了commit方法来修改状态 -->
      <!-- <button @click="$store.commit('add',10)">点击加10，额外增加100</button>
      <button @click="$store.commit('reduce')">点击减少1</button> -->
      <button @click="add(10)">点击加10，额外增加100</button>
      <button @click="reduce">点击减少1</button>
      <!-- <button @click="addAction">点击加10，额外增加100</button>
      <button @click="reduceAction">点击减少1</button> -->
    </div>
  </div>
</template>
<script>
// 引入store文件
import store from '@/store/store';
// 使用mapState,mapMutations,mapGetters简化代码写法
import { mapState, mapMutations, mapGetters, mapActions } from 'vuex';

export default {
  data() {
    return {
      msg: 'hello Vuex',
    };
  },
  // 计算属性可以在输出前，对data中的值进行改变，一定要写this不然找不到$store
  // computed: {
  //   count() {
  //     return this.$store.state.count;
  //   },
  // },
  // 通过mapState的对象来赋值
  // computed: mapState({
  //   count: state => state.count, // 理解为传入state对象，修改state.count属性
  // }),
  computed: {
    ...mapState(['count']),
    ...mapGetters(['count']),
    // count() {
    //   return this.$store.getters.count;
    // },
  },
  store,
  // 替换$store.commit()，改成@click="方法名"
  methods: {
    ...mapMutations(['add', 'reduce']),
    ...mapActions(['addAction', 'reduceAction']),
  },
};
</script>
