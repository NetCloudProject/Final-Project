from flask import Flask, render_template, request, redirect, url_for
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import create_engine
from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import Column,Integer,ForeignKey,String


app = Flask(__name__)




db_connect_string='mysql://root:dbuserdbuser@localhost:3306/6156_travel_plan?charset=utf8mb4'
# echo可以直接看到创建数据库的时候发送的代码
engine = create_engine(db_connect_string,echo=True)
Base = declarative_base(engine)

class Admin(Base):
    admin_id=Column(Integer,primary_key=True)
    name=Column(String(10))
    # 更改字符编码格式
    __table_args__ = {
        "mysql_charset": "utf8"
    }

@app.route('/')
def hello_world():  # put application's code here
    return 'Hello World!'


if __name__ == '__main__':
    app.run()
