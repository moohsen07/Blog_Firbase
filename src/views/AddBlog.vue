<template>
  <div id="add-blog">
    <h2>Add a New Blog Post</h2>
    <form v-if="!submitted">
      <label>Blog Title:</label>
      <input type="text" v-model.lazy="blog.title" required />

      <label>Blog Content:</label>
      <textarea v-model.lazy.trim="blog.content"></textarea>

      <div id="checkboxes">
        <p>Blog Categories:</p>
        <label>Football</label>
        <input type="checkbox" value="Football" v-model="blog.categories" />
        <label>Politics</label>
        <input type="checkbox" value="Politics" v-model="blog.categories" />
        <label>Food</label>
        <input type="checkbox" value="Food" v-model="blog.categories" />
        <label>BasketBall</label>
        <input type="checkbox" value="BasketBall" v-model="blog.categories" />
        <label>Others</label>
        <input type="checkbox" value="Others" v-model="blog.categories" />
      </div>

      <label>Author:</label>
      <select v-model.lazy="blog.author">
        <option v-for="author in authors" :key="author">{{ author }}</option>
      </select>

      <button v-on:click.prevent="post">Add Blog</button>
    </form>

    <div v-if="submitted">
      <h3 class="success">Thanks for adding your post</h3>
    </div>

    <div id="preview">
      <h3>Preview blog</h3>
      <p>Blog title: {{ blog.title }}</p>
      <p>Blog content:</p>
      <p>{{ blog.content }}</p>
      <p>Blog Categories:</p>
      <ul style="list-style-type: none">
        <li v-for="category in blog.categories" :key="category">
          {{ category }}
        </li>
      </ul>
      <p>Author: {{ blog.author }}</p>
    </div>
  </div>
</template>

<script>
// Imports
export default {
  data() {
    return {
      blog: {
        title: "",
        content: "",
        categories: [],
        views: Math.floor(Math.random() * 500),
        author: "Ahmed",
      },
      authors: ["Ahmed", "Mohsin", "Evouna"],
      submitted: false,
    };
  },
  methods: {
    post() {
      this.$http
        .post(
          "https://blog-vue-122f3-default-rtdb.firebaseio.com/posts.json",
          this.blog
        )
        .then((data) => {
          this.submitted = true;
        });
    },
  },
};
</script>

<style scoped>
#add-blog * {
  box-sizing: border-box;
}
#add-blog {
  max-width: 700px;
  margin: 0 auto;
  padding: 0 30px;
}
label {
  display: block;
  margin: 20px 0 10px;
}
input[type="text"],
textarea {
  display: block;
  width: 100%;
  padding: 8px;
}
#preview {
  padding: 10px 20px;
  border: 1px solid #000;
  margin: 30px 0;
}
h3,
p {
  margin-top: 10px;
}
#checkboxes input {
  display: inline-block;
  margin-right: 10px;
}
#checkboxes label {
  display: inline-block;
  margin: 10px;
}
select {
  width: 100%;
  padding: 5px;
  font-size: 15px;
  border: none;
}
button {
  display: block;
  background-color: #fff;
  color: #181818;
  padding: 10px 30px;
  margin: 30px auto;
  border: none;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
}
input:focus,
textarea:focus,
select:focus {
  outline: none;
}
li {
  padding: 5px 20px;
  background-color: #fff;
  display: inline-block;
  border-radius: 5px;
  margin: 10px;
  font-size: 13px;
  font-weight: bold;
}
.success {
  background-color: #d1e7dd;
  color: #0f5137;
  padding: 10px;
  width: 80%;
  margin: 20px auto;
  border-radius: 5px;
  text-align: center;
  font-weight: normal;
  letter-spacing: 2px;
}
</style>