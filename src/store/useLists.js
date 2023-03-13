import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useListsStore = defineStore('listStore', () => {

    const list = ref([{
            header: "Order something new for the ",
            subheader: "1 Better make it something nice!",
            done: true
        },{
            header: "Order something new for the ",
            subheader: "2 Better make it something nice!",
            done: false
        },{
            header: "Order something new for the ",
            subheader: "3 Better make it something nice!",
            done: false
        },{
            header: "Order something new for the garden",
            subheader: "4 Better make it something nice!",
            done: false
        },{
            header: "Order something new for the garden",
            subheader: "5 Better make it something nice!",
            done: false
        },{
            header: "Order something new for the",
            subheader: "6 Better make it something nice!",
            done: false
        },{
            header: "Order something new for the",
            subheader: "Better make it something nice!",
            done: false
        },{
            header: "Order something new for the",
            subheader: "Better make it something nice!",
            done: false
        }
    ])

    return { list }
})