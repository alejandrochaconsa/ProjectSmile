Meteor.startup(function () {
    //Meals.remove({});
    if (Meals.find().count() === 0) {
        var meals = [
            {
                id: 0,
                restaurant: "Coyo",
                amount: 6.00,
                picture: "images/coyo-taco.jpg"
            },
            {
                id: 1,
                restaurant: "Mc Donald's",
                amount: 5.00,
                picture: "images/mc.jpg"
            },
            {
                id: 2,
                restaurant: "Pollo Tropical",
                amount: 6.00,
                picture: "images/pt.jpg"
            },
            {
                id: 3,
                restaurant: "Wendy's",
                amount: 8.00,
                picture: "images/ws.jpg"
            }
        ];

        for (var i = 0; i < meals.length; i++) {
            Meals.insert(meals[i]);
        }
    }
});