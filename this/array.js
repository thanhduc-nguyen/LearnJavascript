const user = {
    firstName: "Wayne",
    lastName: "Rooney",
    hobbies: ["programming", "gym"],
    listHobbies: function () {
        this.hobbies.forEach(function (hobby) {
            console.log(this.firstName);
            console.log(hobby);
        }, this);
    },
};

user.listHobbies();
