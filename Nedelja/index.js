/*
Napraviti hijerarhiju klasa koje opisuje ljude na fakultetu.
Osnovne klase koje treba implementirati (sa njihovim poljima):
Čovek: ime, prezime, godina rođenja
Student: trenutna godina studija, trenutni prosek
Student osnovnih studija: smer osnovnih studija
Student master studija: smer master studija
Zaposleni: godina zaposlenja, plata
Nastavnik: omiljeni predmet, listu predmeta na kojima drži nastavu
Profesor: titula (docent, vanredni, redovni)
Asistent: smer doktorskih studija
Službenik: odsek
*/



//ČOVEK

class Covek {
    constructor(ime,prezime,godinaRodjenja){
        this.ime=ime;
        this.prezime=prezime;
        this.godinaRodjenja=godinaRodjenja;
    }
    get name(){
        return this.ime;
    }
    get surname(){
        return this.prezime;
    }
    get yearOfBirth(){
        return this.godinaRodjenja;
    }
}
 



//STUDENTI

class Student extends Covek{
    constructor(ime,prezime,godinaRodjenja,trenutnaGodina, prosek){
        super(ime,prezime,godinaRodjenja);
        this.trenutnaGodinaStudija = trenutnaGodina;
        this.trenutniProsek = prosek;
    }
    get year(){
        return this.trenutnaGodinaStudija;
    }
    get average(){
        return this.trenutniProsek;
    }
}

class StudentOsnovnihStudija extends Student {
    constructor(ime,prezime,godinaRodjenja,trenutnaGodina,prosek,smer){
        super(ime,prezime,godinaRodjenja,trenutnaGodina,prosek);
        this.smerOsnovnihStudija = smer;
    }
    get studyProgram(){
        return this.smerOsnovnihStudija;
    }
}

class StudentMasterStudija extends Student{
    constructor(ime,prezime,godinaRodjenja,trenutnaGodina,prosek,smer){
        super(ime,prezime,godinaRodjenja,trenutnaGodina,prosek);
        this.smerMasterStudija = smer;
    }
    get studyProgram(){
        return this.smerMasterStudija;
    }
}





//ZAPOSLENI

class Zaposleni extends Covek {
    constructor(ime,prezime,godinaRodjenja,godinaZaposlenja,plata){
        super(ime,prezime,godinaRodjenja);
        this.godinaZaposlenja = godinaZaposlenja;
        this.plata = plata;
    }
    get employmentYear(){
        return this.godinaZaposlenja;
    }
    get wage(){
        return this.plata;
    }
}

class Nastavnik extends Zaposleni {
    constructor(ime,prezime,godinaRodjenja,godinaZaposlenja,plata,omiljeniPredmet,listaPredmeta){
        super(ime,prezime,godinaRodjenja,godinaZaposlenja,plata)
        this.omiljeniPredmet = omiljeniPredmet;
        this.listaPredmeta = listaPredmeta;
    }
    get favoriteSubject(){
        return this.omiljeniPredmet;
    }
    get listOfSubjects(){
        return this.listaPredmeta;
    }
}

class Profesor extends Zaposleni {
    constructor(ime,prezime,godinaRodjenja,godinaZaposlenja,plata,titula ){
        super(ime,prezime,godinaRodjenja,godinaZaposlenja,plata);
        this.titula=titula;
    }
    get title(){
        return this.titula;
    }
}

class Asistent extends Zaposleni {
    constructor(ime,prezime,godinaRodjenja,godinaZaposlenja,plata, smerDoktorskihStudija){
        super(ime,prezime,godinaRodjenja,godinaZaposlenja,plata);
        this.smerDoktorskihStudija = smerDoktorskihStudija;
    }
    get doctoralStudyProgram(){
        return this.smerDoktorskihStudija;
    }
}

class Službenik extends Zaposleni {
    constructor(ime,prezime,godinaRodjenja,godinaZaposlenja,plata, odsek){
        super(ime,prezime,godinaRodjenja,godinaZaposlenja,plata);
        this.odsek = odsek;
    }
    get department(){
        return this.odsek;
    }
}




//Proba

const s1 = new Student('Pera','Peric', 1998, 3, 7.7);

console.log(s1.name);
console.log(s1.average);
console.log(s1.trenutniProsek);