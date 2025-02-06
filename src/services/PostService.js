
import { ref } from "vue";
const URL = import.meta.env.VITE_API_BASE_URL+'/posts';
class PostService {

    constructor() {
        this.posts = ref([]);
    }

    getPosts() {
        return this.posts;
    }
    async fetchAll() {
        try {
            const response = await fetch(URL);
            const data = await response.json();
            this.posts.value =await data;
        }
        catch(error) {
            console.error(error);
        }
    }
}

export default PostService