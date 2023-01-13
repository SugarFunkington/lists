<template>
    <LoadingSpinner />
</template>

<script>
export default {
    name: 'LoadingView',
    components: { LoadingSpinner }
}
</script>

<script setup>
import LoadingSpinner from '@/components/LoadingSpinner.vue'
import { onMounted } from 'vue'
import { useAuthStore } from '@/store/useAuth'

const store = useAuthStore()

onMounted(() => {
    if (localStorage.user === 'Google') {
      store.getGoogleRedirectResult()
    }
})

</script>