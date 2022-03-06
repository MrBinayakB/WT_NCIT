function handleClick() {
    var userName = document.getElementById("uname").value;
    var userPass = document.getElementById("upass").value;
    console.log(userName, userPass);

    var pos = userName.search(/^[A-Z][a-z]+\s[A-Z][a-z]+(\s[A-Z][a-z]+)?$/);
    var nameError = document.getElementById("userError");
    var pos2 = userPass.search(/^[\w]+(\@+[\w]+)?/);
    var passwError = document.getElementById("passError");
    if (pos == -1) {
        nameError.innerHTML = "<span style='color:red'>*Invalid user</span>";
    } else {
        nameError.innerHTML = "<span style='color:green'>User is Valid</span>";
    }

    if (pos2 == -1) {
        passwError.innerHTML = "<span style='color:red'>*Invalid Password</span>";
    } else {
        passwError.innerHTML = "<span style='color:green'>Password is Valid</span>";
    }
}

function myfunc() {
    var val = document.getElementById("check");
    if (val.checked == true) {
        console.log("Remember User");
    }
}