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
                <kait-card>
                    <kait-card-header>Default Alert</kait-card-header>
                    <kait-card-body>
                        <p class='mb-4'>Use <code>color="colorname"</code> attributes to choose alert variant.</p>
                        <kait-alert color="primary">This is a primary alert.</kait-alert>
                        <kait-alert color='secondary'>This is a secondary alert.</kait-alert>
                        <kait-alert color='success'>This is a success alert.</kait-alert>
                        <kait-alert color='danger'>This is a danger alert.</kait-alert>
                        <kait-alert color='warning'>This is a warning alert.</kait-alert>
                        <kait-alert color='info'>This is a info alert.</kait-alert>
                        <kait-alert color='light'>This is a light alert.</kait-alert>
                        <kait-alert color='dark'>This is a dark alert.</kait-alert>
                    </kait-card-body>
                </kait-card>
                <kait-card>
                    <kait-card-header>Dismissable</kait-card-header>
                    <kait-card-body>
                        <p class='mb-4'>Use <code>dismissable="true"</code> attributes to activate dismissable button.</p>
                        <kait-alert color='primary' :dismissable='true'>This is a primary alert.</kait-alert>
                        <kait-alert color='secondary' :dismissable='true'>This is a secondary alert.</kait-alert>
                        <kait-alert color='success' :dismissable='true'>This is a success alert.</kait-alert>
                        <kait-alert color='danger' :dismissable='true'>This is a danger alert.</kait-alert>
                        <kait-alert color='warning' :dismissable='true'>This is a warning alert.</kait-alert>
                        <kait-alert color='info' :dismissable='true'>This is a info alert.</kait-alert>
                        <kait-alert color='light' :dismissable='true'>This is a light alert.</kait-alert>
                        <kait-alert color='dark' :dismissable='true'>This is a dark alert.</kait-alert>
                    </kait-card-body>
                </kait-card>
            </div>
            <div class="col-md-6 col-12">
                <kait-card>
                    <kait-card-header>Title</kait-card-header>
                    <kait-card-body>
                        <p class='mb-4'>Use <code>title="your title"</code> attributes to add title.</p>
                        <kait-alert color="primary" title="Primary">This is a primary alert.</kait-alert>
                        <kait-alert color="secondary" title="Secondary">This is a secondary alert.</kait-alert>
                        <kait-alert color="success" title="Success">This is a success alert.</kait-alert>
                        <kait-alert color="danger" title="Danger">This is a danger alert.</kait-alert>
                        <kait-alert color="warning" title="Warning">This is a warning alert.</kait-alert>
                        <kait-alert color="info" title="Info">This is a info alert.</kait-alert>
                        <kait-alert color="light" title="Light">This is a light alert.</kait-alert>
                        <kait-alert color="dark" title="Dark">This is a dark alert.</kait-alert>
                    </kait-card-body>
                </kait-card>
                <kait-card>
                    <kait-card-header>With Icon</kait-card-header>
                    <kait-card-body>
                        <p class='mb-4'>Use <code>icon="your-icon-class"</code> attributes to add icon.</p>
                        <kait-alert color='primary' icon="fas fa-check-circle">This is a primary alert.</kait-alert>
                        <kait-alert color='secondary' icon="fas fa-check-circle">This is a secondary alert.</kait-alert>
                        <kait-alert color='success' icon="fas fa-check-circle">This is a success alert.</kait-alert>
                        <kait-alert color='danger' icon="fas fa-check-circle">This is a danger alert.</kait-alert>
                        <kait-alert color='warning' icon="fas fa-check-circle">This is a warning alert.</kait-alert>
                        <kait-alert color='info' icon="fas fa-check-circle">This is a info alert.</kait-alert>
                        <kait-alert color='light' icon="fas fa-check-circle">This is a light alert.</kait-alert>
                        <kait-alert color='dark' icon="fas fa-check-circle">This is a dark alert.</kait-alert>
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
</style>