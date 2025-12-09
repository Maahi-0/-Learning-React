function UpcomingTask({ tasks, completeTask }) {
  return (
    <div>
      <h3>Upcoming Tasks</h3>

      <table>
        <thead>
          <tr>
            <th>Task Name</th>
            <th>Priority</th>
            <th>Deadline</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {tasks.length === 0 ? (
            <tr>
              <td colSpan="4" style={{ textAlign: "center" }}>No Task Added</td>
            </tr>
          ) : (
            tasks.map((t) => (
              <tr key={t.id}>
                <td>{t.task}</td>
                <td>{t.priority}</td>
                <td>{t.dueDate}</td>
                <td>
                  <button className="action-btn" onClick={() => completeTask(t.id)}>
                    Complete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default UpcomingTask;
