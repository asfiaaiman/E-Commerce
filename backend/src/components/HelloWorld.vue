<script setup>
import {ref, computed} from 'vue'
import store from "@/store/index.js";


const test = computed(() => store.state.test)

defineProps({
    msg: {
        type: String,
        required: true
    }
})
</script>

<template>
    {{ test }}
</template>
