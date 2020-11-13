/*==========================================================
    Author      : Pradeepa K
    Date Created: 13 Jan 2016
    Description : Controller to handle Recent Projects page
    Change Log
    s.no      date    author     description     


 ===========================================================*/

dashboard.controller("RecentController", ['$rootScope', '$scope', '$state', '$location', 'dashboardService', 'Flash',
function ($rootScope, $scope, $state, $location, dashboardService, Flash) {
    var vm = this;

    vm.recents = [
      {
          id: 1,
          heading: "MetaData Management",
          title: "MetaData Admin Portal",
          description: "Web application to handle admin management",
          image: "e-pos",
          theme: "warning",
          url:"fp360.us:830",
          roles: [
              {
                  theme: "success",
                  myRole:"UI Design"
              },
              {
                  theme: "info",
                  myRole: "UI Development"
              },
              {
                  theme: "warning",
                  myRole: "Service Integration"
              },
              {
                  theme: "red",
                  myRole: "UX Consultant"
              }
          ]
      },
      {
          id: 2,
          heading: "API Development",
          title: "Middleware API's",
          description: "Middleware API's using Rest/SOAP calls",
          image: "active-reports",
          theme: "danger",
          url: "https://nodered.org/",
          roles: [
              {
                  theme: "success",
                  myRole: "UI Design"
              },
              {
                  theme: "info",
                  myRole: "UI Development"
              },
              {
                  theme: "danger",
                  myRole: "jQuery Plugin Development"
              }
          ]
      },
      {
          id: 3,
          heading: "Dashboard",
          title: "DMS Admiral",
          description: "Angular Bootstrap Dashboard is a web dashboard application based on Bootstrap and AngularJS.",
          image: "dashboard",
          theme: "success",
          url: "https://projects.invisionapp.com/share/EJ3RWYRFB#/screens",
          roles: [
              {
                  theme: "success",
                  myRole: "Individually Developed by Me"
              }
          ]
      },
      {
          id: 4,
          heading: "Moffet",
          title: "Santillana Projects - New Media team",
          description: "Web application developed to meet new educational challenges with innovative, open, flexible and modular materials that adapt to the characteristics of the schools and enable them to improve the learning.",
          image: "kiosk",
          theme: "primary",
          url: "http://www.blogproyectos.santillana.es/primariaesp/",
          roles: [
              {
                  theme: "success",
                  myRole: "UI Design"
              },
              {
                  theme: "info",
                  myRole: "UI Development"
              },
              {
                  theme: "warning",
                  myRole: "Service Integration"
              },
              {
                  theme: "red",
                  myRole: "UX Consultant"
              }
          ]
      },
      {
          id: 5,
          heading: "e - Commerce",
          title: "Deepetch",
          description: "E-Comm sites for various image editing services",
          image: "e-comm",
          theme:"info",
          url: "https://www.deepetch.com/",
          roles: [
              {
                  theme: "success",
                  myRole: "UI Design"
              },
              {
                  theme: "info",
                  myRole: "UI Development"
              },
              {
                  theme: "warning",
                  myRole: "Service Integration"
              },
              {
                  theme: "danger",
                  myRole: "UX Consultant"
              },
              {
                  theme: "primary",
                  myRole: "Version Control"
              }
          ]
      }
    ];

    console.log("coming to Recent controller");

}]);

