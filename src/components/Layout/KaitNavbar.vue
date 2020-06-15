<template>
    <div class='navbar'>
        <div class="navbar-toggle" @click="toggleSidebar()">
            <button class='btn btn-transparent'><i class='fas fa-bars'></i></button>
        </div>
        <div class="navbar-menu flex items-center">
            <kait-dropdown v-model="isDropdownShow" animation="slide-vertical" position="right" >
                <template v-slot:toggler>
                    <kait-avatar :src="require('@/assets/images/avatar/avatar1.png')" @click="isDropdownShow=!isDropdownShow" size="small" ></kait-avatar>
                </template>
                <template v-slot:dropdown>
                    <kait-dropdown-item url="#" class='text-xs text-gray-700'><i class="fas fa-sign-out-alt"></i> <span class='ml-2'>Logout</span></kait-dropdown-item>
                </template>
            </kait-dropdown>
        </div>
    </div>
</template>
<script>
export default {
    mounted() {

    },
    data() {
        return {
            isDropdownShow: false,
        }
    },
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