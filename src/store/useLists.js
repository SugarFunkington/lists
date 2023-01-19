import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useListsStore = defineStore('listStore', () => {

    const list = ref([{
            header: "Order something new for the garden",
            subheader: "Better make it something nice!",
            done: false
        },{
            header: "Order something new for the garden",
            subheader: "Better make it something nice!",
            done: false
        },{
            header: "Order something new for the garden",
            subheader: "Better make it something nice!",
            done: false
        },{
            header: "Order something new for the garden",
            subheader: "Better make it something nice!",
            done: false
        },{
            header: "Order something new for the garden",
            subheader: "Better make it something nice!",
            done: false
        },{
            header: "Order something new for the garden",
            subheader: "Better make it something nice!",
            done: false
        },{
            header: "Order something new for the garden",
            subheader: "Better make it something nice!",
            done: false
        },{
            header: "Order something new for the garden",
            subheader: "Better make it something nice!",
            done: false
        }
    ])

    return { list }
})