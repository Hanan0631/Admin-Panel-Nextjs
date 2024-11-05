import HomePage from "@/components/templates/HomePage";

function Home({ page, setPage }) {
  console.log(page);
  return (
    <div>
      <HomePage page={page} setPage={setPage} />
    </div>
  );
}

export default Home;
