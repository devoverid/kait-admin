<template>
    <div class='main-content'>
        <div class="page-header">
            <div class="row">
                <div class="col-md-6">
                    <h3>Select</h3>
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
                        <kait-select :options="['PHP','Javascript','Golang','Python','Ruby']" placeholder="Choose language" v-model="select1"></kait-select>
                        <kait-select :options="['PHP','Javascript','Golang','Python','Ruby']" placeholder="Disabled" disabled class='mt-4'></kait-select>
                    </kait-card-body>
                    <kait-card-footer>
                        You choosed: {{select1}}
                    </kait-card-footer>
                </kait-card>
                <kait-card>
                    <kait-card-header>AJAX + With Image</kait-card-header>
                    <kait-card-body>
                        <kait-select label="name" :filterable="false" :options="select3" @search="onSearch" v-model="selectedAjax">
                            <template slot="no-options">
                                type to search GitHub repositories..
                            </template>
                            <template v-slot:option="option">
                                <div class="d-center flex items-center">
                                    <img :src='option.option.owner.avatar_url' class="h-5 mr-2"/> 
                                    {{ option.option.full_name }}
                                </div>
                            </template>
                            <template v-slot:selected-option="option">
                                <div class="selected d-center flex items-center">
                                    <img :src='option.option.owner.avatar_url' class="h-5 mr-2"/> 
                                    {{ option.option.full_name }}
                                </div>
                            </template>
                        </kait-select>
                    </kait-card-body>
                    <kait-card-footer>
                        You choosed: {{selectedAjax.full_name}}
                    </kait-card-footer>
                </kait-card>
            </div>
            <div class="col-md-6 col-12">
                <kait-card>
                    <kait-card-header>Multiple Select</kait-card-header>
                    <kait-card-body>
                        <kait-select :options="['PHP','Javascript','Golang','Python','Ruby']" placeholder="Choose language" v-model="select2" :multiple="true"></kait-select>
                    </kait-card-body>
                    <kait-card-footer>
                        You choosed: {{select2}}
                    </kait-card-footer>
                </kait-card>
                <kait-card>
                    <kait-card-header>Color</kait-card-header>
                    <kait-card-body>
                        <kait-select :options="colors" placeholder="Choose color" v-model="color"  :color="color"></kait-select>
                    </kait-card-body>
                    <kait-card-footer>
                        You choosed: {{color}}
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
            select1: '',
            select2: [],
            select3: [],
            colors: ['primary','dark','warning','danger','success'],
            color: 'primary',
            selectedAjax: ''
            }
    },
    methods: {
        onSearch(search, loading) {
            loading(true);
            this.search(loading, search, this);
        },
        search: _.debounce((loading, search, vm) => {
            fetch(`https://api.github.com/search/repositories?q=${escape(search)}`)
                .then(res => {
                    res.json().then(json => {
                        vm.select3 = json.items;
                        console.log(json.items)
                    });
                    loading(false);
                });
        }, 350)
    }
}
</script>