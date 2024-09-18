<template>
  <div class="thread">
    <div v-html="sanitizedContent"></div>
    <textarea v-model="reply" placeholder="Write a reply..."></textarea>
    <button @click="addReply">Reply</button>
    <div class="replies">
      <div v-for="reply in replies" :key="reply" v-html="reply"></div>
    </div>
  </div>
</template>

<script>
import DOMPurify from 'dompurify';

export default {
  props: ['content'],
  data() {
    return {
      reply: '',
      replies: [],
    };
  },
  computed: {
    sanitizedContent() {
      return DOMPurify.sanitize(this.content);
    },
  },
  methods: {
    addReply() {
      const sanitizedReply = DOMPurify.sanitize(this.reply);
      this.replies.push(sanitizedReply);
      this.reply = '';
    },
  },
};
</script>

<style scoped>
.thread {
  border: 1px solid #eee;
  padding: 15px;
  margin-bottom: 15px;
}
.replies div {
  border-top: 1px solid #eee;
  padding-top: 10px;
}
</style>

