<template>
    <div class="test">
        <h2>添加博客</h2>
        <form>
            <label>博客标题:</label>
            <input type="text" v-model="blog.title" required /><br>
            <label>博客内容</label><br>
            <textarea v-model="blog.content" cols="30" rows="10"></textarea>
            <br>
        
        
            <div>
                <label>Vue.js
                <input type="checkbox" v-model="blog.categories" value="Vue.js"></label><br>
                  <label>Vode.js
                <input type="checkbox" v-model="blog.categories" value="Vode.js"></label><br>
                <label>React.js
                <input type="checkbox" v-model="blog.categories" value="React.js"></label><br>
                <label>Angular.js
                <input type="checkbox" v-model="blog.categories" value="Angular.js"></label><br>  
            </div>
            <button @click.prevent="post">添加博客</button>
           

            </form>
            <div id="preview">
            <h3>博客总览</h3>
            <p>博客标题:{{blog.title}}</p>
            <p>博客内容:</p>
            <p>{{blog.content}}</p>
            <p>博客分类:</p>
            <ul>
                <li v-for="(category,i) in blog.categories" :key=i>{{category}}</li>
            </ul>
            </div>

            <datetime title="时&emsp;&emsp;&nbsp;间" v-model="time1" value-text-align="left"></datetime>
        
    </div>
</template>

<script>
import { Group,Datetime } from 'vux'
export default {
  


  components: {
    Group,Datetime
  },

    name:'test',
    data(){
        return{
            blog:{
                title:"",
                content:"",
                categories:[]
            }

        }
    },
    methods:{
        post:function(){
            this.$http.post("http://jsonplaceholder.typicode.com/posts",{
                title:this.blog.title,
                body:this.blog.content,
                userId:1

            })
            .then(function(data){
                console.log(data);
            })
        }
    }
}
</script>

<style scoped>

</style>
