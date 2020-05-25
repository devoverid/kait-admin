<template>
    <div class='main-content'>
        <div class="page-header">
            <div class="row">
                <div class="col-md-6">
                    <h3>Vue Select</h3>
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
                        <v-select :options="['United States','Indonesia','China','Japan']" v-model="basic"></v-select>
                        <p class='my-3'>You choosed: {{basic}}</p>
                    </kait-card-body>
                </kait-card> 
            </div>
            <div class="col-md-6 col-12">
                <kait-card>
                    <kait-card-header>With AJAX</kait-card-header>
                    <kait-card-body>
                        <v-select label="name" :filterable="false" :options="options" @search="onSearch">
                            <template slot="no-options">
                            type to search GitHub repositories..
                            </template>
                            <template slot="option" slot-scope="option">
                            <div class="d-center">
                                <img :src='option.owner.avatar_url'/> 
                                {{ option.full_name }}
                                </div>
                            </template>
                            <template slot="selected-option" slot-scope="option">
                            <div class="selected d-center">
                                <img :src='option.owner.avatar_url'/> 
                                {{ option.full_name }}
                            </div>
                            </template>
                        </v-select>
                    </kait-card-body>
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
            basic: '',
            options: []
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
                    res.json().then(json => (vm.options = json.items));
                    loading(false);
                });
        }, 350)
    }
}
</script>
<style>
img {
  height: auto;
  max-width: 2.5rem;
  margin-right: 1rem;
}

.d-center {
  display: flex;
  align-items: center;
}

.selected img {
  width: auto;
  max-height: 23px;
  margin-right: 0.5rem;
}

.v-select .dropdown li {
  border-bottom: 1px solid rgba(112, 128, 144, 0.1);
}

.v-select .dropdown li:last-child {
  border-bottom: none;
}

.v-select .dropdown li a {
  padding: 10px 20px;
  width: 100%;
  font-size: 1.25em;
  color: #3c3c3c;
}

.v-select .dropdown-menu .active > a {
  color: #fff;
}

</style>