const user = {
    firstName: "Wayne",
    lastName: "Rooney",
    fullName: function () {
        const arrowFunction = () => {
            console.log(this);
            console.log(this.firstName + " " + this.lastName);
        };

        arrowFunction();
    },
};

user.fullName();
