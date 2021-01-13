<template>
    <v-container class="fill-height" fluid>
            <v-row align="center" justify="center">
            <v-col cols="12" sm="8" md="6" lg="4">
                <v-card class="elevation-16">
                    <v-toolbar color="primary" dark flat>
                        <v-toolbar-title>Registration form</v-toolbar-title>
                    </v-toolbar>
                    <v-card-text>
                        <v-form
                        ref="form"
                        v-model="valid"
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
                            :rules="passwordRules"
                            required
                            clearable
                            ></v-text-field>
                            <v-text-field 
                            id="confirmPassword" 
                            label="ConfirmPassword" 
                            name="confirm-password" 
                            prepend-icon="mdi-lock"
                            type="password"
                            v-model="confirmPassword"
                            :rules="confirmPasswordRules"
                            required
                            clearable
                            ></v-text-field>
                        </v-form>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        
                        <v-btn 
                        color="primary"
                        @click="onSubmit()"
                        :disabled="!valid"
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
                passwordRules:[
                    v=>!!v || "Password is required",
                    v=>(v && v.length >= 6) || "Password must be longer than 6 characters"

                ],
                lazy: false,
                confirmPassword:'',
                confirmPasswordRules:[
                    v=>!!v || "Password is required",
                    v=> v==this.password || "This field must match password field"
                ],
            }
        },
        methods: {
            onSubmit () {
                if(this.$refs.form.validate()) {
                    let user={
                        email: this.email,
                        password: this.password
                    }
                    console.log(user)
                    this.reset()
                }
            },
            reset(){
                this.$refs.form.reset()
            }

        }
    }
</script>
<style>

</style>