const log = (content) => console.log(content);


let user = {
    name: 'John',
    age: 30,
    "likes birds": true,
};

log(`${user.name} is ${user.age} years old`);

user.isAdmin = true;
delete user.age;

log(user)
log(user['likes birds']);

delete user['likes birds'];

log(user);

let key = 'single';

user[key] = true;

log(user);

user['age'] = 30;

let data = 'age';

log(user[data]);

//Computed properties

let fruit = 'oranges';

let bag = {
    [fruit]: 5,
};

log(`The bag has ${bag['oranges']} ${fruit}.`);

const makeUser = (name,age) => {
    return {
        name: name,
        age: age,
    }
}

const user1 = makeUser('Carlos',17);

const shorthandValue = (name,age) => {
    return {
        name,
        age,
    }
}

const user2 = shorthandValue('Claudia',15);

log(user1);
log(user2);


//Existence Check

log(user.noSuchProperty == undefined);

log(`${'name' in user1}, ${user1['name']}` );
log(`${'age' in user2}, ${user2['age']}` );
log(`${'bla' in user2}, ${user2['bla']}` );


let user3 = makeUser('Brooke',17);
log(user3);

let key0 = 'age';

log(`${key0 in user3}, ${user3[key0]}`);

let ojb0 = {
    test:undefined,
}

log(`${'test' in ojb0}, ${ojb0['test']}`);









