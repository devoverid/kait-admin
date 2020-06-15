<template>
    <div class='main-content'>
        <div class="page-header">
            <div class="row">
                <div class="col-md-6">
                    <h3>Chat App</h3>
                </div>
                <div class="breadcrumb">

                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <kait-card>
                    <kait-card-header class="border-b">
                        <div class="flex direction-row">
                            <kait-avatar size="small" :src="require('@/assets/images/avatar/avatar-s-2.png')"></kait-avatar>
                            <div class="detail flex flex-col ml-1">
                                <p class='text-sm font-semibold'>Suharti</p>
                                <p class='text-xs font-light '>Administrator</p>
                            </div>
                        </div>
                    </kait-card-header>
                    <kait-card-body class='bg-gray-100'>
                        <div class="messages">
                            <div :class="{'per-message flex mt-2':true, 'flex-row': message.name=='Suharti', 'flex-row-reverse':message.name=='Mr. Ganteng'}" v-for="(message,index) in messages" :key="index">
                                <kait-avatar :src="require('@/assets/images/avatar/'+message.avatar)" size="small" verticalPosition="top"></kait-avatar>
                                <div :class="{'message-wrapper':true, 'ml-3': message.name=='Suharti', 'mr-3':message.name=='Mr. Ganteng'}">
                                    <p :class="{'text-gray-600 font-bold text-xs mb-2':true, 'text-left': message.name=='Suharti', 'text-right':message.name=='Mr. Ganteng' }">{{message.name}}</p>
                                    <div :class="{'p-3 rounded-md text-xs': true, 'the-message-blue text-white ': message.name == 'Suharti', 'the-message-gray text-gray-700':message.name=='Mr. Ganteng'}">{{message.message}}</div>
                                </div>
                                <div class="time flex items-end text-gray-600 text-xs mx-2">7 hours ago</div>
                            </div>
                        </div>
                    </kait-card-body>
                    <kait-card-footer class='bg-gray-100 '>
                        <div class="flex flex-row">
                            <kait-input v-model="input" type="text" placeholder="Type a message.." class='flex-grow'></kait-input>
                            <div class="submit-button flex items-center ml-5">
                                <kait-button color="primary" @click="sendMessage()">Send</kait-button>
                            </div>
                        </div>
                    </kait-card-footer>
                </kait-card>
            </div>
        </div>
    </div>
</template>
<script>

export default {
    data() {
        return {
            input: '',
            messages: [
                {
                    name: 'Suharti',
                    message: 'Good evening, Mr. Ganteng!',
                    time: "3 hour ago",
                    avatar: 'avatar-s-2.png',
                },
                {
                    name: 'Mr. Ganteng',
                    message: 'Good evening, i wanna ask you, can you hack my ex Facebook account?',
                    time: "2 hour ago",
                    avatar: 'avatar-s-3.png',
                },
                {
                    name: 'Suharti',
                    message: 'Okay, give me her email..',
                    time: "1 hour ago",
                    avatar: 'avatar-s-2.png',
                }
            ]
        }
    },
    methods: {
        sendMessage() {
            this.messages.push({
                name: 'Mr. Ganteng',
                message: this.input,
                time: 'a second ago',
                avatar: 'avatar-s-3.png'
            });
            this.input = ''
        }
    }
}
</script>
<style lang="scss">
    .the-message-blue {
        background-color: #3562fd;
        max-width: 300px;
    }
    .the-message-gray {
        background-color: #dde;
        max-width: 300px;
    }
</style>