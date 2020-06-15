<template>
    <div class='main-content'>
        <div class="page-header">
            <div class="row">
                <div class="col-md-6">
                    <h3>Dropdown</h3>
                </div>
                <div class="breadcrumb">
                    
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6 col-12">
                <kait-card>
                    <kait-card-header>Dropdown Button</kait-card-header>
                    <kait-card-body>
                        <kait-dropdown v-model="dropdownShow1" animation="slide-vertical">
                            <template v-slot:toggler>
                                <kait-button @click="dropdownShow1=!dropdownShow1">Toggle Dropdown</kait-button>
                            </template>
                            <template v-slot:dropdown>
                                <kait-dropdown-item url="#">Link 1</kait-dropdown-item>
                                <kait-dropdown-item url="#">Link 2</kait-dropdown-item>
                                <kait-dropdown-item url="#">Link 3</kait-dropdown-item>
                            </template>
                        </kait-dropdown>
                    </kait-card-body>
                    <kait-card-footer>
                        Card Footer
                    </kait-card-footer>
                </kait-card>
            </div>
            <div class="col-md-6 col-12">
                <kait-card>
                    <kait-card-header>Events</kait-card-header>
                    <kait-card-body>
                        <kait-dropdown v-model="dropdownShow2" animation="slide-vertical" @onOpen="message='You opened the dropdown'" @onClose="message='You closed the dropdown'">
                            <template v-slot:toggler>
                                <kait-button @click="dropdownShow2=!dropdownShow2">Toggle Dropdown</kait-button>
                            </template>
                            <template v-slot:dropdown>
                                <kait-dropdown-item url="#">Link 1</kait-dropdown-item>
                                <kait-dropdown-item url="#">Link 2</kait-dropdown-item>
                                <kait-dropdown-item url="#">Link 3</kait-dropdown-item>
                            </template>
                        </kait-dropdown>
                    </kait-card-body>
                    <kait-card-footer>
                        {{message}}
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
            dropdownShow1: false,
            dropdownShow2: false,
            message: '',
        }
    },
}
</script>