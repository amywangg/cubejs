import json
import psycopg2

# One time script to load test data from JSON file to database

connection = psycopg2.connect("host=localhost dbname=cubejs user=amy")
cur = connection.cursor()

# Use to check all tables in db
cur.execute("select relname from pg_class where relkind='r' and relname !~ '^(pg_|sql_)';")

# map json file to schema by merging any changes (add if not exist)
with open('prComments.json') as json_file:
    data = json.loads(json_file.read())

    for comment in data["prComments"]:
        base = data['prComments'][comment]
        csql = """INSERT INTO "cubejs"."Comments"(id,author,type,topic,pr_id,created_at) VALUES (%s,%s,%s,%s,%s,%s) ON CONFLICT DO NOTHING"""
        prsql = """INSERT INTO "cubejs"."PullRequests"(id,author,number) VALUES (%s,%s,%s) ON CONFLICT DO NOTHING"""
        # Insert to pullrequests table
        cur.execute(prsql, (base['prId'],base['prAuthor'],base['prNumber']))
        # Insert to comments table
        cur.execute(csql, (comment,base['commentAuthor'],base['commentType'],base['commentTopic'],base['prId'],base['commentCreatedAt']))
       

    # commit the changes to the database
    connection.commit()
    # close communication with the database
    cur.close()

