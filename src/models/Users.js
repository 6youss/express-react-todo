const Sequelize = require("sequelize");
const sequelize = require("../config/db_connection");
class Users extends Sequelize.Model {}

Users.init(
  {
    id: {
      type: Sequelize.INTEGER(11),
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    username: {
      type: Sequelize.STRING(16),
      allowNull: false,
      unique: true
    },
    password: {
      type: Sequelize.STRING(16),
      allowNull: false
    }
  },
  {
    sequelize,
    modelName: "Users"
  }
);

// Users
//   .findOrCreate({where: {username: 'admin'}, defaults: {password: 'admin'}})
//   .then(([user, created]) => {
//     console.log(user.get({
//       plain: true
//     }))
//     console.log(created);

//     /*
//      findOrCreate returns an array containing the object that was found or created and a boolean that
//      will be true if a new object was created and false if not, like so:

//     [ {
//         username: 'sdepold',
//         job: 'Technical Lead JavaScript',
//         id: 1,
//         createdAt: Fri Mar 22 2013 21: 28: 34 GMT + 0100(CET),
//         updatedAt: Fri Mar 22 2013 21: 28: 34 GMT + 0100(CET)
//       },
//       true ]

//  In the example above, the array spread on line 3 divides the array into its 2 parts and passes them
//   as arguments to the callback function defined beginning at line 39, which treats them as "user" and
//   "created" in this case. (So "user" will be the object from index 0 of the returned array and
//   "created" will equal "true".)
//     */
//   })

module.exports = Users;
