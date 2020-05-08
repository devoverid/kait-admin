<template>
    <div class='main-content'>
        <div class="page-header">
            <div class="row">
                <div class="col-md-6">
                    <h3>Progress</h3>
                </div>
                <div class="breadcrumb">

                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6 col-12">
                <kait-card>
                    <kait-card-header>Basic Progress</kait-card-header>
                    <kait-card-body>
                        <div class="progresses">
                            <kait-progress color="primary" percentage="50"/>
                            <kait-progress color="success" percentage="90"/>
                            <kait-progress color="warning" percentage="30"/>
                            <kait-progress color="danger" percentage="80"/>
                            <kait-progress color="dark" percentage="60"/>
                        </div>
                    </kait-card-body>
                </kait-card>
                <kait-card>
                    <kait-card-header>Striped</kait-card-header>
                    <kait-card-body>
                        <p>Simply add <code>striped</code> attribute</p>
                        <div class="progresses">
                            <kait-progress color="primary" percentage="50" striped/>
                            <kait-progress color="success" percentage="90" striped/>
                            <kait-progress color="warning" percentage="30" striped/>
                            <kait-progress color="danger" percentage="80" striped/>
                            <kait-progress color="dark" percentage="60" striped/>
                        </div>
                    </kait-card-body>
                </kait-card>
            </div>
            <div class="col-md-6 col-12">
                <kait-card>
                    <kait-card-header>With Label</kait-card-header>
                    <kait-card-body>
                        <p>Add <code>withLabel</code> attribute</p>
                        <div class="progresses">
                            <kait-progress color="primary" percentage="50" withLabel/>
                            <kait-progress color="success" percentage="90" withLabel/>
                            <kait-progress color="warning" percentage="30" withLabel/>
                            <kait-progress color="danger" percentage="80" withLabel/>
                            <kait-progress color="dark" percentage="60" withLabel/>
                        </div>
                    </kait-card-body>
                </kait-card>
                <kait-card>
                    <kait-card-header>Height</kait-card-header>
                    <kait-card-body>
                        <p>Add <code>h-{heightNumber}</code>class. Read the <a href="https://tailwindcss.com/docs/height">TailwindCSS Documentation</a> for more information</p>
                        <div class="progresses">
                            <kait-progress color="primary" percentage="50" class="h-2"/>
                            <kait-progress color="success" percentage="90" class="h-3"/>
                            <kait-progress color="warning" percentage="30" class="h-4"/>
                        </div>
                    </kait-card-body>
                </kait-card>
            </div>
        </div>
        
    </div>
</template>
<style lang="scss">
    .progresses .progress {
        @apply mt-5
    }
</style>