<template>
  <div>
    <header>
        <h1>Proxym Notes</h1>
    </header>
    <main class="container">
        <router-view></router-view>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },

  methods: {    
  },
};
</script>


<style>

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
    background: rgb(64, 179, 235);
    width: 100%;
    height: 60px;
    box-shadow: 0 5px 5px 0 rgba(79, 79, 79, 0.24);
}

header h1 {
    font-family: 'AlexBrush', cursive;
    position: absolute;
    font-size: 20px;
    font-style: normal;
    padding: 0;
}

.createNote {
    border: 1px solid #eee;
    font-size: 15px;
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

.circle {
    background: #fff;
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