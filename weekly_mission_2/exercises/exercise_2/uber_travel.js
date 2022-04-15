class Travel {
    constructor(traveler,conductor,destination,origin,time){
        this.traveler = traveler;
        this.conductor = conductor;
        this.destination = destination;
        this.origin = origin;
        this.time = time;
    }

    getInfo() {
        let information = `conductor: ${JSON.stringify(this.conductor)}
traveler: ${JSON.stringify(this.traveler)}
destination: ${JSON.stringify(this.destination)}
origin: ${JSON.stringify(this.origin)}
time: ${this.time}`;
        
        console.log(information);
    }
}

let traveler= {
        nickname: 'joslo2345',
        age: 30,
        rating: 4.56
    };

let conductor = {
        nickname: 'conductor2345',
        age: 48,
        rating: 4.94
    };
let destination = {
        street: 'calle espacial 123',
        city: 'mars colony',
        state: 'USA COLONY',
        country: 'mars 1'
    };
    
let origin =  {
        street: 'calle rover 17',
        city: 'seattle',
        state: 'Washington',
        country: 'United states'
    };
    
let time= '30 days';

const myTravel = new Travel(traveler,conductor,destination,origin,time);
console.log('The information about my travel is: ');
myTravel.getInfo();