<template>
    <div id="app">
        <kait-sidebar/>
        <div class="navbar-bg"></div>
        <div id="content">
            <kait-navbar/>
            <router-view/>
        </div>
    </div>
</template>
<script>
import '@/assets/scss/admin.scss';
import KaitSidebar from '@/components/Admin/Sidebar.vue';
import KaitNavbar from '@/components/Admin/Navbar.vue';

export default {
    components: {
        KaitSidebar, KaitNavbar
    }
}
</script>