静态文件生成方法(推荐使用静态代码生成):
1.安装 protoc
  命令:
2.安装 grpc-tools
  命令:npm install -g grpc-tools
3.在根目录新建Directory: static_codegen
5.指定下面执行命令末尾的.proto文件路径为: proto/Student.proto
6.执行命令
grpc_tools_node_protoc --js_out=import_style=commonjs,binary:static_codegen/ --grpc_out=static_codegen --plugin=protoc-gen-grpc=/usr/local/bin/grpc_tools_node_protoc_plugin proto/Student.proto