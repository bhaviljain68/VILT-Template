<script setup>
defineProps({
    type: {
        type: String,
        default: 'submit',
    },
});
</script>

<template>
    <button
        :type="type"
        class="inline-flex items-center px-4 py-2 bg-primary border border-transparent rounded-md font-semibold text-sm text-neutral uppercase tracking-widest hover:scale-110 transition ease-in-out duration-200"
    >
        <slot />
    </button>
</template>
