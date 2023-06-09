namespace zufallsgedicht {

    let subjects: string[];
    let predicates: string[];
    let objects: string[];

    subjects = ["Hermine", "Harry", "Hagrid", "Snape", "Voldemort", "Lena"];
    predicates = ["trinkt",  "liebt", "isst", "verrät", "bewundert", "verspeist"];
    objects = ["Bier", "Hagrid", "Harry", "Voldemort", "Lena Meister", "Voldemort"];


    console.log(subjects, predicates, objects);

    for (let index: number = subjects.length; index >= 2; index--) {

        console.log(getVerse(subjects, predicates, objects));

    }

    function getVerse(_subjects: string[], _predicates: string[], _objects: string[]): string {

        let verse: string = "";

        let verseZahl: number;

        verseZahl = Math.floor(Math.random() * _subjects.length);
        let versSubjekt: string[] = _subjects.splice(verseZahl, 1);

        verseZahl = Math.floor(Math.random() * _predicates.length);
        let versPredikat: string[] = _predicates.splice(verseZahl, 1);

        verseZahl = Math.floor(Math.random() * _objects.length);
        let versObjekt: string[] = _objects.splice(verseZahl, 1);

        verse = versSubjekt + " " + versPredikat + " " + versObjekt;

        return verse;


    }









}