<template>
    <v-container class="fill-height" fluid>
            <v-row align="center" justify="center">
            <v-col cols="12" sm="8" md="6">
                <v-card class="elevation-16">
                    <v-toolbar color="primary" dark flat>
                        <v-toolbar-title>Login form</v-toolbar-title>
                    </v-toolbar>
                    <v-card-text>
                        <v-form
                        ref="form"
                        v-model="valid"
                        :lazy-validation="lazy"
                        >
                            <v-text-field 
                            label="Email" 
                            name="email" 
                            prepend-icon="mdi-email" 
                            type="email"
                            v-model="email"
                            :rules="emailRules"
                            required
                            clearable
                            >
                            </v-text-field>

                            <v-text-field 
                            id="password" 
                            label="Password" 
                            name="password" 
                            prepend-icon="mdi-lock"
                            type="password"
                            v-model="password"
                            required
                            :counter="10"
                            clearable
                            ></v-text-field>
                        </v-form>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn 
                        color="primary"
                        @click="onSubmit"
                        >Login</v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
        
    </v-container>
</template>
<script>
    export default {
        data() {
            return {
                valid: true,
                email:'',
                emailRules: [
                    v => !!v || 'E-mail is required',
                    v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
                    ],
                password:'',
                lazy: false
            }
        },
        methods: {
            onSubmit () {
                this.$refs.form.validate()
            },
        }
    }
</script>
<style>

</style>