<template>
    <div class='main-content'>
        <div class="page-header">
            <div class="row">
                <div class="col-md-6">
                    <h3>Radio Button</h3>
                </div>
                <div class="breadcrumb">
                    
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6 col-12">
                <kait-card>
                    <kait-card-header>Basic Radio</kait-card-header>
                    <kait-card-body>
                        <kait-radio name="radio1" label="Lorem" val="lorem" v-model="radio1"></kait-radio>
                        <kait-radio name="radio1" label="Ipsum" val="ipsum" v-model="radio1"></kait-radio>
                    </kait-card-body>
                    <kait-card-footer>
                        You choosed: {{radio1}}
                    </kait-card-footer>
                </kait-card>
                <kait-card>
                    <kait-card-header>Color</kait-card-header>
                    <kait-card-body>
                        <kait-radio name="radio2" label="Primary" val="primary" :color="radio2" v-model="radio2" ></kait-radio>
                        <kait-radio name="radio2" label="Warning" val="warning" :color="radio2" v-model="radio2" ></kait-radio>
                        <kait-radio name="radio2" label="Danger" val="danger" :color="radio2" v-model="radio2" ></kait-radio>
                        <kait-radio name="radio2" label="Success" val="success" :color="radio2" v-model="radio2" ></kait-radio>
                        <kait-radio name="radio2" label="Dark" val="dark" :color="radio2" v-model="radio2" ></kait-radio>
                    </kait-card-body>
                    <kait-card-footer>
                        You choosed: {{radio2}}
                    </kait-card-footer>
                </kait-card>
            </div>
            <div class="col-md-6 col-12">
                <kait-card>
                    <kait-card-header>Shape</kait-card-header>
                    <kait-card-body>
                        <kait-radio name="radio3" label="Circle" val="circle" v-model="radio3" shape="circle"></kait-radio>
                        <kait-radio name="radio3" label="Square" val="square" v-model="radio3" shape="square"></kait-radio>
                    </kait-card-body>
                    <kait-card-footer>
                        You choosed: {{radio3}}
                    </kait-card-footer>
                </kait-card>
            </div>
        </div>
       
    </div>
</template>
<script>
import _ from 'lodash';

export default {
    data() {
        return {
            radio1: '',
            radio2: '',
            radio3: '',
        }
    },
}
</script>