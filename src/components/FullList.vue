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
    <div class="highlight-area"></div>

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
//import { useScroll } from '@vueuse/core'

const store = useListsStore();
let listItems = ref(null)


onMounted(() => {
  let options = {
    root: null,
    rootMargin: '-74% 0% -23% 0%',
    threshold:0.05
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

.highlight-area {
  position:fixed;
  top:74%;
  right:0;
  bottom:23%;
  left:0;
  background-color:red;
  opacity:0.6;
}

</style>