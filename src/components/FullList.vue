<template>
  <div id="scroll-area">
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
  </div>

</template>

<script>
export default {
  name: 'FullList',
}
</script>

<script setup>
/* eslint-disable */ 
import { onMounted, ref } from 'vue'
import ListItem from '@/components/ListItem.vue'
import { useListsStore } from '@/store/useLists'
import 'intersection-observer'

const store = useListsStore();

// Intersection Observer to set focus list items
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

  // Set list position
  let listRef = document.getElementById('scroll-area');
  listRef.scrollTop = listRef.scrollHeight;

})


</script>

<style scoped>
.section {
  display:flex;
  position:relative;
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

.scroll-stats {
  position: fixed;
  background:blue;
  color:white;
  top:0;
  left:0;
  right:0;
}

#scroll-area {
  position:fixed;
  top:0;
  bottom:0;
  left:0;
  right:0;
  overflow-y: scroll;
  background-color:yellow;
}

</style>