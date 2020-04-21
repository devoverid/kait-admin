<template>
  <div class='sidebar-wrapper'>
    <div class="" id="sidebar">
      <div class="sidebar-header">
        <div class="logo">
          <img src="@/assets/images/logo/type.svg" alt="">
        </div>
      </div>
      <div class="sidebar-menu">
        <ul>
          <li class='sidebar-item' v-for="sidebarItem in sidebarItems" :key="sidebarItem.text">
            <router-link :to="sidebarItem.url"><i :class='sidebarItem.icon'></i><span>{{ sidebarItem.text }}</span></router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import sidebarItems from './sidebar-items.json';

export default {
    name: 'KaitSidebar',
    data() {
        return {
            sidebarItems: sidebarItems,
        }
    }
}
</script>