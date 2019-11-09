exports.model = (model) => {
  return require(`../models/${model}`)
}

exports.configRelations = () => {
  this.model('User').hasOne(this.model('Profile'))
  this.model('Profile').belongsTo(this.model('User'), {constraints: true, onDelete: 'CASCADE'})

  // Sequelize One-To-Many relationship
  // this.model('User').hasMany(this.model('Product'))
  // this.model('Product').belongsTo(this.model('User'), {constraints: true, onDelete: 'CASCADE'})

  // Sequelize Many-To-Many relationship
  this.model('User').belongsToMany(this.model('Product'), {through: this.model('UserProducts'), constraints: true, onDelete: 'CASCADE'})
  this.model('Product').belongsToMany(this.model('User'), {through: this.model('UserProducts'), constraints: true, onDelete: 'CASCADE'})
}
