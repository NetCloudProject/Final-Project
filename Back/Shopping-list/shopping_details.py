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

    @staticmethod
    def get_list():
        sql = "SELECT list.list_id, list.shopping_location, list.shopping_date FROM shopping_list.list";
        conn = Shop._get_connection()
        cur = conn.cursor()
        res = cur.execute(sql, args=None)
        result = cur.fetchall()
        return result

    @staticmethod
    def get_product(key):
        sql = "SELECT product.product_name FROM shopping_list.product where list_id = %s";
        conn = Shop._get_connection()
        cur = conn.cursor()
        res = cur.execute(sql, args=key)
        result = cur.fetchall()
        return result

    @staticmethod
    def add_product(name, id):
        sql = "INSERT INTO shopping_list.product VALUES (%s, %s)";
        conn = Shop._get_connection()
        cur = conn.cursor()
        res = cur.execute(sql, args=(name, id))
        result = cur.fetchall()
        return result

    @staticmethod
    def delete_product(name, id):
        sql = "DELETE FROM shopping_list.product WHERE product_name = %s and list_id = %s";
        conn = Shop._get_connection()
        cur = conn.cursor()
        res = cur.execute(sql, args=(name, id))
        result = cur.fetchall()
        return result

    @staticmethod
    def add_list(id, address, date):
        sql = "INSERT INTO shopping_list.list VALUES (%s, %s, %s)";
        conn = Shop._get_connection()
        cur = conn.cursor()
        res = cur.execute(sql, args=(id, address, date))
        result = cur.fetchall()
        return result

    @staticmethod
    def delete_list(id, address, date):
        sql = "DELETE FROM shopping_list.list WHERE list_id = %s and shopping_location = %s and shopping_date = %s";
        conn = Shop._get_connection()
        cur = conn.cursor()
        res = cur.execute(sql, args=(id, address, date))
        result = cur.fetchall()
        return result

    @staticmethod
    def update_list(id, date):
        sql = "UPDATE shopping_list.list SET shopping_date = %s WHERE list_id = %s";
        conn = Shop._get_connection()
        cur = conn.cursor()
        res = cur.execute(sql, args=(date, id))
        result = cur.fetchall()
        return result






