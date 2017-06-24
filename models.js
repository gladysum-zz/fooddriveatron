var Sequelize = require("sequelize");
var db = new Sequelize("postgres://localhost:5432/fooddriveatron");

// The User model
var User = db.define('user', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {notEmpty: true}
  },

  email: {
    type: Sequelize.STRING,
    allowNull: false,
     validate: {notEmpty: true}
  }

});

// The Fooddrive model
var Fooddrive = db.define('fooddrive', {
  organizerphone: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {notEmpty: true}
  },

  organizername: {
    type: Sequelize.STRING,
    allowNull: false,
     validate: {notEmpty: true}
  },

  organizeremail: {
    type: Sequelize.STRING,
    allowNull: false,
     validate: {notEmpty: true}
  },

  monthdayyear: {
    type: Sequelize.STRING,
    allowNull: false,
     validate: {notEmpty: true}
  },

  starttime: {
    type: Sequelize.STRING,
    allowNull: false,
     validate: {notEmpty: true}
  },

  endtime: {
    type: Sequelize.STRING,
    allowNull: false,
     validate: {notEmpty: true}
  },

  venue: {
    type: Sequelize.STRING,
    allowNull: false,
     validate: {notEmpty: true}
  },

  streetaddress: {
    type: Sequelize.STRING,
    allowNull: false,
     validate: {notEmpty: true}
  },

  townstatezip: {
    type: Sequelize.STRING,
    allowNull: false,
     validate: {notEmpty: true}
  },

  volunteers1: {
      type: Sequelize.ARRAY(Sequelize.STRING),
      defaultValue: []
  },

  volunteers2: {
      type: Sequelize.ARRAY(Sequelize.STRING),
      defaultValue: []
  },

  volunteers3: {
      type: Sequelize.ARRAY(Sequelize.STRING),
      defaultValue: []
  }

});

module.exports = {
  User: User,
  Fooddrive: Fooddrive,
  db: db
}
