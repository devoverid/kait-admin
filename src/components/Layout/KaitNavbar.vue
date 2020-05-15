<template>
    <div class='navbar'>
        <div class="navbar-toggle" @click="toggleSidebar()">
            <button class='btn btn-transparent'><i class='fas fa-bars'></i></button>
        </div>
        <div class="navbar-menu">
            <div class="avatar">
                <img src="@/assets/images/avatar/avatar1.png" alt="" srcset="">
            </div>
        </div>
    </div>
</template>
<script>
export default {
    methods: {
        toggleSidebar() {
            this.$store.commit('TOGGLE_IS_SIDEBAR_ACTIVE', !this.isSidebarActive)
            console.log(this.isSidebarActive)
        }
    },
    computed: {
        isSidebarActive: {
            get() {
            return this.$store.state.isSidebarActive;
            },
            set(val) {
            this.$store.commit('TOGGLE_IS_SIDEBAR_ACTIVE', val)
            }
        },
    }
}
</script>