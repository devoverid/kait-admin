<template>
    <div class='main-content'>
        <div class="page-header">
            <div class="row">
                <div class="col-md-6">
                    <h3>Badge</h3>
                </div>
                <div class="breadcrumb">

                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6 col-12">
                <div class="card">
                    <div class="card-header">Heading</div>
                    <div class="card-body">
                            <h1>Example heading <span class="badge badge-secondary">New</span></h1>
                            <h2>Example heading <span class="badge badge-secondary">New</span></h2>
                            <h3>Example heading <span class="badge badge-secondary">New</span></h3>
                            <h4>Example heading <span class="badge badge-secondary">New</span></h4>
                            <h5>Example heading <span class="badge badge-secondary">New</span></h5>
                            <h6>Example heading <span class="badge badge-secondary">New</span></h6>
                    </div>
                </div>
                <div class="card">
                    <div class="card-header">Variation</div>
                    <div class="card-body">
                        <div class="badges">
                            <span class="badge badge-primary">Primary</span>
                            <span class="badge badge-secondary">Secondary</span>
                            <span class="badge badge-success">Success</span>
                            <span class="badge badge-danger">Danger</span>
                            <span class="badge badge-warning">Warning</span>
                            <span class="badge badge-info">Info</span>
                            <span class="badge badge-light">Light</span>
                            <span class="badge badge-dark">Dark</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-12">
                <div class="card">
                    <div class="card-header">Buttons</div>
                    <div class="card-body">
                        <button class="btn btn-primary">Notification</button>
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