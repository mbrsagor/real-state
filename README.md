# Django React, Redux todo app
> Django Rest API and React-redux simple todo web app.

### Setup Backend
1st you have to install python on your system then install Django and virtualenv. After that you should follow the instructions below.
The following command will install for mac os I thing windows will be similar types. If you develop the app windows system you may fetch little error. I recommend you use linux operating system.

- Python 3.8.5
- Django 3.1.5
- psql (PostgreSQL) 12.5

###### Postgres installation new command line.
```
pip install psycopg2-binary
```

Open your terminal then run the following command:
```base
git clone https://github.com/mbrsagor/djangoReduxTodo.git
cd djangoReduxTodo
virtualenv venv --python=python3.8
source venv/bin/activate
pip install -r requirements.txt
./manage.py migrate 
./manage.py createsuperuser 
./manage.py runserver
cd todo-frontned
npm install
npm start
```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.