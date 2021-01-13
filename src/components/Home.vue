<template>
<div class="home_wrapper">
     <v-container fluid>
        <v-layout row>
            <v-flex md12 xs12>
                <v-carousel
                    cycle
                    height="400"
                    hide-delimiters
                    show-arrows-on-hover

                >
                    <v-carousel-item
                        v-for="(slide, i) in ads"
                        :key="i"
                        :src="slide.imageSrc"
                        height="400px"
                    > 
                    <div class="car-link">
                        <v-btn class="error" :to="'/ad/' + slide.id">{{ slide.title }}</v-btn>
                    </div>
                    </v-carousel-item>
                </v-carousel>
            </v-flex>
        </v-layout>
    </v-container>
    <v-container grid-list-lg>
        <v-layout row wrap justify-center>
            <v-flex
            v-for="ad in ads" 
            :key="ad.id"
            xs12
            sm6
            md4
            >
                <v-card
                class="mx-auto"
                max-width="344"
            >
                <v-img
                    :src="ad.imageSrc"
                    height="400px"
                ></v-img>
            
                <v-card-title>
                    {{ad.title}}
                </v-card-title>
            
                <v-card-subtitle>
                    1,000 miles of wonder
                </v-card-subtitle>
                <v-card-text>  
                        {{ad.description}}
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                    color="orange lighten-2"
                    text
                    :to="'/ad/'+ad.id"
                    >
                    Open
                    </v-btn>
                    <v-btn
                    raised
                    class="primary"
                    >
                     Buy!
                    </v-btn>
                </v-card-actions>
            

                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</div>
   
</template>
<script>
export default {
    data(){
        return{
            model: 0,
            ads:[
                {
                    title:'First ad',
                    description:'Hello I am description',
                    promo: false,
                    imageSrc:'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
                    id: '1'
                },
                {
                    title:'Second ad',
                    description:'Hello I am description',
                    promo: false,
                    imageSrc:'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
                    id: '2'
                },
                {
                    title:'Third ad',
                    description:'Hello I am description',
                    promo: true,
                    imageSrc:'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
                    id: '3'
                }

            ]
        }
    }
}
</script>
<style scoped>
 .home_wrapper {
     width: 100%;
 }
 .v-carousel__controls {
    bottom: 12px;
 }
 .car-link {
    position: absolute;
    bottom: 50px;
    left: 50%;
    background: rgba(0, 0, 0, .5);
    transform: translate(-50%, 0);
    padding: 10px 20px;
    border-radius: 10px;
 }
</style>