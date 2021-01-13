<template>
  <v-app>
    <v-navigation-drawer app temporary v-model="drawer">
      <v-list dense>
        <v-list-item-group color="primary" v-model="selectedItem">
          <v-list-item v-for="item in links" :key="item.title" :to="item.url">
            <v-list-item-icon>
              <v-icon color="pink">
                mdi-{{item.icon}}
              </v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>
                {{item.title}}
              </v-list-item-title>
            </v-list-item-content>

          </v-list-item>
        </v-list-item-group>

      </v-list>

    </v-navigation-drawer>
    <v-card color="grey lighten-4" flat tile>
      <v-app-bar dark color="primary">

        <v-app-bar-nav-icon @click="drawer=!drawer" class="hidden-md-and-up">

        </v-app-bar-nav-icon>

        <v-toolbar-title>Ad application</v-toolbar-title>

        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
          <v-btn text v-for="item in links" :key="item.url" :to="item.url">
            <v-icon left>
              mdi-{{item.icon}}
            </v-icon>
            {{item.title}}
          </v-btn>
        </v-toolbar-items>
      </v-app-bar>
    </v-card>


    <!-- Sizes your content based upon application components -->
    <v-main>
      <v-container class="fill-height" fluid>
        <!-- If using vue-router -->
        <router-view></router-view>
      </v-container>
      <!-- Provides the application the proper gutter -->

    </v-main>
    <v-footer app>
      <!-- -->
    </v-footer>


  </v-app>
</template>

<script>
  export default {
    name: 'App',

    components: {

    },
    data() {
      return {
        drawer: false,
          links: [
            {icon: 'account-lock',title: 'Login',url: '/login'},
            {icon: 'face',title: 'Registration',url: '/registration'},
            {icon: 'bookmark',title: 'Orders',url: '/orders'},
            {icon: 'file-plus-outline',title: 'New ad',url: '/new'},
            {icon: 'format-list-bulleted',title: 'My adds',url: '/list'},


          ],
          selectedItem: 1
        }
    }
  };
</script>
<style>
  .v-card {
    height: auto;
  }

  .v-list-item {
    cursor: pointer;
  }
</style>
