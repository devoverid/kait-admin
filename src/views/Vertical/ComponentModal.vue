<template>
    <div class='main-content'>
        <div class="page-header">
            <div class="row">
                <div class="col-md-6">
                    <h3>Modal</h3>
                </div>
                <div class="breadcrumb">
                    
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6 col-12">
                <kait-card>
                    <kait-card-header>Basic Modal</kait-card-header>
                    <kait-card-body>
                        <kait-button @click="openModal()">Open Modal</kait-button>
                        <kait-modal :open='modalBasicOpen' @closeModal="modalBasicOpen=false">
                            <template v-slot:modal-header>
                                Modal Header
                            </template>
                            <template v-slot:modal-body>
                                Modal Body
                            </template>
                            <template v-slot:modal-footer>
                                <span class='text-gray-600'>Modal Footer</span>
                            </template>
                        </kait-modal>
                    </kait-card-body>
                    <kait-card-footer>
                        Card Footer
                    </kait-card-footer>
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
            modalBasicOpen: false,
        }
    },
    methods: {
        openModal() {
            this.modalBasicOpen = true;
            console.log(this.modalBasicOpen)
        }
    }
}
</script>