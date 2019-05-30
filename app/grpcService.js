var PROTO_FILE_PATH = '/Users/xmy/PycharmProjects/grpc_demo/proto/Student.proto';
var grpc = require('grpc');
var grpcService = grpc.load(PROTO_FILE_PATH).proto;

var server = new grpc.Server();

server.addService(grpcService.StudentService.service, {
    getRealNameByUsername: getRealNameByUsername,
    getStudentsByAge: getStudentsByAge,
    getStudentWrapperByAges: getStudentWrapperByAges,
    biTalk: biTalk

});

server.bind('127.0.0.1:8899', grpc.ServerCredentials.createInsecure());
server.start();

function getRealNameByUsername(call, callback) {
    console.log(call);
    callback(null, {realname: 'nodejs 服务端_张三'});
}

function getStudentsByAge() {

}

function getStudentWrapperByAges() {

}

function biTalk() {

}
