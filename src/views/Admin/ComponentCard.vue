<template>
    <div class='main-content'>
        <div class="page-header">
            <div class="row">
                <div class="col-md-6">
                    <h3>Card</h3>
                </div>
                <div class="breadcrumb">

                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6 col-12">
                <div class="card">
                    <div class="card-header">Card Title</div>
                    <div class="card-body">
                        This is some text within a card body. 
                    </div>
                    <div class="card-footer">
                        Card Footer
                    </div>
                </div>
                <div class="card">
                    <div class="card-header">Action Buttons</div>
                    <div class="card-body">
                        This is some text within a card body. 
                    </div>
                    <div class="card-footer text-right">
                        <button class="btn btn-primary">Submit</button>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-12">
                <div class="card">
                    <div class="card-header">Links</div>
                    <div class="card-body">
                        This is some text within a card body. 
                    </div>
                    <div class="card-footer">
                        <a href="#" class="card-link">Open Link</a>
                        <a href="#" class="card-link">Another Link</a>
                    </div>
                </div>
                <div class="card">
                    <div class="card-header">Another Footer</div>
                    <div class="card-body">
                        This is footer with <code>.bg-whitesmoke</code>. 
                    </div>
                    <div class="card-footer bg-whitesmoke">
                        <a href="#" class="card-link">Open Link</a>
                        <a href="#" class="card-link">Another Link</a>
                    </div>
                </div>
            </div>
        </div>
        <h2 class="section-title">Card Image Variants</h2>
        <p class="section-description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum</p>
        <div class="row">
            <div class="col-md-3 col-12">
                <div class="card">
                    <img class="w-full" src="@/assets/images/card-top.jpg" alt="Sunset in the mountains">
                    <div class="card-body">
                        <div class="card-title">The Coldest Sunset</div>
                        <p class="card-description mb-0">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                        </p>
                    </div>
                    <div class="card-footer">
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#photography</span>
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#travel</span>
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#winter</span>
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