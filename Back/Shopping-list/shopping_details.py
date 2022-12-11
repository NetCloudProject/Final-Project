import pymysql
import os

class Shop:
    def __init__(self):
        pass

    @staticmethod
    def _get_connection():

        # usr = os.environ.get("DBUSER")
        # pw = os.environ.get("DBPW")
        # h = os.environ.get("DBHOST")

        usr = "admin"
        pw = 'dbuserdbuser'
        h = 'e61561.c0bszoxes67p.us-east-1.rds.amazonaws.com'

        conn = pymysql.connect(
            user=usr,
            password=pw,
            host=h,
            cursorclass=pymysql.cursors.DictCursor,
            autocommit=True
        )
        # cur = conn.cursor()
        # cur.execute("USE shopping_list")
        return conn

    @staticmethod
    def get_by_key(key):
        sql = "SELECT list_id, list.shopping_location, GROUP_CONCAT(DISTINCT product.product_name SEPARATOR ';') AS item_list FROM shopping_list.list JOIN shopping_list.product USING (list_id) GROUP BY list.list_id";
        conn = Shop._get_connection()
        cur = conn.cursor()
        res = cur.execute(sql, args=key)
        result = cur.fetchone()

        return result
