// code your solution
function saturdayFun (activity = "roller-skate"){
    return ( `This Saturday, I want to ${activity}!`);
}
 const mondayWork = function (activity = "go to the office") {
    return (`This Monday, I will ${activity}.` );
 }
function wrapAdjective (sasa = '*'){
    const inner = function (adjective= "special") {
        return `You are ${sasa}${adjective}${sasa}!`
    }
    return inner 
}