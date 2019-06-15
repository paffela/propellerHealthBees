module.exports = function(app){

    const visits = []
    var pollenRecived = 0;

    app.post('/api/visits', (req, res) => {

        // Store the supplied visit data
        visit = req.body;
        visits.push(visit);

        pollenRecived += visit.pollen;

        res.status(201).json({'id':visits.length});
    });
    app.get('/api/get', (req, res) => {
        res.send("visits:" + visits.length);
    });
}

