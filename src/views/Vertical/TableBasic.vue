<template>
    <div class='main-content'>
        <div class="page-header">
            <div class="row">
                <div class="col-md-6">
                    <h3>Table</h3>
                </div>
                <div class="breadcrumb">

                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6 col-12">
                <kait-card>
                    <kait-card-header>Table Striped</kait-card-header>
                    <kait-card-body>
                        <p class='mb-4'>Use <code>type="striped"</code> attribute to use striped style.</p>
                        <div class="table-responsive">
                            <kait-table type='striped'>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Name</th>
                                        <th>Role</th>
                                        <th>Province</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Ahmad Saugi</td>
                                        <td>Superadmin</td>
                                        <td>DKI Jakarta</td>
                                        <td><kait-badge type='success' size='small'>Active</kait-badge></td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Muhammad Fauzan</td>
                                        <td>Member</td>
                                        <td>Jawa Barat</td>
                                        <td><kait-badge type='success' size='small'>Active</kait-badge></td>
                                    </tr>
                                </tbody>
                            </kait-table>
                        </div>
                    </kait-card-body>
                </kait-card>
            </div>
            <div class="col-md-6 col-12">
                <kait-card>
                    <kait-card-header>Table Hover</kait-card-header>
                    <kait-card-body>
                        <p class='mb-4'>Use <code>type="hover"</code> attribute to use hover style.</p>
                        <div class="table-responsive">
                            <kait-table type='hover'>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Name</th>
                                        <th>Role</th>
                                        <th>Province</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Ahmad Saugi</td>
                                        <td>Superadmin</td>
                                        <td>DKI Jakarta</td>
                                        <td><kait-badge type='success' size='small'>Active</kait-badge></td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Muhammad Fauzan</td>
                                        <td>Member</td>
                                        <td>Jawa Barat</td>
                                        <td><kait-badge type='success' size='small'>Active</kait-badge></td>
                                    </tr>
                                </tbody>
                            </kait-table>
                        </div>
                    </kait-card-body>
                </kait-card>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6 col-12">
                <kait-card>
                    <kait-card-header>Table Bordered</kait-card-header>
                    <kait-card-body>
                        <p class='mb-4'>Use <code>type="bordered"</code> attribute to use bordered style.</p>
                        <div class="table-responsive">
                            <kait-table type='bordered'>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Name</th>
                                        <th>Role</th>
                                        <th>Province</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Ahmad Saugi</td>
                                        <td>Superadmin</td>
                                        <td>DKI Jakarta</td>
                                        <td><kait-badge type='success' size='small'>Active</kait-badge></td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Muhammad Fauzan</td>
                                        <td>Member</td>
                                        <td>Jawa Barat</td>
                                        <td><kait-badge type='success' size='small'>Active</kait-badge></td>
                                    </tr>
                                </tbody>
                            </kait-table>
                        </div>
                    </kait-card-body>
                </kait-card>
            </div>
            <div class="col-md-6 col-12">
                <kait-card>
                    <kait-card-header>No Border</kait-card-header>
                    <kait-card-body>
                        <p class='mb-4'>Use <code>type="no-border"</code> attribute to remove border.</p>
                        <div class="table-responsive">
                            <kait-table type='no-border'>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Name</th>
                                        <th>Role</th>
                                        <th>Province</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Ahmad Saugi</td>
                                        <td>Superadmin</td>
                                        <td>DKI Jakarta</td>
                                        <td><kait-badge type='success' size='small'>Active</kait-badge></td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Muhammad Fauzan</td>
                                        <td>Member</td>
                                        <td>Jawa Barat</td>
                                        <td><kait-badge type='success' size='small'>Active</kait-badge></td>
                                    </tr>
                                </tbody>
                            </kait-table>
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
    
}
</script>