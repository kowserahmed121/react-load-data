import './style.css'
export default function Comment({ comment }) {
  console.log(comment);
  const { name, email, id, body } = comment;
  return (
    <div className="box">
      <h2>Name : {name} </h2>
      <h2>User id : {id}</h2>
      <p>Email : {email}</p>
      <p className='text-justify'>
        <small>body text : {body}</small>
      </p>
    </div>
  );
}
