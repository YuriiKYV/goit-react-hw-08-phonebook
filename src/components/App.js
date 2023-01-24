import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { current } from "redux/auth/auth-operations";
import Navigation from "./Navigation/Navigation";
import UserRoutes from "./UserRoutes";
import { getLoadingUserStatus } from "redux/auth/auth-selectors";

function App() {
  const dispatch = useDispatch();
    const isLoadingUser = useSelector(getLoadingUserStatus);

    useEffect(() => {
    dispatch(current());
    }, [dispatch])
  
  return (
    <div className="App">
      {isLoadingUser ? <p>Loading ...</p> : (
      <>
        <Navigation />
      <UserRoutes />
      </>
      )}
    </div>
  )
}

export default App;