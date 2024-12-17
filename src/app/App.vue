<script setup lang="ts">
import { loginUser } from '../shared/api/loginService';
import { ref, onMounted } from 'vue';

const initData = ref(window.Telegram.WebApp.initData)
const login = async () => {
  const { data, status } = await loginUser('user=%7B%22id%22%3A784590273%2C%22first_name%22%3A%22s%E1%B4%87%CA%80%C9%A2%E1%B4%87%CA%8F%F0%9F%91%A8%E2%80%8D%F0%9F%92%BB%22%2C%22last_name%22%3A%22%22%2C%22username%22%3A%22zmeev_js%22%2C%22language_code%22%3A%22ru%22%2C%22allows_write_to_pm%22%3Atrue%7D&chat_instance=3706109763251593010&chat_type=private&auth_date=1718260463&hash=a18fe6980953d197897a9d19f2709de4fea92f61619e326319ef76f827ee04b3}')
  if (status === 200) {
    localStorage.setItem('jwtToken', data.data)
  }
}

onMounted(() => {
  login()
})
</script>
<template>
  <div class="">
    <RouterView />
  </div>
</template>
