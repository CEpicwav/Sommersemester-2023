namespace aufgabe3 {

    /*
    Aufgabe: <L003 FormElements>
    Name: <Leon Dorner>
    Matrikel: <273072>
    Datum: <16.04.2023>
    */

    window.addEventListener('load', handleLoad);

    function handleLoad(): void {
        document.getElementById("new")!.addEventListener('click', newtask);
        document.getElementById("edit")!.addEventListener('click', edittask);
        document.getElementById("add")!.addEventListener('click', addtask);
    };

    function newtask() {
        console.log("Bitte erstelle eine Aufgabe")
    };

    function addtask() {
        console.log("Hinzufügen einer Aufgabe")
    };

    function edittask() {
        console.log("Bearbeite die Aufgabe")
    };


}