<template>
  <div>
    <h1>Exclusive Content Access</h1>
    <p v-if="accessCode" vh>Applying access code: <strong v-html="accessCode"></strong></p>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import Dompurify from 'dompurify';
const AccessCode =  {
  setup() {
    const accessCode = ref('');

    onMounted(() => {
      const urlParams = new URLSearchParams(window.location.search);
      const code = urlParams.get('code');
      if (code) {
        accessCode.value = Dompurify.sanitize(code, {
          ALLOWED_TAGS: [],
        });
      }
    });

    return { accessCode };
  }
};

export default AccessCode
</script>
