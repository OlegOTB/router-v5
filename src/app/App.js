import React from "react";
import { Link, Redirect, Route, Switch, useParams } from "react-router-dom";

const NavBar = () => {
  return (
    <ul>
      <li>
        <Link to="/">Home page</Link>
      </li>
      <li>
        <Link to="/users">users list</Link>
      </li>
    </ul>
  );
};

const HomePage = () => {
  return (
    <>
      <p>Home page</p>
      <Link to="/users">users list</Link>
    </>
  );
};
const UserProfilePage = () => {
  const { userId } = useParams();
  return (
    <>
      <div>Профиль пользователя с userId: {userId}</div>
      <ul>
        <li>
          <Link to={`/users/${userId}/edit`}>
            Страница редактирования профиля пользователя с userId: {userId}
          </Link>
        </li>
        <li>
          <Link to="/users">users list</Link>
        </li>
      </ul>
    </>
  );
};
const UserEditPage = () => {
  const { userId } = useParams();
  return (
    <>
      <div>Редактирование профиля пользователя с userId: {userId}</div>
      <ul>
        <li>
          <Link to={`/users/${userId}/profile`}>
            Страница профиля пользователя с userId: {userId}
          </Link>
        </li>
        <li>
          <Link
            to={`/users/${
              Number(userId) ? Number(userId) + 1 : userId + 1
            }/profile`}
          >
            Another User
          </Link>
        </li>
        <li>
          <Link to="/users">users list</Link>
        </li>
      </ul>
    </>
  );
};
const UserListPage = () => {
  const userArray = [1, 2, 3, 4, 5];
  return (
    <div>
      <Link to="/">Home page</Link>
      <h1>Список всех пользователей</h1>
      <ul>
        {userArray.map((tmp) => (
          <li>
            <Link key={tmp} to={`/users/${tmp}`}>
              Пользователь с userId: {tmp}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

const UsersLayout = () => {
  return (
    <>
      <Switch>
        <Route path="/users/:userId/profile" component={UserProfilePage} />
        <Route path="/users/:userId/edit" component={UserEditPage} />
        <Redirect from="/users/:userId" to="/users/:userId/profile" />
        <Route path="/users" component={UserListPage} />
      </Switch>
    </>
  );
};

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/users" component={UsersLayout} />
        <Redirect to="/" />
      </Switch>
    </>
  );
}

export default App;
