"use strict";
var Datensammlung;
(function (Datensammlung) {
    /*
    Aufgabe: <L004 A004_toDoApp>
    Name: <Leon Dorner>
    Matrikel: <273072>
    Datum: <16.04.2023>
    */
    let taskArray = [];
    function getData() {
        let form = document.querySelector('#myform');
        let todoArray;
        let formData = new FormData(form);
        console.log(formData);
        let input0 = formData.get('names');
        let input1 = formData.get('ToDo');
        let input2 = formData.get('date');
        let input3 = formData.get('comments');
        let input4 = formData.get('radio1');
        todoArray = [input0, input1, input2, input3, input4];
        console.log("getData: " + todoArray);
        taskArray = todoArray;
        return taskArray;
    }
    ;
    let divcontainer = document.querySelector("#div2");
    //New todo mit addeventlister erstellen, macht formular teil sichtbar
    document.querySelector("#new").addEventListener("click", function () {
        divcontainer.style.setProperty("visibility", "visible");
    });
    //auf add button add eventlistener legen, kindelemente erzeugen und anhängen
    document.querySelector("#add").addEventListener("click", function (e) {
        divcontainer.style.setProperty("visibility", "hidden");
        getData();
        let newdiv = document.createElement("div");
        newdiv.setAttribute("id", "newtask");
        let newP = document.createElement("p");
        newP.setAttribute("id", "newp");
        document.getElementById("div1").appendChild(newdiv);
        document.querySelector("#div1").appendChild(newP);
        newP.innerHTML = "<input type=checkbox id=check>" + "Name: " + taskArray[0] + ", Aufgabe: " + taskArray[1] + ", <br>bis: " + taskArray[2] + ", Kommentar: " + taskArray[3] + "  <br>Status: " + taskArray[4];
        e.preventDefault();
        let trash = document.createElement("button");
        trash.setAttribute("id", "trash");
        trash.innerHTML = "Delete";
        trash.addEventListener("click", function () {
            this.parentNode.parentNode.removeChild(this.parentNode);
        });
        let edit = document.createElement("button");
        edit.setAttribute("id", "edit");
        edit.innerHTML = "Edit";
        edit.addEventListener("click", function () {
            divcontainer.style.setProperty("visibility", "visible");
        });
        newP.appendChild(trash);
        newP.appendChild(edit);
    });
})(Datensammlung || (Datensammlung = {}));
//# sourceMappingURL=data.js.map