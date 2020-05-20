cube(`Comments2`, {
  sql: `SELECT * FROM security."Comments2"`,
  
  joins: {
    PullRequests: {
      relationship: `hasOne`,
      sql: `${Comments2}.id = ${PullRequests2}.user_id`,
    },
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [id, createdAt]
    }
  },
  
  dimensions: {
    type: {
      sql: `type`,
      type: `string`
    },
    
    author: {
      sql: `author`,
      type: `string`
    },
    
    topic: {
      sql: `topic`,
      type: `string`
    },
    
    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true
    },
    
    createdAt: {
      sql: `created_at`,
      type: `string`
    }
  }
});
