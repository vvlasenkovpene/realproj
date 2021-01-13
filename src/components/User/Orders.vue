<template>
    <v-container>
        <v-layout row justify-center>
            <v-flex xs-12 sm6>
                <v-list
                    flat
                    subheader
                    three-line
                >
                    <v-subheader class="text-h5 mb-3">Orders</v-subheader>
            
                    <v-list-item-group
                    v-model="settings"
                    multiple
                    active-class=""
                    >
                        <v-list-item
                        v-for="order in orders"
                        :key="order.id"
                        >
                            <template v-slot:default="{ active }">
                            <v-list-item-action>
                                <v-checkbox 
                                :input-value="active"
                                @change="markDone(order)"
                                ></v-checkbox>
                            </v-list-item-action>
                
                            <v-list-item-content>
                                <v-list-item-title>{{order.name}}</v-list-item-title>
                                <v-list-item-subtitle>{{order.phone}}</v-list-item-subtitle>
                            </v-list-item-content>
                            <v-list-item-action>
                                <v-btn 
                                class="primary"
                                :to="'/ad/' + order.adId"
                                
                                >Open</v-btn>
                            </v-list-item-action>
                            </template>
                        </v-list-item>
                    </v-list-item-group>
                </v-list>
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
export default {
    data(){
        return{
            settings: [],
            orders:[
                {
                    id: 'fds',
                    name: 'Vladilen',
                    phone: '8-34-43-234-24',
                    adId: '123',
                    done: false
                }
            ]
        }
    },
    methods:{
        markDone(order){
            order.done = true
        }
    },
    watch:{
        settings(){
            console.log(this.settings)
        }
    }
}
</script>