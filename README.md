# Django React, Redux todo app
> Django Rest API and React-redux simple todo web app.

### Setup Backend
1st you have to install python on your system then install Django and virtualenv. After that you should follow the instructions below.
The following command will install for mac os I thing windows will be similar types. If you develop the app windows system you may fetch little error. I recommend you use linux operating system.

##### Prerequisites
- Python 3.8.5
- Django 3.1.5
- psql (PostgreSQL) 12.5

###### Postgres installation new command line. [If any issues raise]
```
pip install psycopg2-binary
```

##### Update database information from settings.py file.

```python
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': 'djangoreacttodo',
        'USER': 'mbr-sagor',
        'PASSWORD': '12345',
        'HOST': 'localhost'
    }
}
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

###### `JWT` token decode.
> https://www.npmjs.com/package/jwt-decode
```
yarn add jwt-decode
```

#### `React Reducer` simple example

```javascript
import React, {useReducer} from 'react';


const initalData = 0;

const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return state + 1;
        case 'decrement':
            return state - 1;
        case 'reset':
            return 0;
        default: return state;
    }
}

const MyReducer = props => {

    const [count, dispatch] = useReducer(reducer, initalData);
    const [number, dispatch2] = useReducer(reducer, 10);

    return (
        <div>
            <h2>I am use Reducer</h2>
            <h3>Count: {count}</h3>
            <button onClick={() => dispatch({type: 'increment'})} className="btn btn-success btn-sm mr-2">+</button>
            <button onClick={() => dispatch({type: 'decrement'})} className="btn btn-success btn-sm mr-2">-</button>
            <button onClick={() => dispatch({type: 'reset'})} className="btn btn-danger btn-sm mr-2">(0)</button>
            <hr />
            <br />
            <h3>Count: {number}</h3>
            <button onClick={() => dispatch2({type: 'increment'})} className="btn btn-success btn-sm mr-2">+</button>
            <button onClick={() => dispatch2({type: 'decrement'})} className="btn btn-success btn-sm mr-2">-</button>
            <button onClick={() => dispatch2({type: 'reset'})} className="btn btn-danger btn-sm mr-2">(0)</button>
        </div>
    );
}

export default MyReducer;

```
