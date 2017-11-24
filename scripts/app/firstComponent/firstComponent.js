import {default as app,showP,changeP} from '../app'

console.log(app);

app.component("temp",{
template:`<div>test div</div>`,
controller:['$scope',($scope)=>{
console.log("temp",$scope);
}]
});

showP();changeP();showP();