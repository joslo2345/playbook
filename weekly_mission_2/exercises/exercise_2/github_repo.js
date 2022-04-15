class Repo {
    constructor(name,author,language,numberOfCommits,
        stars,forks,issues_open,issues_close){
        this.name = name;
        this.author = author;
        this.language = language;
        this.numberOfCommits = numberOfCommits;
        this.stars = stars;
        this.forks = forks;
        this.issues_open = issues_open;
        this.issues_close = issues_close;
    }

    getTotalIssues(){
        return this.issues_open + this.issues_close
    }

    getGeneralInfo(){
        return `This repository ${this.name} was created by ${this.author}`;
    }

    getName(){
        return this.name;
    }
}

let name = "LaunchX";
let author = "carlogilmar";
let language = "JavaScript";
let numberOfCommits = 100;
let stars = 199;
let forks = 299;
let issues_open = 10;
let issues_close = 10;


const myRepo = new Repo(name,author,language,numberOfCommits,
    stars,forks,issues_open,issues_close);
console.log("Nombre del repo: " + myRepo.getName());
console.log("Issues totales: " + myRepo.getTotalIssues());
console.log(myRepo.getGeneralInfo());
