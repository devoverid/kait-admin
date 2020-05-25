<template>
    <div class='main-content'>
        <div class="page-header">
            <div class="row">
                <div class="col-md-6">
                    <h3>Pagination</h3>
                </div>
                <div class="breadcrumb">
                    
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6 col-12">
                <kait-card>
                    <kait-card-header>Basic Pagination</kait-card-header>
                    <kait-card-body>
                        <kait-pagination :total="40" v-model="currentPaginate" type="simple" ></kait-pagination>
                        <kait-pagination :total="40" v-model="currentPaginate" class='mt-4'></kait-pagination>
                        <kait-pagination :total="40" v-model="currentPaginate" type="long" class='mt-4'></kait-pagination>
                    </kait-card-body>
                    <kait-card-footer>
                        Card Footer
                    </kait-card-footer>
                </kait-card>
                <kait-card>
                    <kait-card-header>Color</kait-card-header>
                    <kait-card-body>
                        <kait-pagination :total="40" v-model="triggerPaginate" color="danger"></kait-pagination>
                        <p v-if="message" class='mt-2'>{{message}}</p>
                    </kait-card-body>
                </kait-card>
            </div>
            <div class="col-md-6 col-12">
                <kait-card>
                    <kait-card-header>Trigger Event</kait-card-header>
                    <kait-card-body>
                        <kait-pagination :total="40" v-model="triggerPaginate" class='mt-4' @onNextPage="nextPage()" @onPrevPage="prevPage()" @onToPage="toPage()"></kait-pagination>
                        <p v-if="message" class='mt-2'>{{message}}</p>
                    </kait-card-body>
                </kait-card>
                <kait-card>
                    <kait-card-header>Programmatic Inc/dec</kait-card-header>
                    <kait-card-body>
                        <p class="mb-2">Current Page: {{ programmaticPaginate }}</p>
                        <kait-button class='mr-3' @click="programmaticPaginate--">Decrement</kait-button>
                        <kait-button @click="programmaticPaginate++">Increment</kait-button>
                        <kait-pagination :total="40" v-model="programmaticPaginate" type="long" class='mt-4' float="right"></kait-pagination>
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
            currentPaginate: 7,
            triggerPaginate: 7,
            programmaticPaginate: 7,
            message: '',
        }
    },
    methods: {
        nextPage() {
            this.message = "You clicked next page. Going to page "+this.triggerPaginate;
        },
        prevPage() {
            this.message = "You clicked previous page. Going to page "+this.triggerPaginate;
        },
        toPage() {
            this.message = "You go to page "+this.triggerPaginate
        }
    },
}
</script>