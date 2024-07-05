#!/bin/bash

docker pull namely/protoc-all

rm -rf ./gen
# Найти все файлы с расширением .proto в текущей директории и её поддиректориях
find ./daemon -maxdepth 10 -name "*.proto" | while read -r file; do
    # Выполнить команду cat на каждом найденном файле
    docker run -v ${PWD}:/defs namely/protoc-all -f $file -l go -o gen/go --go-module-prefix github.com/vsysa/grpc-contracts/gen/go  --with-gateway --with-docs 
done

sudo chown -R $USER:$USER ./gen

cp -r ./gen/go/github.com/vsysa/grpc-contracts/gen/* ./gen
rm -rf ./gen/go/github.com

# --go-module-prefix efficiencyCalculator/src
# --go-module-prefix github.com/vsysa/grpc-contracts/gen/go 
# --go-source-relative