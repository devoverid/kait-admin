<template>
    <div class='main-content'>
        <div class="page-header">
            <div class="row">
                <div class="col-md-6">
                    <h3>Avatar</h3>
                </div>
                <div class="breadcrumb">

                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6 col-12">
                <kait-card>
                    <kait-card-header>Basic Usage</kait-card-header>
                    <kait-card-body>
                        <div class="flex">
                            <kait-avatar size='small'></kait-avatar>
                            <kait-avatar text="Saugi"></kait-avatar>
                            <kait-avatar size="large" :src="require('@/assets/images/avatar/avatar-s-1.png')"></kait-avatar>
                        </div>
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
</style>