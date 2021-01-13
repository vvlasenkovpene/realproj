<template>
    <v-container >
        <v-layout row justify-center>
            <v-flex xs12 sm6>
                <h1 class="text--secondary mb-3">Create new ad</h1>
                <v-form
                        ref="form"
                        v-model="valid"
                        >
                            <v-text-field 
                            label="Add title" 
                            name="title" 
                            type="text"
                            v-model="title"
                            :rules="[v=> !!v || 'Title is required']"
                            required
                            clearable
                            >
                            </v-text-field>

                            <v-textarea  
                            label="Ad description" 
                            name="description" 
                            prepend-icon="mdi-note"
                            type="text"
                            v-model="description"
                            :rules="[v=> !!v || 'Description is required']"
                            required
                            clearable
                            multi-line
                            ></v-textarea>
                        </v-form>
                        <v-layout row mt-4>
                                <v-flex xs12 col>
                                    
                                    <v-btn
                                        :loading="loading3"
                                        :disabled="loading3"
                                        color="blue-grey"
                                        class="ma-2 white--text"
                                        @click="loader = 'loading3'"
                                        >
                                        Upload
                                        <v-icon
                                            right
                                            dark
                                        >
                                            mdi-cloud-upload
                                        </v-icon>
                                        </v-btn>
                                </v-flex>
                        </v-layout>
                        <v-layout row mt-4>
                                <v-flex xs12 col>    
                                    <img src="https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg" height ="100" alt="">
                                </v-flex>
                        </v-layout>
                        <v-layout row mt-4>
                                <v-flex xs12 col>    
                                    <v-switch
                                        v-model="switch1"
                                        :label="`Switch 1: ${switch1.toString()}`"
                                    ></v-switch>
                                </v-flex>
                        </v-layout>
                        <v-layout row mt-4>
                                <v-flex xs12 col>    
                                    <v-btn 
                                    class="success" 
                                    @click="createAd"
                                    :disabled="!valid"
                                    
                                    >Create ad</v-btn>
                                </v-flex>
                        </v-layout>

            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
export default {
    data(){
        return{
            valid: false,
            description:'',
            title: '',
            loader: null,
            loading3: false,
            switch1: ''
        }
    },
    methods: {
        createAd(){
            console.log('asfasfff')
        }
    }
}
</script>
<style scoped>
.file_button {
    width: 100%;
    box-sizing: border-box;
}
</style>