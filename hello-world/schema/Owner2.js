cube(`Owner2`, {
  sql: `SELECT * FROM security."Owner2"`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [id]
    }
  },
  
  dimensions: {
    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true
    },
    
    owner: {
      sql: `owner`,
      type: `string`
    }
  }
});
