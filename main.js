async function main(){
    let pyodide = await loadPyodide();
    console.log('ran')
    resp = pyodide.runPython(document.getElementById("inpt").value);
    console.log(resp)
    document.getElementById("resptxt").textContent = resp;
}
console.log("init");