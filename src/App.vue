<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Open+Sans|Satisfy|Source+Code+Pro&display=swap');
html, body, #app {
    height: 100%;
}
* {
    font-family: 'Open Sans', sans-serif;
}
pre {
    font-family: 'Source Code Pro', monospace !important;
}
$green: #0b903d;

.bg-green {
    background-color: $green !important;
}
.btn.focus, .btn:focus {
    box-shadow: 0 0 0 0.2rem rgba($green, .25) !important;
}
.btn-link {
    background-color: $green !important;
    color: #fff !important;
}
.create-account-callout {
    border: 1px solid #d8dee2;
    border-radius: 5px;
    padding: 15px 20px;
    text-align: center;
}
.form-control:focus {
    border-color: $green !important;
    box-shadow: 0 0 0 0.2rem rgba($green, .25) !important;
}
.text-white {
    color: #fff;
    a {
        color: #fff;
        text-decoration: underline;
    }
}
.text-30 {
    font-size: 30px;
}
::-webkit-scrollbar {
    width: 12px;
}
::-webkit-scrollbar:horizontal {
    height: 12px;
}
::-webkit-scrollbar-track {
    box-shadow: none;
    background-color: rgba(#f5f5f5, .5);
    border-radius: 12px;
}
::-webkit-scrollbar-thumb {
    border-radius: 12px;
    background-color: rgba(#ccc, .5);
    &:hover {
        background-color: rgba(#ccc, .9);
    }
}
</style>
