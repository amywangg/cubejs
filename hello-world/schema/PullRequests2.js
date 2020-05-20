cube(`PullRequests2`, {
  sql: `SELECT * FROM security."PullRequests2"`,

  joins: {
    Owner2: {
      relationship: `hasOne`,
      sql: `${PullRequests2}.owner_id = ${Owner2}.id`,
    },
  },

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

    author: {
      sql: `author`,
      type: `string`,
    },
    number: {
      sql: `number`,
      type: `number`,
    },
    owner_id: {
      sql: `id`,
      type: `number`,
    },
  },
});
