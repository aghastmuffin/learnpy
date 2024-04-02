async function main(){
    let pyodide = await loadPyodide();
    console.log('ran')
    resp = pyodide.runPython(document.getElementById("inpt").value);
    console.log(resp)
    document.getElementById("resptxt").textContent = resp;
}
function chk(event){
    if (event.keyCode === 13) { // Check if the key pressed is Enter key
        main();
    }
}
console.log("init");