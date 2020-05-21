cube(`Owner2`, {
  sql: `SELECT * FROM security."Owner2" WHERE ${USER_CONTEXT.id.filter("id")}`,

  joins: {},

  measures: {
    count: {
      type: `count`,
      drillMembers: [id],
    },
  },

  dimensions: {
    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true,
    },
    owner: {
      sql: `owner`,
      type: `string`,
    },
  },
});
