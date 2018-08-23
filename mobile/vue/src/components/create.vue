<template>
<div>	
    <section class="content">
        <div>
            <input type="text" placeholder="Title" v-model="note.title">
        </div>
        <div>
            <textarea class="form" placeholder="Write a note... " v-model="note.description"> </textarea>
        </div>
    </section>
    <section class="footer">
        <div class="colors">
            <span class="pinkCircle" :class="{ selected : note.color == 'pink' }"  v-on:click= "changeColor('pink')"></span>
            <span class="purpleCircle" :class="{ selected : note.color == 'purple' }" v-on:click= "changeColor('purple')"></span>
            <span class="blueCircle" :class="{ selected : note.color == 'blue' }"   v-on:click= "changeColor('blue')"></span>
        </div>
        <div class="actions">

        <span @click="submit">
            <img src="../assets/images/confirm.png">
        </span>

        <router-link to="/">
            <img  src="../assets/images/cancel.png">
        </router-link>
        </div>
    </section>
</div>
</template>

<script>
    

import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import wsURL from '../const'


Vue.use(VueAxios, axios)

export default {
  

  data() {
    
    return {
        isUpdate : false,
        note:{
            color: '',
            title : null,
            description : null
        }

    }
  },

  
  // if isUpdate ==> call update WS else call create WS      
  created() {
        if(this.$route.params.id){
            // update
            this.isUpdate = true; 
            // CALL ws TO get note by id 
            axios
              .get(wsURL+ '/notes/' + this.$route.params.id)
              .then(response => (this.note = response.data))
        }
    },


methods:
{    
    submit: function() {

        if (this.isUpdate)
        {
           axios
          .put( wsURL+ '/notes/' + this.note._id, this.note)
          .then((response) => {

                this.redirectToHome();
          }
          );

        }        
        else
        {
            this.basrURL
            axios
            .post(wsURL+ '/notes/', this.note)
            .then(response => {
                this.redirectToHome();


          }
          );

        }

        
    },


    redirectToHome() {
        this.$router.push({
        name: 'home',
        });
    },

    changeColor (color){
        this.note.color= color;
    }

},

    
     
}



</script>