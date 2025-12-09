function CompletedTask({ tasks }) {
  return (
    <div>
      <h3>Completed Tasks</h3>

      <table>
        <thead>
          <tr>
            <th>Task Name</th>
            <th>Priority</th>
            <th>Deadline</th>
          </tr>
        </thead>

        <tbody>
          {tasks.length === 0 ? (
            <tr>
              <td colSpan="3" style={{ textAlign: "center" }}>No Completed Task</td>
            </tr>
          ) : (
            tasks.map((t) => (
              <tr key={t.id}>
                <td>{t.task}</td>
                <td>{t.priority}</td>
                <td>{t.dueDate}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default CompletedTask;
