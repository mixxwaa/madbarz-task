/* import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { setUsers } from './actions';

function UsersList({ setUsers, users }) {
  useEffect(() => {
    setUsers();
  }, []);

  console.log(users);
  if (users.users.length > 0) {
    return (
      <div>
        {users.users.map((el) => (
          <div key="el.id">{el.workout.name}</div>
        ))}
      </div>
    );
  }
  return <div>loading</div>;
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
  };
};

export default connect(mapStateToProps, { setUsers })(UsersList);
 */