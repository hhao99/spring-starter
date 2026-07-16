
export default async function Home() {
  const users = await (await fetch('http://localhost:8080/api/v1/users')).json();
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
    <h1>User page</h1> 
    <div>User length: {users?.length}</div>
    <ul>
      {users.length >  0 ? users.map( user => <li key={user.id}>{user.name}</li> ) : "no user right now"}
    </ul>
    </div>
  );
}
