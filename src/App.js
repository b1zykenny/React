import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { usersSelector } from "./redux/reducers/postsSelector/selector";
import { loadUsers } from "./redux/reducers/reducer";


function App() {
  const dispatch = useDispatch();
  const users = useSelector(usersSelector);
  const loading = useSelector(state => state.users.loading);

  useEffect(() => {
    dispatch(loadUsers())
  }, [])

  if (loading) {
    return (
      < div >
        loading...
      </div >
    )
  }


  return (
    <div>
      {
        loading ? (
          <div>
            Loading...
          </div>) : (
          users.map((user) => (
            <h4>
              {user.id}
              <h5>
                {user.name}
                <h6>
                  {user.email}
                </h6>
              </h5>
            </h4>
          ))
        )
      }
    </div>
  );
}

export default App;
