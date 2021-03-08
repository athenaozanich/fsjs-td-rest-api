'use strict';
const Sequelize = require('sequelize');

Sequelize.authenticate()
  .then(function(err) {
    console.log('Connection has been established successfully.');
  })
  .catch(function (err) {
    console.log('Unable to connect to the database:', err);
  });

module.exports = (sequelize) => {
  
  Users.init({
    firstName: {
      type: Sequelize.STRING,
      validate: {
        notEmpty: {
          msg: '"First name" is required'
        }
      }
    },
    lastName: {
      type: Sequelize.STRING,
      validate: {
        notEmpty: {
          msg: '"Last name" is required'
        }
      }
    },
    emailAddress: {
      type: Sequelize.STRING,
      validate: {
        notEmpty: {
          msg: '"Email address" is required'
        }
      }
    },
    password: {
      type: Sequelize.STRING,
      validate: {
        notEmpty: {
          msg: '"Password" is required'
        }
      }
    }
  }, { sequelize });

  return Users;
}
