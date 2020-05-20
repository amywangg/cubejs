cube(`Comments2`, {
  sql: `SELECT * FROM security."Comments2"`,

  joins: {
    PullRequests2: {
      relationship: `hasOne`,
      sql: `${Comments2}.pr_id = ${PullRequests2}.id`,
    },
  },

  measures: {
    count: {
      type: `count`,
      drillMembers: [id, createdAt],
    },
  },

  dimensions: {
    type: {
      sql: `type`,
      type: `string`,
    },

    author: {
      sql: `author`,
      type: `string`,
    },

    topic: {
      sql: `topic`,
      type: `string`,
    },

    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true,
    },
    pr_id: {
      sql: `id`,
      type: `number`,
    },
    createdAt: {
      sql: `created_at`,
      type: `string`,
    },
  },
});
