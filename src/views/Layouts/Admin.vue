<template>
    <div id="app">
        <kait-sidebar/>
        <div class="navbar-bg"></div>
        <div id="content">
            <kait-navbar/>
            <vue-page-transition name="fade-in-right">
                <router-view/>
            </vue-page-transition>
        </div>
    </div>
</template>
<script>
import '@/assets/scss/admin.scss';
import KaitSidebar from '@/components/Layout/KaitSidebar.vue';
import KaitNavbar from '@/components/Layout/KaitNavbar.vue';

export default {
    components: {
        KaitSidebar, KaitNavbar
    }
}
</script>