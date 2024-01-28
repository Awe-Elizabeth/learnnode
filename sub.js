// function thingsWeDo(){
//     console.log("Just to stay happy");
// }

// function newYear(){
//     console.log("Happy New Year");
// }

// module.exports = {thingsWeDo, newYear};

const userLogs = {
    login: function(){
        console.log('user is logged in')
    },
    logout: function(){
        console.log('user has logged out')
    }
}

module.exports = userLogs;
