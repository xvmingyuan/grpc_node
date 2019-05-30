var service = require('../static_codegen/proto/Student_grpc_pb');
var messages = require('../static_codegen/proto/Student_pb');
var grpc = require('grpc');

var server = new grpc.Server();

server.addService(service.StudentServiceService, {
    getRealNameByUsername: getRealNameByUsername,
    getStudentsByAge: getStudentsByAge,
    getStudentWrapperByAges: getStudentWrapperByAges,
    biTalk: biTalk

});

server.bind('127.0.0.1:8899', grpc.ServerCredentials.createInsecure());
server.start();

function getRealNameByUsername(call, callback) {
    console.log("request: " + call.request.getUsername());
    var myResponse = new messages.MyResponse();
    myResponse.setRealname('node static 赵六');
    callback(null, myResponse);
}

function getStudentsByAge() {

}

function getStudentWrapperByAges() {

}

function biTalk() {

}
