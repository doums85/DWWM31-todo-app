import { useState } from 'react';

export default function TaskForm(props) {
  const [textEntered, setTextEntered] = useState('');

  const onChangeHandler = function (event) {
    setTextEntered(event.target.value);
  };

  const submitHandler = function (event) {
    event.preventDefault();
    props.createTask(textEntered);
    setTextEntered('');
  };

  return (
    <>
      <form
        onSubmit={submitHandler}
        className="my-4 form-floating">
        <input
          value={textEntered}
          type="text"
          name="task"
          className="form-control"
          onChange={onChangeHandler}
        />
        <label htmlFor="task">Enter a task</label>
      </form>

      <div className="d-grid gap-2 d-md-block">
        <button
          onClick={submitHandler}
          type="button"
          className="btn py-2 btn-primary me-md-3">
          Add
        </button>
        <button
          onClick={() => props.searchTask(textEntered)}
          type="button"
          className="btn py-2 btn-secondary">
          Get Tasks
        </button>
      </div>
    </>
  );
}
// rfc
