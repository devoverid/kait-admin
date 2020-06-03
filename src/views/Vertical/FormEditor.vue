<template>
    <div class='main-content'>
        <div class="page-header">
            <div class="row">
                <div class="col-md-6">
                    <h3>Advanced Form</h3>
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
                            <ckeditor :editor="editor" v-model="editorData" :config="editorConfig"></ckeditor>
                    </kait-card-body>
                </kait-card>
            </div>
        </div>
    </div>
</template>
<script>
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
export default {    
    data() {
        return {
            editor: ClassicEditor,
            editorData: '',
            editorConfig: {
                // The configuration of the editor.
            }
        }
    },
    methods: {
        toggleCard() {
            this.showCard = !this.showCard;
        },
        fadeOut() {
            this.dismissed=true;
        }
    }
}
</script>
<style lang="scss">
    
.slide-enter-active {
   -moz-transition-duration: 0.3s;
   -webkit-transition-duration: 0.3s;
   -o-transition-duration: 0.3s;
   transition-duration: 0.3s;
   -moz-transition-timing-function: ease-in;
   -webkit-transition-timing-function: ease-in;
   -o-transition-timing-function: ease-in;
   transition-timing-function: ease-in;
}

.slide-leave-active {
   -moz-transition-duration: 0.3s;
   -webkit-transition-duration: 0.3s;
   -o-transition-duration: 0.3s;
   transition-duration: 0.3s;
   -moz-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
   -webkit-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
   -o-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
   transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
}

.slide-enter-to, .slide-leave {
   max-height: 100px;
   overflow: hidden;
}

.slide-enter, .slide-leave-to {
   overflow: hidden;
   max-height: 0;
}
</style>