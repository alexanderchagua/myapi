const alexanderRoute = (req, res) => {
    res.send('Hello, Alexander!');
}

const nancyRoute = (req, res) => {
    res.send('Hello, Nancy!');
}

module.exports = {
    alexanderRoute,
    nancyRoute
}
