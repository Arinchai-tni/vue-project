<template>
    <div>
        <div class="container"> 
            <div class="task-zone">
                <div class="drop-zone">
                <h1>To-Do</h1>
                    <div class="drag-el" v-for="task in todoList" :key="task.id">{{task.title}}</div>
            </div> 
                <div class="drop-zone">
                <h1>Doing</h1>
                    <div class="drag-el" v-for="task in doingList" :key="task.id">{{task.title}}</div>
            </div>   
                <div class="drop-zone">
                <h1>Done</h1>
                    <div class="drag-el" v-for="task in doneList" :key="task.id">{{task.title}}</div>
                </div>
                <div class="drop-zone">
                <h1>Done</h1>
                    <div class="drag-el" v-for="task in doneList" :key="task.id">{{task.title}}</div>
                </div>
            </div>      
        </div>
    </div>
    
</template>>
<script>
export default {
    name: 'TaskList',
    data(){
        return{
            tasks:[
                {
                    id: 1,
                    title: 'Item A',
                    status: 'todo'

                },
                {
                    id: 2,
                    title: 'Item B',
                    status: 'todo'

                },
                {
                    id: 3,
                    title: 'Item C',
                    status: 'todo'

                },
                {
                    id: 4,
                    title: 'Item D',
                    status: 'doing'

                }
            ]
        }
    },
    computed:{
        todoList(){
            return this.tasks.filter(task => task.status == "todo")
        },
        doingList(){
            return this.tasks.filter(task => task.status == "doing")
        },
        doneList(){
            return this.tasks.filter(task => task.status == "done")
        }
    }
}
</script>

<style scoped>
.container{
    margin: 30px 0;
}
.task-zone{
    display: flex;
    justify-content: space-around;
}
.drop-zone{
    border: 1px solid black;
    width: 250px;
    height: 400px;
    padding: 10px 0;
}
.drag-el{
    border: 1px solid black;
    width: 200px  ;
    height: 40px;
    
}
</style>