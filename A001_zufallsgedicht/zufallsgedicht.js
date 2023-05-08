var zufallsgedicht;
(function (zufallsgedicht) {
    let subjects;
    let predicates;
    let objects;
    subjects = ["Hermine", "Harry", "Hagrid", "Snape", "Voldemort", "Lena"];
    predicates = ["trinkt", "liebt", "isst", "verrät", "bewundert", "verspeist"];
    objects = ["Bier", "Hagrid", "Harry", "Voldemort", "Lena Meister", "Voldemort"];
    console.log(subjects, predicates, objects);
    for (let index = subjects.length; index >= 2; index--) {
        console.log(getVerse(subjects, predicates, objects));
    }
    function getVerse(_subjects, _predicates, _objects) {
        let verse = "";
        let verseZahl;
        verseZahl = Math.floor(Math.random() * _subjects.length);
        let versSubjekt = _subjects.splice(verseZahl, 1);
        verseZahl = Math.floor(Math.random() * _predicates.length);
        let versPredikat = _predicates.splice(verseZahl, 1);
        verseZahl = Math.floor(Math.random() * _objects.length);
        let versObjekt = _objects.splice(verseZahl, 1);
        verse = versSubjekt + " " + versPredikat + " " + versObjekt;
        return verse;
    }
})(zufallsgedicht || (zufallsgedicht = {}));
//# sourceMappingURL=zufallsgedicht.js.map