var PROTO_FILE_PATH = '/Users/xmy/PycharmProjects/grpc_demo/proto/Student.proto';
var grpc = require('grpc');
var grpcService = grpc.load(PROTO_FILE_PATH).proto;

var client = new grpcService.StudentService('127.0.0.1:8899', grpc.credentials.createInsecure());

client.getRealNameByUsername({username: 'nodejs 客户端 李四'}, function (error, respData) {
    console.log(respData);
});