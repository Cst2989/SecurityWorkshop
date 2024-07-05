<template>
  <div v-html="sanitizedReviewContent"></div>
</template>

<script>
import DOMPurify from 'dompurify'; 
const ReviewComponent = {
  props: ['reviewContent'],
  computed: {
    sanitizedReviewContent() {
      return DOMPurify.sanitize(this.reviewContent);
    }
  }
};

export default ReviewComponent
</script>

