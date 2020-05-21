cube(`PullRequests2`, {
  // USER_CONTEXT refers to the "u" aka query paramters and can be used to filter columns
  sql: `SELECT * FROM security."PullRequests2" WHERE ${USER_CONTEXT.id.filter(
    "owner_id"
  )}`,

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
      sql: `owner_id`,
      type: `number`,
    },
  },
});
