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
  
  Courses.init({
    userId: {
      type: Sequelize.INTEGER,
      validate: {
        notEmpty: {
          msg: '"First name" is required'
        }
      }
    },
    title: {
      type: Sequelize.STRING,
      validate: {
        notEmpty: {
          msg: '"Last name" is required'
        }
      }
    },
    desctiption: {
      type: Sequelize.TEXT,
      validate: {
        notEmpty: {
          msg: '"Email address" is required'
        }
      }
    },
    estimatedTime: {
      type: Sequelize.STRING
    },
    materialsNeeded: {
      type: Sequelize.STRING
    }
  }, { sequelize });

  return Courses;
}
