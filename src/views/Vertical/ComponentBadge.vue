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
                <kait-card>
                    <kait-card-header>Heading</kait-card-header>
                    <kait-card-body>
                            <h1>Example heading <kait-badge type="secondary">New</kait-badge></h1>
                            <h2>Example heading <kait-badge type="secondary">New</kait-badge></h2>
                            <h3>Example heading <kait-badge type="secondary">New</kait-badge></h3>
                            <h4>Example heading <kait-badge type="secondary">New</kait-badge></h4>
                            <h5>Example heading <kait-badge type="secondary">New</kait-badge></h5>
                            <h6>Example heading <kait-badge type="secondary">New</kait-badge></h6>
                    </kait-card-body>
                </kait-card>
                <kait-card>
                    <kait-card-header>Variation</kait-card-header>
                    <kait-card-body>
                        <div class="badges">
                            <kait-badge type="primary">Primary</kait-badge>
                            <kait-badge type="secondary">Secondary</kait-badge>
                            <kait-badge type="success">Success</kait-badge>
                            <kait-badge type="danger">Danger</kait-badge>
                            <kait-badge type="warning">Warning</kait-badge>
                            <kait-badge type="info">Info</kait-badge>
                            <kait-badge type="light">Light</kait-badge>
                            <kait-badge type="dark">Dark</kait-badge>
                        </div>
                    </kait-card-body>
                </kait-card>
            </div>
            <div class="col-md-6 col-12">
                <kait-card>
                    <kait-card-header>Buttons</kait-card-header>
                    <kait-card-body>
                        <button class="btn btn-primary">Notification</button>
                    </kait-card-body>
                </kait-card>
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