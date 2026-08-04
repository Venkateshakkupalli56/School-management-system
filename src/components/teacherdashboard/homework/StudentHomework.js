import React, { useState } from 'react';
import AddHomework from './AddHomework';
import EditHomework from './EditHomework';

const StudentHomework = () => {
  const [add, setAdd] = useState(false);
  const [edit, setEdit] = useState(false);
  return (
    <div>

      {/* Add Homework */}
      <div className="add">
        {!add && (
          <button onClick={() => setAdd(true)}>
            + Add Homework
          </button>
        )}
      </div>

      {add && (
        <AddHomework
          close={() => setAdd(false)}
        />
      )}

      {/* Edit Homework */}
      <div className="edit">
        {!edit && 
          <button onClick={() => setEdit(true)}>
            Edit
          </button>
        }
      </div>

      {edit && (
        <EditHomework
       
          close={() => setEdit(false)}
        />
      )}

    </div>
  );
};

export default StudentHomework;