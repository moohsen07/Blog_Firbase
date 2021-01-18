<template>
  <div class="about">
    <input type="text" v-model="search" placeholder="Search Post" />
    <div v-if="posts">
      <div v-for="post in filterPosts" :key="post.id" class="blog">
        <span class="remove" @click="removePost(post)">+</span>
        <span class="post-views"> {{ post.views }} </span>
        <router-link :to="/blog/ + post.id">
          <h3 class="post-title">{{ post.title }}</h3>
        </router-link>
        <span class="post-date"> {{ post.date }} </span>
        <p class="post-content">
          {{ post.content }}
        </p>
        <div class="flex">
          <ul style="margin: 0">
            <li v-for="category in post.categories" :key="category">
              {{ category }}
            </li>
          </ul>
          <span class="author"> {{ post.author }} </span>
        </div>
      </div>
    </div>
    <div v-else>
      <div class="loading"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      posts: null,
      search: "",
    };
  },
  methods: {
    removePost(post) {
      this.posts = this.posts.filter((elem) => {
        return post !== elem;
      });
    },
  },
  computed: {
    filterPosts() {
      return this.posts.filter((post) => {
        return post.title.match(this.search);
      });
    },
  },
  mounted() {
    this.$http
      .get("https://blog-vue-122f3-default-rtdb.firebaseio.com/posts.json")
      .then((data) => data.json())
      .then((data) => {
        let blogsArr = [];
        for (let key in data) {
          data[key].id = key;
          blogsArr.push(data[key]);
        }
        this.posts = blogsArr;
        console.log(this.posts);
      });
  },
};
</script>



<style >
.about {
  max-width: 700px;
  margin: 0 auto;
  padding: 0 30px;
}
.about * {
  margin-bottom: 10px;
}
input {
  width: 100%;
  padding: 10px;
}
.blog {
  text-align: left;
  background: linear-gradient(
    to right bottom,
    rgba(255, 255, 255, 0.7),
    rgba(255, 255, 255, 0.3)
  );
  backdrop-filter: blur(2rem);
  margin: 40px auto;
  padding: 20px;
  border-radius: 10px;
  position: relative;
  overflow: hidden;
}
.remove {
  display: block;
  transform: rotate(45deg);
  position: absolute;
  right: 5px;
  top: 0px;
  font-size: 30px;
  color: #ff0101;
  cursor: pointer;
}
.post-views {
  position: absolute;
  right: 40px;
  top: 25px;
  background-color: #42b983;
  color: #fff;
  padding: 4px;
  border-radius: 6px;
  font-size: 14px;
}
a {
  text-decoration: none;
  color: inherit;
}
.flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0 0 0;
}
.author {
  background-color: crimson;
  padding: 5px 20px;
  color: #fff;
  border-radius: 5px;
}
li {
  padding: 5px 20px;
  background-color: #fff;
  display: inline-block;
  border-radius: 5px;
  margin-right: 10px;
  font-size: 13px;
  font-weight: bold;
  list-style-type: none;
}
.loading {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 10px gray dotted;
  margin: 100px auto;
  animation: snip linear 1.4s infinite;
}
@keyframes snip {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
