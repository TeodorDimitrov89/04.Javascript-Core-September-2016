function username(inputEmails) {
    let result=[];
    for(let email of inputEmails) {
        let [alias,domain] = email.split('@');
        let username = alias + ".";
        let domainParts = domain.split('.');
        domainParts.forEach(p => username += p[0]);
        result.push(username);
    }
    console.log(result.join(', '));
}

username(['peshoo@gmail.com', 'todor_43@mail.dir.bg', 'foo@bar.com']);