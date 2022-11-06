const outputScreen = document.getElementById('output-screen');

function display(num){
    outputScreen.value += num;
}

function compute() {

    outputScreen.value = eval(outputScreen.value )


}

function clear() {

    outputScreen.value = " ";

}

function del(){
    outputScreen.value = outputScreen.value.slice(0,-1)
}

