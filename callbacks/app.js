// function f1(){
//     console.log("This is f1");
// }

// function f2(){
//     console.log("This is f2");
// }

// function f3(cbk){
//     cbk();
// }

// f3(f2);

function parent(){
    var fruit = "banana";
    
    function child(cbk){
        let stomach = '';
        cbk()
        console.log(stomach)
    }

    child(function(){
        stomach = 'full';
        fruit = 'Orange';
        console.log('Child eats ' + fruit)
    });
}

parent();
