<template>
    <AuthenticatedLayoutView v-if="Authenticated">
        <Suspense>
            <RouterView />
        </Suspense>
    </AuthenticatedLayoutView>
    <RouterView v-else />
</template>



<script setup>
import {computed} from 'vue';
import store from '@/store';
import AuthenticatedLayoutView from '@/views/Pages/AuthenticatedLayoutView/AuthenticatedLayoutView.vue'
const Authenticated = computed(() => store.getters.getFakeAuthenticatedState);
</script>