// level 2
function login(AA)      // a function function reciving a function AA
{
    console.log("logged in");
    AA();

}

function displayUSER()
{
    console.log("hello UTSHO");
}
login(displayUSER());