const users = [
    {username: "Picaco", age: 30, premium: false},
    {username: "Porco", age: 45, premium: false},
    {username: "Indiana", age: 32, premium: false},
    {username: "Tusco", age: 23, premium: true},
    {username: "Misco", age: 48, premium: true},
];

const premiums = users.filter(function(user){
    return user.premium == true
});
for (const usuarios of premiums){
    console.log(usuarios.username, "es usuario premium")
};

const nopremiums = users.filter(function(user){
    return user.premium == false
});
console.log(nopremiums)


