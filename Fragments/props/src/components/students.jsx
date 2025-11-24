
const Student_details = (props) => {

  return (
    <><div className="student">
      <p> student name: {props.name}</p>
      <p> student age: {props.age}</p>
      <p>student: {props.is_18_plus ? "yess" : "no"}</p>
    </div> </>
  );
}

export default Student_details;