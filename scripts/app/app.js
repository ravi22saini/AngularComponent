//import angular from 'angular'

//import 'jquery';
//import 'bootstrap-loader';

const app = angular.module("app",[]);
export default app;

export let showP=()=>{
    console.log('first');
} 

export function changeP(){
    {
        showP=()=>{
            console.log('Changed');
        }
    }
} 