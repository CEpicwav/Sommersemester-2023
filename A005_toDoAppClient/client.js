"use strict";
var client;
(function (client) {
     /*
    Aufgabe: <L005 A005_toDoAppClient>
    Name: <Leon Dorner>
    Matrikel: <273072>
    Datum: <26.04.2023>
    */
    window.addEventListener("load", hndlload);
    function hndlload() {
        trash.addEventListener("click", trshbtn);
        edit.addEventListener("click", editbtn);
        document.querySelector("#add").addEventListener("click", addbtn);
        document.querySelector("#new").addEventListener("click", newbtn);
        submit.addEventListener("click", sendTask);
    }
    ;
    let trash = document.createElement("button"); // delet button erstellen
    trash.setAttribute("id", "trash");
    trash.innerHTML = "Delete";
    let edit = document.createElement("button"); // edit button erstellen
    edit.setAttribute("id", "edit");
    edit.innerHTML = "Edit";
    let newdiv = document.createElement("div"); // div element für to do erstellen
    newdiv.setAttribute("id", "newtask");
    let newP = document.createElement("p"); // p element für to do erstellen
    newP.setAttribute("id", "newp");
    let form = document.querySelector('#myform');
    let taskArray = [];
    function getData() {
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
    let submit = document.querySelector("#add");
    async function sendTask(_event) {
        let formData = new FormData(form);
        let query = new URLSearchParams(formData);
        await fetch("main.html" + query.toString());
        alert("Task Submited!");
    }
    async function communicate(_url) {
        let response = await fetch(_url);
        let offer = await response.text();
        let gotdata = JSON.parse(offer);

        console.log("this" + gotdata);
        console.log("Response", response);
        console.log("before" + offer);
        document.querySelector("#div1").innerHTML = "Aufgabe: " + offer; 
    }
    communicate("Datainput.json");
    let divcontainer = document.querySelector("#div2");
    function newbtn() {
        divcontainer.style.setProperty("visibility", "visible");
    }
    function addbtn(e) {
        divcontainer.style.setProperty("visibility", "hidden");
        getData();
        document.getElementById("div1").appendChild(newdiv);
        document.querySelector("#div1").appendChild(newP);
        newP.innerHTML = "<input type=checkbox id=check>" + "Name: " + taskArray[0] + ", Aufgabe: " + taskArray[1] + ", <br>bis: " + taskArray[2] + ", Kommentar: " + taskArray[3] + "  <br>Status: " + taskArray[4];
        e.preventDefault();
        newP.appendChild(trash);
        newP.appendChild(edit);
    }
    function trshbtn() {
        document.getElementById("div1").removeChild(newdiv);
        document.querySelector("#div1").removeChild(newP);
    }
    function editbtn() {
        divcontainer.style.setProperty("visibility", "visible");
        document.getElementById("div1").removeChild(newdiv);
        document.querySelector("#div1").removeChild(newP);
    }
})(client || (client = {}));
