<script lang="ts" setup>
import { getAuth, signOut } from 'firebase/auth'
import { useRouter } from 'vue-router'

const router = useRouter()

async function closeSession() {
  signOut(getAuth())
    .then(() => {
      console.log('User signed out')
      router.push({ path: '/' })
    })
    .catch((error) => {
      console.error('Error signing out:', error)
    })
}
</script>

<template>
  <div>Some secret stuff</div>
  <button @click="closeSession">Sign out</button>
</template>
