<template>
  <div>
        <router-link to="/create">
              <section class="createNote">
                    Write a note...
              </section>
        </router-link>

        <!-- todo : get notes list  from ws--> 

        <section class="line" >
            <p> {{ notes.length }} note(s) </p>
        </section>
      
            <ul v-for= "note in notes" :key="note.id">
              <li> 
                <article class="card" :class="note.color">
                  
                  <section class="cardContent">
                    <h1 class="cardTitle"> {{ note.title }} </h1>
                    <p> {{ note.description }} </p>
                  </section>                                
                  <section class="cardFooter">
                    <span> {{ note.createdAt | dateFormat }}</span>
                    <div class="icon">                                           
                        <img src="../assets/images/edit.png" v-on:click="navigateToEditNote(note._id)">                      
                        <img src="../assets/images/delete.png" v-on:click= "removeNote(note)" >
                    </div>
                  </section>                
                </article>
              </li>
            </ul>
  </div>
</template>

<script>

import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import wsURL from '../const'
import moment from 'moment'
import VueFilterDateFormat from 'vue-filter-date-format'
 
Vue.use(VueFilterDateFormat)

Vue.use(VueAxios, axios)

export default {
  
  data() {
    
    return {
      title: 'notes',
      note: '',  
      notes: [ ]   
    };
  },


  mounted () {
    console.log(wsURL);
    axios
      .get(wsURL+'/notes')
      .then(response => (this.notes = response.data))
  },

  
  methods: {   
      removeNote (note) {
      console.log('delete url : ', wsURL+'/notes/'+ note._id)  
         axios
          .delete(wsURL + '/notes/' + note._id)
          .then((response) => {
              const noteIndex = this.notes.indexOf(note);
              this.notes.splice(noteIndex, 1);
          }
          );
      
      },

      navigateToEditNote (noteId) {
       this.$router.push({
       name: 'create',
       params: {id: noteId}
      });

      },

  },
};
</script>
  


<style>

.pinkCircle.selected, .purpleCircle.selected, .blueCircle.selected {
  border: 2px solid darkgrey;
}


.pink {
  background-color:   #ffd6ff
;
}

.purple {
  background-color:  #ebd6ff
;
}
.blue {
  background-color:#d6ebff;
}


ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    list-style-type:none;
}

* {
    box-sizing: border-box;
}

body {
    font-family: 'AlexBrush', cursive;
    margin: 0;
}

@font-face {
    font-family: 'AlexBrush';
}

:focus {
    outline: 0;
    outline-color: transparent;
    outline-style: none;
}

a:link {
    text-decoration: none;
    color: #000;
}

main {
    font-family: 'AlexBrush', cursive;
    position: absolute;
    top: 60px;
    bottom: 42px;
    width: 100%;
    padding: 30px;
}

header {
    position: fixed;
    z-index: 2;
    padding: 8px;
    text-align: left;
    line-height: 10px;
    background: #99d6eb;
    width: 100%;
    height: 60px;
    box-shadow: 0 5px 5px 0 rgba(79, 79, 79, 0.24);
}

header h1 {
    font-family: 'AlexBrush', cursive;
    position: absolute;
    font-size: 20px;
    font-style: normal;
    color: #123342;
    padding: 0;
}

.createNote {
    border: 1px solid #eee;
    font-size: 15px;
    color: #123342;
    height: 60px;
    padding: 15px 25px;
    -webkit-box-shadow: 6px 5px 5px -5px rgba(179, 172, 179, 1);
    -moz-box-shadow: 6px 5px 5px -5px rgba(179, 172, 179, 1);
    box-shadow: 6px 5px 5px -5px rgba(179, 172, 179, 1);
}

input {
    font-family: 'AlexBrush', cursive;
    font-size: 20px;
    border: 0;
    color: black;
    font-weight: bold;
}

.form{
    font-family: 'AlexBrush', cursive;
    margin-top: 30px;
    width: 100%;
    height: 100px;
    border: 0;
    color: black;
    font-size: 17px;
}

.container {
    position: relative;

}

.container .content {
    position: absolute;
}

.container .footer {
    font-family: 'AlexBrush', cursive;
    position: fixed;
    overflow: hidden;
    left: 0;
    width: 100%;
    height: 50px;
    padding: 5px;
    bottom: 0;
}

.container .footer .colors {
    float: left;
    width: 60%;
    height: 100%;
}

.pinkCircle {
    background-color: #ffd6ff;
    width: 30px;
    float: left;
    margin: 5px;
    height: 30px;
    border: 1px solid #ddd7d7;
    border-radius: 50%;
}



.purpleCircle {
    background-color:  #ebd6ff;
    width: 30px;
    float: left;
    margin: 5px;
    height: 30px;
    border: 1px solid #ddd7d7;
    border-radius: 50%;
}



.blueCircle {
    background-color: #d6ebff;
    width: 30px;
    float: left;
    margin: 5px;
    height: 30px;
    border: 1px solid #ddd7d7;
    border-radius: 50%;
}

.container .footer .actions {
    float: left;
    width: 40%;
    text-align: right;
    height: 100%;
    padding: 5px;
}

.actions img {
    margin: 0 5px;
}

.line {
    margin-top: 15px;
    border-bottom: 1px solid #bbb5b5;
}

.line p {
    text-align: right;
    font-size: 15px;
    margin: 0 0 5px;
    font-weight: bold;
    color: #555555;
}

.card {
    font-weight: 300;
    font-size: 15px;
    width: 100%;
    margin: 40px auto;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    border-radius: 4px;
    overflow: hidden;
}

.cardTitle {
    color: #333;
    font-size: 17px;
    margin: 0;
    font-weight: normal;
}

.cardContent {
    font-weight: 300;
    padding: 10px 15px;
}

.cardContent p {
    font-size: 15px;
    color: #999;
}

.cardFooter {
    font-weight: 300;
    border-top: 1px solid #cfcece;
    padding: 5px;
}

.cardFooter span {
    font-size: 13px;
    color: #525252;
    font-style: italic;
}

.icon{
    float: right;
}

.icon img{
    padding: 0 5px;
    width: 30px;
}


</style>

