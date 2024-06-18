const Post = require("./Post");
const User = require("./User");


User.belongsToMany(Post, {through: 'favorites'})
Post.belongsToMany(User, {through: 'favorites'})


Post.belongsTo(User) //Aqui esta el userId de Post
User.hasMany(Post)