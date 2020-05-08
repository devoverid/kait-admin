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
                <kait-card>
                    <kait-card-header>Default</kait-card-header>
                    <kait-card-body>
                        <p class='mb-4'>Use <code>color="colorname"</code> attributes to choose button color.</p>
                            <div class="buttons">
                                <kait-button type="button" color="primary">Primary</kait-button>
                                <kait-button type="button" color="secondary">Secondary</kait-button>
                                <kait-button type="button" color="success">Success</kait-button>
                                <kait-button type="button" color="danger">Danger</kait-button>
                                <kait-button type="button" color="warning">Warning</kait-button>
                                <kait-button type="button" color="info">Info</kait-button>
                                <kait-button type="button" color="light">Light</kait-button>
                                <kait-button type="button" color="dark">Dark</kait-button>
                                <kait-button type="button" color="link">Link</kait-button>
                            </div>
                    </kait-card-body>
                </kait-card>
                <kait-card>
                    <kait-card-header>Icon</kait-card-header>
                    <kait-card-body>
                        <p class='mb-4'>Use <code>icon="your-icon-class"</code> attributes to use icon.</p>
                            <div class="buttons">
                                <kait-button type="button" icon="fas fa-check-circle" color="btn btn-primary">Primary</kait-button>
                                <kait-button type="button" icon="fas fa-check-circle" color="btn btn-secondary">Secondary</kait-button>
                                <kait-button type="button" icon="fas fa-check-circle" color="btn btn-success">Success</kait-button>
                                <kait-button type="button" icon="fas fa-check-circle" color="btn btn-danger">Danger</kait-button>
                                <kait-button type="button" icon="fas fa-check-circle" color="btn btn-warning">Warning</kait-button>
                                <kait-button type="button" icon="fas fa-check-circle" color="btn btn-info">Info</kait-button>
                                <kait-button type="button" icon="fas fa-check-circle" color="btn btn-light">Light</kait-button>
                                <kait-button type="button" icon="fas fa-check-circle" color="btn btn-dark">Dark</kait-button>

                                <kait-button type="button" icon="fas fa-check-circle" color="btn btn-link">Link</kait-button>
                            </div>
                    </kait-card-body>
                </kait-card>
            </div>
            <div class="col-md-6 col-12">
                <kait-card>
                    <kait-card-header>Outline Buttons</kait-card-header>
                    <kait-card-body>
                        <p class='mb-4'>Use <code>variant="outline"</code> attributes to use outline style.</p>
                            <div class="buttons">
                                <kait-button type="button" variant="outline" color="primary">Primary</kait-button>
                                <kait-button type="button" variant="outline" color="secondary">Secondary</kait-button>
                                <kait-button type="button" variant="outline" color="success">Success</kait-button>
                                <kait-button type="button" variant="outline" color="danger">Danger</kait-button>
                                <kait-button type="button" variant="outline" color="warning">Warning</kait-button>
                                <kait-button type="button" variant="outline" color="info">Info</kait-button>
                                <kait-button type="button" variant="outline" color="light">Light</kait-button>
                                <kait-button type="button" variant="outline" color="dark">Dark</kait-button>
                                <kait-button type="button" variant="outline" color="link">Link</kait-button>
                            </div>
                    </kait-card-body>
                </kait-card>
                <kait-card>
                    <kait-card-header>Button Size</kait-card-header>
                    <kait-card-body>
                        <p class='mb-4'>Use <code>size="sm"</code> or <code>size="lg"</code> attributes to change button size.</p>
                            <div class="buttons">
                                <kait-button type="button" size="sm" color="danger">Small</kait-button>
                                <kait-button type="button" color="primary">Normal</kait-button>
                                <kait-button type="button" size="lg" color="dark">Large</kait-button>
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