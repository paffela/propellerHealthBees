module.exports = function(app){

    const visits = []
    var pollenRecived = 0;

    app.post('/api/visits', (req, res) => {

        // get the visit from the request
        visit = req.body;

        // increase the pollen count
        pollenRecived += visit.pollen;

        //push and get the id and push the visit all in one
        res.status(201).json({'id':visits.push(visit)});
    });
    //get method to see the arraylength in browser
    app.get('/api/get', (req, res) => {
        res.send("visits:" + visits.length);
    });
}
