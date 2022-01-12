<template>
  <section>
    <ChatNav />
    <Chat />
  </section>
</template>

<script>
import ChatNav from "@/components/ChatNav.vue";
import Chat from "@/components/Chat.vue";
export default {
  components: { Chat, ChatNav },
};
</script>

<style lang="scss" scoped>
section {
  padding-top: 80px;
}
</style>
