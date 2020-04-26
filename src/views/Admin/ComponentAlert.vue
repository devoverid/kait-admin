<template>
    <div class='main-content'>
        <div class="page-header">
            <div class="row">
                <div class="col-md-6">
                    <h3>Alert</h3>
                </div>
                <div class="breadcrumb">

                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6 col-12">
                <div class="card">
                    <div class="card-header">Default Alert</div>
                    <div class="card-body">
                        <div class="alert alert-primary">This is a primary alert.</div>
                        <div class="alert alert-secondary">This is a secondary alert.</div>
                        <div class="alert alert-success">This is a success alert.</div>
                        <div class="alert alert-danger">This is a danger alert.</div>
                        <div class="alert alert-warning">This is a warning alert.</div>
                        <div class="alert alert-info">This is a info alert.</div>
                        <div class="alert alert-light">This is a light alert.</div>
                        <div class="alert alert-dark">This is a dark alert.</div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-header">Dismissable</div>
                    <div class="card-body">
                        <transition name="fade">
                            <div class="alert alert-primary alert-dismissable" v-show="dismissable.primary">This is a primary alert. <button class="close" @click="dismissable.primary=false">x</button></div>
                        </transition>
                        <transition name="fade">
                            <div class="alert alert-secondary alert-dismissable" v-show="dismissable.secondary">This is a secondary alert. <button class="close" @click="dismissable.secondary=false">x</button></div>
                        </transition>
                        <transition name="fade">
                            <div class="alert alert-success alert-dismissable" v-show="dismissable.success">This is a success alert. <button class="close" @click="dismissable.success=false">x</button></div>
                        </transition>
                        <transition name="fade">
                            <div class="alert alert-danger alert-dismissable" v-show="dismissable.danger">This is a danger alert. <button class="close" @click="dismissable.danger=false">x</button></div>
                        </transition>
                        <transition name="fade">
                            <div class="alert alert-warning alert-dismissable" v-show="dismissable.warning">This is a warning alert. <button class="close" @click="dismissable.warning=false">x</button></div>
                        </transition>
                        <transition name="fade">
                            <div class="alert alert-info alert-dismissable" v-show="dismissable.info">This is a info alert. <button class="close" @click="dismissable.info=false">x</button></div>
                        </transition>
                        <transition name="fade">
                            <div class="alert alert-light alert-dismissable" v-show="dismissable.light">This is a light alert. <button class="close" @click="dismissable.light=false">x</button></div>
                        </transition>
                        <transition name="fade">
                            <div class="alert alert-dark alert-dismissable" v-show="dismissable.dark">This is a dark alert. <button class="close" @click="dismissable.dark=false">x</button></div>
                        </transition>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-12">
                <div class="card">
                    <div class="card-header">Title</div>
                    <div class="card-body">
                        <div class="alert alert-primary">
                            <div class="alert-title">Primary</div>
                            This is a primary alert.
                        </div>
                        <div class="alert alert-secondary">
                            <div class="alert-title">Secondary</div>
                            This is a secondary alert.
                        </div>
                        <div class="alert alert-success">
                            <div class="alert-title">Success</div>
                            This is a success alert.
                        </div>
                        <div class="alert alert-danger">
                            <div class="alert-title">Danger</div>
                            This is a danger alert.
                        </div>
                        <div class="alert alert-warning">
                            <div class="alert-title">Warning</div>
                            This is a warning alert.
                        </div>
                        <div class="alert alert-info">
                            <div class="alert-title">Info</div>
                            This is a info alert.
                        </div>
                        <div class="alert alert-light">
                            <div class="alert-title">Light</div>
                            This is a light alert.
                        </div>
                        <div class="alert alert-dark">
                            <div class="alert-title">Dark</div>
                            This is a dark alert.
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-header">With Icon</div>
                    <div class="card-body">
                        <div class="alert alert-primary">
                            <i class='fas fa-check-circle'></i> This is a primary alert.
                        </div>
                        <div class="alert alert-secondary">
                            <i class='fas fa-check-circle'></i> This is a secondary alert.
                        </div>
                        <div class="alert alert-success">
                            <i class='fas fa-check-circle'></i> This is a success alert.
                        </div>
                        <div class="alert alert-danger">
                            <i class='fas fa-exclamation-circle'></i> This is a danger alert.
                        </div>
                        <div class="alert alert-warning">
                            <i class='fas fa-check-circle'></i> This is a warning alert.
                        </div>
                        <div class="alert alert-info">
                            <i class='fas fa-check-circle'></i> This is a info alert.
                        </div>
                        <div class="alert alert-light">
                            <i class='fas fa-check-circle'></i> This is a light alert.
                        </div>
                        <div class="alert alert-dark">
                            <i class='fas fa-check-circle'></i> This is a dark alert.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import 'vue-waves-effect/dist/vueWavesEffect.css'

export default {
    data() {
        return {
            dismissable: {
                primary: true,
                secondary: true,
                warning: true,
                danger: true,
                success: true,
                light: true,
                dark: true,
                info: true,
            }
        }
    }
}
</script>
<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>