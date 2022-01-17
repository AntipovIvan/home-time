<template>
  <nav class="chat-nav">
    <div>
      <div v-if="isLogin" class="login">
        <Avatar :src="user.photoURL" />
        <button class="text-black" @click="signOut">Sign Out</button>
      </div>
      <button v-else class="bg-green-500 hover:bg-green-600" @click="signIn">
        Sign In
      </button>
      <h1>チャットルーム</h1>
    </div>
  </nav>
</template>

<script>
import Avatar from "./Avatar.vue";
import { useAuth } from "@/firebase";
import "@/main.css";
export default {
  components: { Avatar },
  setup() {
    const { user, isLogin, signOut, signIn } = useAuth();
    return { user, isLogin, signOut, signIn };
  },
};
</script>
