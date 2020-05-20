cube(`PullRequests`, {
  sql: `SELECT * FROM cubejs."PullRequests"`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [id]
    },
    
    number: {
      sql: `number`,
      type: `sum`
    }
  },
  
  dimensions: {
    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true
    },
    
    author: {
      sql: `author`,
      type: `string`
    }
  }
});
