'use strict';

const path = require('path');
const Sequelize = require('sequelize');

const env = 'development';
const config = require('../config/config.json')[env];
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.User = require('./user')(sequelize, Sequelize);
db.Comments = require('./comments')(sequelize, Sequelize);

db.User.hasMany(db.Comments, { foreignKey: 'commenter', sourceKey: 'id'});
db.Comments.belongsTo(db.User, {foreignKey: 'commenter', targetKey: 'id'});

module.exports = db;
