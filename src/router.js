import Vue from "vue";
import Router from "vue-router";
import TodoPage from "./pages/TodoPage.vue";
import ArchivePage from "./pages/ArchivePage.vue";

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: "/",
            name: "todo",
            component: TodoPage
        },
        {
            path: "/archive",
            name: "archive",
            component: ArchivePage
        }
    ]
})