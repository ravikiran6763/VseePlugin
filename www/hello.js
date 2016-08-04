/*global cordova, module*/

module.exports = {


/******************************************** FOR ANDROID DEVICES *****************************************/


  //TO MAKE VIDEO CALL TO ANOTHER PERSON SEND CALLEEUSERNAME,CALLEEPASSWORD AND CALLERUSERNAME
    greet: function (uname,pw,persontocall,successCallback, errorCallback) {
        cordova.exec(successCallback, errorCallback, "ExampleApplication", "cgreet", [uname,pw,persontocall]);
    },

//TO MAKE CHAT WITH ANOTHER PERSON SEND CALLEEUSERNAME,CALLEEPASSWORD AND CALLERUSERNAME
    chat: function (username,password,persontocall, successCallback, errorCallback) {
        cordova.exec(successCallback, errorCallback, "ExampleApplicationforchat", "chattoanotherperson", [username,password,persontocall]);
    },

    //SEND THE USERNAME AND PASSWORD TO WHOM LOGIN TO THIS API
    login: function (uname1,pw1,successCallback, errorCallback) {
        cordova.exec(successCallback, errorCallback, "loginintovsee", "logintovsee", [uname1,pw1]);
    },

    //SEND THE USERNAME AND PASSWORD TO WHOM LOGOUT FROM VSEE
    logout: function (unametologout,pwtologout,successCallback, errorCallback) {
        cordova.exec(successCallback, errorCallback, "logouttovsee", "logoutvsee", [unametologout,pwtologout]);
    }



};
