
export default async function Home() {
  const posts = await (await fetch('http://localhost:8080/api/v1/users')).json();
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
    <h1>User page</h1> 
    <div>Post length: {posts?.length}</div>
    </div>
  );
}
