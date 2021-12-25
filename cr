echo "COMPILE AND RUN"
 
fileroot=$1

echo "compiling ${fileroot}"

tsc "${fileroot}.ts"
node "${fileroot}.js"

