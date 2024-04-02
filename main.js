async function main(){
    let pyodide = await loadPyodide();
    resp = pyodide.runPython(document.getElementById("inpt").value);
    console.log(resp)
    document.getElementById("resptxt").textContent = resp;
}