export default function Home() {
  return (
    <main className="min-h-screen flex-col p-5">
      <div className="mt-10">
        <h1 className="text-center">Understanding Auth</h1>
      </div>
      <div className="flex-center mx-auto mt-5 w-full max-w-lg flex-col rounded bg-slate-700 p-4 sm:flex-row">
        <div className="flex-grow">
          <h5 className="my-5">Please sign in to see the protected pages</h5>
        </div>
        <div className="flex-grow">LOG IN COMPONENT</div>
      </div>
    </main>
  );
}
