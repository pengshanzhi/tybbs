<template>

       
        
            <div id="preview">
            <h3>博客总览</h3>
            <div v-for="(blog,i) in blogs" :key=i>
                <h2>{{blog.title}}</h2>
                <article>
                    {{blog.body}}
                </article>
            </div>
            </div>
        
</template>

<script>
export default {
    name:'preview',
    data(){
        return{
    
            blogs:[]

        }
    },
    methods:{
        
    },
    created(){
        this.$http.get('http://jsonplaceholder.typicode.com/posts')
        .then(function(data){
            console.log(data);
            this.blogs = data.body.slice(0,10);
        })
    }
}
</script>

<style scoped>

</style>
