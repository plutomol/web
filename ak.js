// // JavaScript source code // //

// let a = 57;
// let b = 'java';
// let c = true;
// let d = null;
// let e = undefined;

// console.log(a + b + c + d + e);
//=======================LOOPS========================//
// let i, a = 1;
// for (i = 1; i < 7; i++) {
//     a = a + (a * i);
//     console.log(a);
// }

// let e = 0;
// while (e < 5) {
//     console.log(e);
//     e++;
// }

// let q = 13;
// do {
//     console.log(q)
//     q--;
// } while (q >= 9);

//===========================================//


function noadmin() {
    alert("Wrong Passcode ! | Try Again ?");
    admin();
}

function admin() {
    let code = prompt("Are you Administrator? | Enter Passcode :");
    if (code == "aa" || code == "11") {
        alert("Administrator session on...| Unlock Success !")
    }
    else (noadmin());
}
//==============================================//

function show() {
    document.getElementById("pm").innerHTML = "Virus Injected !"
}

