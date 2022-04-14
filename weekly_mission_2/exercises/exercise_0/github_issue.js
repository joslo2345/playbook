const issue = {
    title: 'problema en el backend',
    repositoryNameAssociated: 'playbook',
    status : 'open',
    numberOfComments: '3',
    labels: ['nodejs','javascript','backend'],
    author: 'joslo2345',
    dateCreated: new Date(),
    lastUpdated: new Date(),
    getTitleAndAuthor: function(){
        console.log(`Title: ${this.title} \nAuthor: ${this.author} `)
    },
    getGeneralInfo: function(){
        var generalInfo = `
        Title: ${this.title} \n
        Repository associated: ${this.repositoryNameAssociated} \n
        Number of comments: ${this.numberOfComments} \n
        Labels: ${this.labels} \n
        Author: ${this.author} \n
        Date of creation: ${this.dateCreated} \n
        Last updated: ${this.lastUpdated}
        `;
        return generalInfo;
    }
}
console.log('Title of the issue' + ' "' + issue.title + '" ');
console.log('Author of the issue ' + issue.author);
console.log('\n\n');
issue.getTitleAndAuthor();
console.log("General info: \n", issue.getGeneralInfo());


