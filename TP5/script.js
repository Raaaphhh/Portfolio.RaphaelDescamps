function add(){
    var a = document.getElementById("t1").value;
    var b = document.getElementById("t2").value;
    var c = Number(a) + Number(b);
    t3.value = c;
}

function sous(){
    var a = document.getElementById("t1").value;
    var b = document.getElementById("t2").value;
    var c = Number(a) - Number(b);
    t3.value = c;
}

function multi(){
    var a = document.getElementById("t1").value;
    var b = document.getElementById("t2").value;
    var c = Number(a) * Number(b);
    t3.value = c;
}

function div(){
    var a = document.getElementById("t1").value;
    var b = document.getElementById("t2").value;
    var c = Number(a) / Number(b);
    t3.value = c;
}

function permute(){
    var permute = document.getElementById("t1").value;
    var permute2 = document.getElementById("t2").value;
    document.getElementById("t2").value = permute;
    document.getElementById("t1").value = permute2;
}

function parite(){
    var a;
    a = Number(document.getElementById("t3").value);
    if (a % 2 == 0){
        t4.value = ("Pair");
    } else {
        t4.value = ("Impair");
    }
}