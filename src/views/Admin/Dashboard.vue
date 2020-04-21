<template>
    <div class='main-content'>
        <div class="row">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header">Table Striped</div>
                    <div class="card-body">
                        <p class="card-description">This is a description text. You can create, update, and delete users.</p>
                        <div class="table-responsive">
                            <table class="table table-striped">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Name</th>
                                        <th>Role</th>
                                        <th>Province</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Ahmad Saugi</td>
                                        <td>Superadmin</td>
                                        <td>DKI Jakarta</td>
                                        <td><span class="badge badge-success">Active</span></td>
                                        <td>
                                            <button class="btn btn-warning"><i class='fas fa-edit'></i></button>
                                            <button class="btn btn-danger"><i class="fas fa-trash"></i></button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Muhammad Fauzan</td>
                                        <td>Member</td>
                                        <td>Jawa Barat</td>
                                        <td><span class="badge badge-success">Active</span></td>
                                        <td>
                                            <button class="btn btn-warning"><i class='fas fa-edit'></i></button>
                                            <button class="btn btn-danger"><i class="fas fa-trash"></i></button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>