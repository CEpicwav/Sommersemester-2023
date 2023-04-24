namespace L05 {

    /*
    Aufgabe: <L004 A004_toDoApp>
    Name: <Leon Dorner>
    Matrikel: <273072>
    Datum: <24.04.2023>
    Quellen: Markus, ChatGPT
    */

    let taskArray: String[] = [];
    let dataURL: string = "./data.json";

    interface Task { name: string; task: string, date: string, comment: string, state: number };
    enum TaskState { Open, InProgress, Done };

    let tasks: Task[] = [{ name: "Leon", task: "EIA machen", date: "23.04.2023", comment: "Wird mal Zeit", state: TaskState.Open },
    { name: "Lena", task: "auch EIA machen", date: "23.04.2023", comment: "Wer kontrolliert das eigentlich?", state: TaskState.InProgress }]

    document.addEventListener("DOMContentLoaded", hdlLoad);

    let divContainer: HTMLElement;
    function hdlLoad(): void {
        // getJSONData();
        displayTasks(tasks);
        divContainer = <HTMLElement>document.querySelector("#div2");
    }

    // function getJSONData(): void {
    // }

    function displayTasks(_tasks: Task[]): void {
        
    }

    function getData(): String[] {

        let form: HTMLFormElement = document.querySelector('#myform')!;
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


    //New todo mit addeventlister erstellen, macht formular teil sichtbar
    document.querySelector("#new")!.addEventListener("click", function () {
        // divContainer.style.setProperty("visibility", "visible");
    });

    //auf add button add eventlistener legen, kindelemente erzeugen und anhängen
    document.querySelector("#add")!.addEventListener("click", hdlAddClick);

    function hdlAddClick(_event: Event): void {
        // divContainer.style.setProperty("visibility", "hidden");
        getData();

        let newdiv = document.createElement("div");
        newdiv.setAttribute("id", "newtask");

        let newP = document.createElement("p");
        newP.setAttribute("id", "newp");

        document.getElementById("div1")!.appendChild(newdiv);
        document.querySelector("#div1")!.appendChild(newP);

        newP.innerHTML = "<input type=checkbox id=check>" + "Name: " + taskArray[0] + ", Aufgabe: " + taskArray[1] + ", <br>bis: " + taskArray[2] + ", Kommentar: " + taskArray[3] + "  <br>Status: " + taskArray[4];
        _event.preventDefault();

        let trash = document.createElement("button");
        trash.setAttribute("id", "trash");
        trash.innerHTML = "Delete";

        trash.addEventListener("click", removeOnClick);

        let edit = document.createElement("button");
        edit.setAttribute("id", "edit");
        edit.innerHTML = "Edit";

        edit.addEventListener("click", function () {
            // divContainer.style.setProperty("visibility", "visible");
            this!.parentNode!.parentNode!.removeChild(this!.parentNode!);
        });

        newP.appendChild(trash);
        newP.appendChild(edit);

    }

    function removeOnClick(): void {
        this!.parentNode!.parentNode!.removeChild(this!.parentNode!);
    }

}