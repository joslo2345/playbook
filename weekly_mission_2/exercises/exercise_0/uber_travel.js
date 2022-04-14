const travel = {
    traveler: {
        nickname: 'joslo2345',
        age: 30,
        rating: 4.56,
    },
    conductor: {
        nickname: 'conductor2345',
        age: 48,
        rating: 4.94,
    },
    destination: {
        street: 'calle espacial 123',
        city: 'mars colony',
        state: 'USA COLONY',
        country: 'mars 1'
    },
    origin: {
        street: 'calle rover 17',
        city: 'seattle',
        state: 'Washington',
        country: 'United states'
    },
    time: '30 days',
    getInfo: function(){
        information = `
        conductor: ${JSON.stringify(this.conductor)}
        traveler: ${JSON.stringify(this.traveler)}
        destination: ${JSON.stringify(this.destination)}
        origin: ${JSON.stringify(this.origin)}
        time: ${this.time}
        `;
        console.log(information);
    }
}

travel.getInfo();