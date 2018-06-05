//  CRUD  -  Create, Read, Update, Delete

module.exports = function(app, db) {

          // READ
    app.get("/api/all", function () {


    });


          // UPDATE
    app.put("/api/update/:id", function () {
        // var Icecream = req.body;

    });


           // CREATE
    app.post("/api/new/:id", function () {
        // var Icecream = req.body;

    });

           // DESTROY
    app.delete("/api/delete/:id", function () {
        // var Icecream = req.body;

    });
};