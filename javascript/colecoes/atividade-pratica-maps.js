function getAdmins(map) {
    let admins = [];
    for([key, value] of map) {
        if(value === "Admin") {
            admins.push(key);
        }
    }
    return admins;
}

const users = new Map();

users.set("Michael", "Admin");
users.set("Marcus", "Admin");
users.set("July", "Admin");
users.set("Judith", "User");
users.set("David", "User");

console.log(getAdmins(users));