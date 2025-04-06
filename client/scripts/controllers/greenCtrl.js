angular
    .module('myApp')
    .controller('greenCtrl', greenCtrl);

function greenCtrl ($scope) {

    $scope.title = "Go Green";

    $scope.map = {
        center: {
            latitude: 25.8042,
            longitude: -80.1989
        },
        zoom: 15,
        events: {

        },
        markers : [
        {
            'id': 1000,
            'title' : 'My location',
            'content' : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a viverra magna',
            'location'  :
            {
                latitude:25.8042,
                longitude:-80.1989
            },
            'icon' : 'yourIconUrl.png'
        },
        {
            'id': 1001,
            'title' : 'Location #2',
            'content' : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a viverra magna',
            'location'  :
            {
                latitude:25.802419,
                longitude:-80.191121
            },

            //'location'  : [25.806669, -80.197129],
            'icon' : 'yourIconUrl.png'
        },
        {
            'id': 1002,
            'title' : 'Location #3',
            'content' : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a viverra magna',
            'location'  :
            {
                latitude:25.800835,
                longitude:-80.203137
            },
            //'location'  : [25.800835, -80.203137],
            'icon' : 'yourIconUrl.png'
        },
            {
                'id': 1003,
                'title' : 'Location #3',
                'content' : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a viverra magna',
                'location'  :
                {
                    latitude:25.807343,
                    longitude:-80.208697
                },
                //'location'  : [25.800835, -80.203137],
                'icon' : 'yourIconUrl.png'
            }
            ,
            {
                'id': 1004,
                'title' : 'location 4',
                'content' : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a viverra magna',
                'location'  :
                {
                    latitude:25.806669,
                    longitude:-80.197129
                },
                //'location'  : [25.800835, -80.203137],
                'icon' : 'yourIconUrl.png'
            }
            ,
            {
                'id': 1005,
                'title' : 'location 4',
                'content' : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a viverra magna',
                'location'  :
                {
                    latitude:25.799406,
                    longitude:-80.194039
                },
                //'location'  : [25.800835, -80.203137],
                'icon' : 'yourIconUrl.png'
            }
            ,
            {
                'id': 1006,
                'title' : 'location 4',
                'content' : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a viverra magna',
                'location'  :
                {
                    latitude:25.803559,
                    longitude:-80.207214
                },
                //'location'  : [25.800835, -80.203137],
                'icon' : 'yourIconUrl.png'
            }
            ,
            {
                'id': 1007,
                'title' : 'location 4',
                'content' : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a viverra magna',
                'location'  :
                {
                    latitude:25.800700,
                    longitude:-80.209253
                },
                //'location'  : [25.800835, -80.203137],
                'icon' : 'yourIconUrl.png'
            }
    ]
        //marker: {
        //    options: { draggable: false }
        //}

    };


}