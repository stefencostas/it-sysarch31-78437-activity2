const Student = ({ student }) => {
  return (
    <div className="student">
      <img src={student.photo} alt={student.name} />
      <h2>{student.name}</h2>
      <p>{student.email}</p>
    </div>
  );
};

export default Student;