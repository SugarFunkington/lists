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

let listItems = ref(null)

onMounted(() => {
  
  // Intersection Observer to set focus list items
  
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
  
  let options = {
    root: null,
    rootMargin: '-73.5% 0% -22.5% 0%',
    threshold:0.05
  }
  
  let observer = new IntersectionObserver(setFocusListItem, options)

  document.querySelectorAll('.list-item').forEach((listItem) => {
    observer.observe(listItem)
  })

  // Set list position
  let listRef = document.getElementById('scroll-area');
  listRef.scrollTop = listRef.scrollHeight;

  const scrollToFocussedItem = () => {

    let focussedItemRef = document.getElementsByClassName('focussed-item')[0]

    let focussedItemRefBottomY = Math.round(focussedItemRef.getBoundingClientRect().bottom)
    let targetY = Math.round(window.innerHeight * 0.775)

    let differenceY = focussedItemRefBottomY - targetY
    let desiredY = listRef.scrollTop + differenceY

    listRef.scrollTo({
      top: desiredY,
      behavior:"smooth"
    })
  }

  listRef.onscroll = event => {
    clearTimeout(window.scrollEndTimer)
    window.scrollEndTimer = setTimeout(() => scrollToFocussedItem(), 100)
  }

})

</script>

<style scoped>
.section {
  display:flex;
  position:relative;
  flex-direction:column;
  padding-bottom: 8rem;
  padding-top:70vh;
}

.highlight-area {
  position:fixed;
  top:73.5%;
  right:0;
  bottom:22.5%;
  left:0;
  /* background-color:red; */
  opacity:0.6;
}


#scroll-area {
  position:fixed;
  top:0;
  bottom:0;
  left:0;
  right:0;
  overflow-y: scroll;
}

</style>