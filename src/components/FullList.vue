<template>
    <div class="section">
        <ListItem v-for="(listItem, index) in store.list" :header="listItem.header" :subheader="listItem.subheader" :done="listItem.done" :id="index" :key="index"/>
    </div>
</template>

<script>
export default {
  name: 'FullList'
}
</script>

<script setup>
import ListItem from '@/components/ListItem.vue'
import { useListsStore } from '@/store/useLists'

const store = useListsStore();
</script>