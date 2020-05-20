cube(`Comments`, {
  sql: `SELECT * FROM cubejs."Comments"`,
  
  joins: {
    PullRequests:{
      relationship: `hasOne`,
      sql: `${Comments}.pr_id = ${PullRequests}.id`
    }
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [id, createdAt]
    }
  },
  
  dimensions: {
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
      type: `time`
    },
    
    author: {
      sql: `author`,
      type: `string`
    },
    
    type: {
      sql: `type`,
      type: `string`
    }
  }
});
