import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useListsStore = defineStore('listStore', () => {

    const list = ref([{
            header: "Order something new for the garden",
            subheader: "Better make it something really nice that needs quite a long description.",
            done: true
        },{
            header: "Order something new for the garden",
            subheader: "Better make it something really nice that needs quite a long description.",
            done: false
        },{
            header: "Order something new for the garden",
            subheader: "Better make it something really nice that needs quite a long description.",
            done: false
        },{
            header: "Order something new for the garden",
            subheader: "Better make it something really nice that needs quite a long description.",
            done: false
        },{
            header: "Order something new for the garden",
            subheader: "Better make it something really nice that needs quite a long description.",
            done: false
        },{
            header: "Order something new for the garden",
            subheader: "Better make it something really nice that needs quite a long description.",
            done: false
        },{
            header: "Order something new for the garden",
            subheader: "Better make it something really nice that needs quite a long description.",
            done: false
        },{
            header: "Order something new for the garden",
            subheader: "Better make it something really nice that needs quite a long description.",
            done: false
        }
    ])

    return { list }
})