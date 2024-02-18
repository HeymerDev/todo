import CrossIcons from "./components/icons/CrossIcons";
import MoonIcon from "./components/icons/MoonIcon";

function App() {
  return (
    <div className="bg-[url('./assets/images/bg-mobile-light.jpg')] bg-no-repeat bg-contain bg-gray-300 min-h-screen">
      <header className="container mx-auto px-4 pt-8">
        <div className="flex justify-between">
          <h1 className="uppercase  text-white text-2xl font-semibold tracking-[0.3em]">
            Todo
          </h1>
          <button>
            <MoonIcon />
          </button>
        </div>

        <form className="flex bg-white rounded-md overflow-hidden py-4 gap-4 items-center px-4 mt-8">
          <span className="rounded-full border-2 h-5 w-5 inline-block"></span>
          <input
            type="text"
            placeholder="create a new todo"
            className="w-full text-gray-400 outline-none"
          />
        </form>
      </header>

      <main className="container mx-auto px-4 mt-8">
        <div className="bg-white rounded-md">
          <article className="flex gap-4 py-4 border-b border-b-gray-400 px-4 items-center">
            <button className="rounded-full border-2 h-5 w-5 inline-block"></button>
            <p className="text-gray-500 grow">complete online JavaScript</p>
            <button>
              <CrossIcons />
            </button>
          </article>
          <article className="flex gap-4 py-4 border-b border-b-gray-400 px-4 items-center">
            <button className="rounded-full border-2 h-5 w-5 inline-block "></button>
            <p className="text-gray-500 grow">complete online JavaScript</p>
            <button>
              <CrossIcons />
            </button>
          </article>
          <article className="flex gap-4 py-4 border-b border-b-gray-400 px-4 items-center">
            <button className="rounded-full border-2 h-5 w-5 inline-block"></button>
            <p className="text-gray-500 grow">complete online JavaScript</p>
            <button>
              <CrossIcons />
            </button>
          </article>
          <article className="flex gap-4 py-4 border-b border-b-gray-400 px-4 items-center">
            <button className="rounded-full border-2 h-5 w-5 inline-block"></button>
            <p className="text-gray-500 grow">complete online JavaScript</p>
            <button>
              <CrossIcons />
            </button>
          </article>
          <section className="px-4 py-4 flex justify-between">
            <span className="text-gray-500">5 items left</span>
            <button className="text-gray-500">Clear Completed</button>
          </section>
        </div>
      </main>
      <section className="container mx-auto px-4">
        <div className="bg-white mt-8 p-4 rounded-md flex justify-center gap-4">
          <button className="text-blue-300">All</button>
          <button className="hover:text-blue-300">Active</button>
          <button className="hover:text-blue-300">Completed</button>
        </div>
      </section>
      <section className="text-center mt-8">Drag and drop</section>
    </div>
  );
}

export default App;
