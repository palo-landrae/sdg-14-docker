db = db.getSiblingDB("sdg-14");
db.beach_litter.drop();

db.beach_litter.insertMany([
    {
        "Entity": "Albania",
        "Code": "ALB",
        "Year": 2018,
        "EN_MAR_BEALITSQ": 1284797
    }, {
        "Entity": "Algeria",
        "Code": "DZA",
        "Year": 2015,
        "EN_MAR_BEALITSQ": 34285714
    }, {
        "Entity": "Algeria",
        "Code": "DZA",
        "Year": 2016,
        "EN_MAR_BEALITSQ": 39450549
    }, {
        "Entity": "Algeria",
        "Code": "DZA",
        "Year": 2018,
        "EN_MAR_BEALITSQ": 2485
    }
]);