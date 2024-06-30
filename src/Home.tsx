import Footer from "./Components/Footer";
import Form from "./Components/Form";
import Header from "./Components/Header";
import Todolist from "./Components/Todolist";

const Home = () => {
  return (
    <>
      <div className="bg-green-200 p-6">
        <div className="bg-white p-4">
          <Header />
          <Form />
          <Todolist />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;
