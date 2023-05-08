namespace server {

    /*
   Aufgabe: <L006 A006_toDoAppClient>
   Name: <Leon Dorner>
   Matrikel: <273072>
   Datum: <05.05.2023>
   Quellen: Markus, danke du Ehrenbruder. <3 5
   */

    window.addEventListener("load", hndlload)

    function hndlload() {
        trash.addEventListener("click", trshbtn);
        edit.addEventListener("click", editbtn);
        document.querySelector("#add")!.addEventListener("click", addbtn);
        document.querySelector("#new")!.addEventListener("click", newbtn);
        submit.addEventListener("click", sendTask);
    }

    export interface data {
        [key: string]: FormDataEntryValue | FormDataEntryValue[];
    };

    let trash = document.createElement("button"); // delet button erstellen
    trash.setAttribute("id", "trash");
    trash.innerHTML = "Delete";
    let edit = document.createElement("button");   // edit button erstellen
    edit.setAttribute("id", "edit");
    edit.innerHTML = "Edit";
    let newdiv = document.createElement("div");    // div element für to do erstellen
    newdiv.setAttribute("id", "newtask");
    let newP = document.createElement("p");    // p element für to do erstellen
    newP.setAttribute("id", "newp");
    let form: HTMLFormElement = document.querySelector('#myform')!;

    let taskArray: String[] = [];

    function getData(): String[] {

        let todoArray: String[];

        let formData = new FormData(form);
        console.log(formData);
        let input0 = formData.get('names') as string;
        let input1 = formData.get('ToDo') as string;
        let input2 = formData.get('date') as string;
        let input3 = formData.get('comments') as string;
        let input4 = formData.get('radio1') as string;

        todoArray = [input0, input1, input2, input3, input4];
        console.log("getData: " + todoArray);
        taskArray = todoArray;
        return taskArray;
    };


    let submit: HTMLButtonElement = <HTMLButtonElement>document.querySelector("#add");

    async function sendTask(_event: Event): Promise<void> { //link zum versenden funktioniert nicht 
        let formData: FormData = new FormData(form);
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        await fetch("main.html?" + query.toString());
        alert("Task Submited!");
    }

    async function communicate(_url: RequestInfo): Promise<void> {
        let response: Response = await fetch(_url);
        let offer: string = await response.text();
        let gotdata: data = JSON.parse(offer);
        // gotdata is empty, offer is a string, cant read the stuff out
        console.log("this" + gotdata);
        console.log("Response", response);
        console.log("before" + offer);
        document.querySelector("#div1")!.innerHTML = "Response: " + offer; //+ "  bis zum: "+ gotdata["date"]+ "  Kommentar: "+ gotdata["comment"]+ "  Wird gemacht von: "+ gotdata["person"];
    }

    //    let url: string = "Datainput.json";
    let url: string = "https://webuser.hs-furtwangen.de/~dornerle/myMingi/?";
    communicate(url);

    let divcontainer = <HTMLElement>document.querySelector("#div2");

    function newbtn() {
        divcontainer.style.setProperty("visibility", "visible");
    }

    function addbtn(e: any): any {
        divcontainer.style.setProperty("visibility", "hidden");
        getData();

        document.getElementById("div1")!.appendChild(newdiv);
        document.querySelector("#div1")!.appendChild(newP);

        newP.innerHTML = "<input type=checkbox id=check>" + "Name: " + taskArray[0] + ", Aufgabe: " + taskArray[1] + ", <br>bis: " + taskArray[2] + ", Kommentar: " + taskArray[3] + "  <br>Status: " + taskArray[4];
        e.preventDefault();

        newP.appendChild(trash);
        newP.appendChild(edit);
    }

    function trshbtn(): void {
        document.getElementById("div1")!.removeChild(newdiv);
        document.querySelector("#div1")!.removeChild(newP);
    }

    function createQuery() {
        let query: URLSearchParams = new URLSearchParams();
        query.set("command", "insert");
        query.set("collection", "Orders");
        // query.set("data", JSON.stringify(json));
    }

    function editbtn(): void {
        divcontainer.style.setProperty("visibility", "visible");
        document.getElementById("div1")!.removeChild(newdiv);
        document.querySelector("#div1")!.removeChild(newP);
    }
}