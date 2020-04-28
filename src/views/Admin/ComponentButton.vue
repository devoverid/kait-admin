<template>
    <div class='main-content'>
        <div class="page-header">
            <div class="row">
                <div class="col-md-6">
                    <h3>Buttons</h3>
                </div>
                <div class="breadcrumb">

                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6 col-12">
                <div class="card">
                    <div class="card-header">Default</div>
                    <div class="card-body">
                            <div class="buttons">
                                <button type="button" class="btn btn-primary">Primary</button>
                                <button type="button" class="btn btn-secondary">Secondary</button>
                                <button type="button" class="btn btn-success">Success</button>
                                <button type="button" class="btn btn-danger">Danger</button>
                                <button type="button" class="btn btn-warning">Warning</button>
                                <button type="button" class="btn btn-info">Info</button>
                                <button type="button" class="btn btn-light">Light</button>
                                <button type="button" class="btn btn-dark">Dark</button>

                                <button type="button" class="btn btn-link">Link</button>
                            </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-header">Default</div>
                    <div class="card-body">
                            <div class="buttons">
                                <button type="button" class="btn btn-primary"><i class="fas fa-check-circle"></i> Primary</button>
                                <button type="button" class="btn btn-secondary"><i class="fas fa-check-circle"></i> Secondary</button>
                                <button type="button" class="btn btn-success"><i class="fas fa-check-circle"></i> Success</button>
                                <button type="button" class="btn btn-danger"><i class="fas fa-check-circle"></i> Danger</button>
                                <button type="button" class="btn btn-warning"><i class="fas fa-check-circle"></i> Warning</button>
                                <button type="button" class="btn btn-info"><i class="fas fa-check-circle"></i> Info</button>
                                <button type="button" class="btn btn-light"><i class="fas fa-check-circle"></i> Light</button>
                                <button type="button" class="btn btn-dark"><i class="fas fa-check-circle"></i> Dark</button>

                                <button type="button" class="btn btn-link"><i class="fas fa-check-circle"></i> Link</button>
                            </div>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-12">
                <div class="card">
                    <div class="card-header">Outline Buttons</div>
                    <div class="card-body">
                            <div class="buttons">
                                <button type="button" class="btn btn-outline-primary"><i class="fas fa-check-circle"></i> Primary</button>
                                <button type="button" class="btn btn-outline-secondary"><i class="fas fa-check-circle"></i> Secondary</button>
                                <button type="button" class="btn btn-outline-success"><i class="fas fa-check-circle"></i> Success</button>
                                <button type="button" class="btn btn-outline-danger"><i class="fas fa-check-circle"></i> Danger</button>
                                <button type="button" class="btn btn-outline-warning"><i class="fas fa-check-circle"></i> Warning</button>
                                <button type="button" class="btn btn-outline-info"><i class="fas fa-check-circle"></i> Info</button>
                                <button type="button" class="btn btn-outline-light"><i class="fas fa-check-circle"></i> Light</button>
                                <button type="button" class="btn btn-outline-dark"><i class="fas fa-check-circle"></i> Dark</button>
                            </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-header">Button Size</div>
                    <div class="card-body">
                            <div class="buttons">
                                <button type="button" class="btn btn-danger btn-sm ">Small</button>
                                <button type="button" class="btn btn-primary ">Normal</button>
                                <button type="button" class="btn btn-dark btn-lg">Large</button>
                            </div>
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