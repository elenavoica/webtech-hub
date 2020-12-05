var db = require('../models/index');

var teams = require("../sample-data/teams_2020.json")

teams.forEach(async (team) => {
    try {
        await db.Teams.destroy({ where: {
            id: {
                [db.Sequelize.Op.gt]: 1
            }
        }})
        await db.Teams.create(team)
    } catch(err) {
        console.log(err)
    }
})