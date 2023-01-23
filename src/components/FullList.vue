<template>
    <div class="section">
        <ListItem v-for="(listItem, index) in store.list" 
        :header="listItem.header" 
        :subheader="listItem.subheader" 
        :done="listItem.done" 
        :id="`list-item-${index}`" 
        :key="index" 
        :inFocus="false"
        ref="listItems"
        class="list-item"
        />
    </div>

</template>

<script>
export default {
  name: 'FullList',
}
</script>

<script setup>
import { onMounted, ref } from 'vue';
import ListItem from '@/components/ListItem.vue'
import { useListsStore } from '@/store/useLists'
import 'intersection-observer'

const store = useListsStore();
let listItems = ref(null)


onMounted(() => {
  let options = {
    root: null,
    rootMargin: '-80% 0% -17% 0%',
    threshold:0.01
  }
  
  let setFocusListItem = (entries) => {
    entries.forEach((entry) => {      
      for (let i=0;i<listItems.value.length;i++) {
        if (entry.target.getAttribute('id') === listItems.value[i].props.id && entry.isIntersecting === true) {
          listItems.value[i].focus.state = true
        } else if (entry.target.getAttribute('id') === listItems.value[i].props.id && entry.isIntersecting === false) {
          listItems.value[i].focus.state = false

        }
      }
    })
  }
  
  let observer = new IntersectionObserver(setFocusListItem, options)

  document.querySelectorAll('.list-item').forEach((listItem) => {
    observer.observe(listItem)
  })
})


</script>

<style scoped>
.section {
  display:flex;
  flex-direction:column-reverse;
  padding-bottom: 8rem;
  padding-top:70vh;
}

</style>