<template>
  <div class="single-blog">
    <span class="post-views"> {{ post.views }} </span>
    <h3 class="post-title">{{ post.title }}</h3>
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
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
      post: {},
    };
  },
  created() {
    this.$http
      .get(
        `https://blog-vue-122f3-default-rtdb.firebaseio.com/posts/${this.id}.json`
      )
      .then((data) => data.json())
      .then((data) => {
        this.post = data;
      });
  },
};
</script>

<style>
.single-blog * {
  margin-bottom: 10px;
}
.single-blog {
  max-width: 700px;
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
}
</style>