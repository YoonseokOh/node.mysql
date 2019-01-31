module.exports = (sequelize, DataTypes) => {
  return sequelize.define('comments', {
    comments: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('now()')
    }
  }, {
    timestamps: false
  })
};
