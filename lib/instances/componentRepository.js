const EntityRepository = require("../respositories/EntityRepository");
const db = require("../../knex");

let componentRepository = new EntityRepository({
	entityName: "Component",
	db: db
});

module.exports = componentRepository;
