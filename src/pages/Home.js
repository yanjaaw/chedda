import { useState } from "react";
import { useNavigate, createSearchParams } from "react-router-dom";
import Layout from "../components/Layout";

export default function Home() {
  // const [inputVal, setInputVal] = useState("");

  // const navigate = useNavigate();

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const params = { address: inputVal };
  //   navigate({
  //     pathname: "/contract",
  //     search: `?${createSearchParams(params)}`,
  //     replace: true,
  //   });
  // };

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block xl:inline">Get Crypto, Build Credit</span>{" "}
            <span className="block text-orange-400 xl:inline">
              - a win-win solution for both lenders and borrowers.
            </span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            With CHEDDA’ 🧀 you can borrow cash for whatever.
            Pay it back, build your credit, and borrow more. While investors get a transparent and efficient track record of their social good.

          </p>
        </div>
        {/* <div className="mt-8 md:mt-16">
          <form className="sm:flex" onSubmit={handleSubmit}>
            <label htmlFor="search" className="sr-only">
              Search by category
            </label>
            <input
              id="search"
              type="text"
              placeholder="Search by category"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              required
              className="w-full px-5 py-3 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
            />
            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
              <button
                type="submit"
                className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Search
              </button>
            </div>
          </form>
        </div> */}
        <div className="mt-12 md:mt-24">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-2">
            <div className="text-center">
              <h4 className="text-2xl leading-8 font-bold tracking-tight text-gray-900 sm:text-4xl mb-8">
                Borrower
              </h4>
              <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                The credit system today is outdated and broken so we decided to take a whole new crypto-based approach to building credit. The traditional finance system is largely stacked against young adults, students, immigrants and the unbanked.
              </p>
              <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Get a loan through CHEDDA’, pay it back, get access to bigger and better loans and we create alternative metrics to determine your credit worthiness.
              </p>
            </div>
            <div className="text-center">

              <h4 className="text-2xl leading-8 font-bold tracking-tight text-gray-900 sm:text-4xl mb-8">
                Lender
              </h4>
              <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                Traditionally as an investor / donator you have no idea how much goes directly to the cause. Giving back usually incurs high transaction fees (especially internationally), administrative overhead that lack transparency.
              </p>
              <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              With CHEDDA’ you cut out the middle man, immediately seeing your funds go directly to the wallet of the borrower. Borrowers can also update you with pictures and live videos of how your funds are helping in a real and tangible way.
              </p>
            </div>

          </div>

          <div className="mt-12 md:mt-24">
            {/* <h2 className="text-3xl leading-8 font-bold tracking-tight text-gray-900 sm:text-4xl mb-8">
              Invest $20 into...
            </h2> */}
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
              {lendees.map((lendee) => (
                <div
                  key={lendee.id}
                  className="relative rounded-lg border border-gray-300 bg-white px-3 py-6 sm:px-6 sm:py-12 shadow-sm text-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                >
                  <img src={lendee.image}
                    className="rounded-full"
                  />

                  <a href={lendee.path} className="focus:outline-none">
                    <span className="absolute inset-0" aria-hidden="true" />
                    <p className="text-center text-sm sm:text-base font-medium text-gray-900">
                      {lendee.name} {lendee.mission? 'wants to ' + lendee.mission : ''} {lendee.why? 'so they can ' + lendee.why : ''}
                    </p>
                  </a>
                  <button class="bg-orange-400 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full">
                    Fund this borrower

                  </button>
                </div>
              ))}
            </div>
            {/* <div className="mt-12 md:mt-24">
            <h2 className="text-3xl leading-8 font-bold tracking-tight text-gray-900 sm:text-4xl mb-8">
              See which types of loans are doing well by category
            </h2>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
              {categories.map((category) => (
                <div
                  key={category.id}
                  className="relative rounded-lg border border-gray-300 bg-white px-3 py-6 sm:px-6 sm:py-12 shadow-sm text-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                >
                  <a href={category.path} className="focus:outline-none">
                    <span className="absolute inset-0" aria-hidden="true" />
                    <p className="text-center text-sm sm:text-base font-medium text-gray-900">
                      {category.name}
                    </p>
                  </a>
                </div>
              ))}
            </div> */}
            <div className="max-w-7xl mx-auto px-4 py-16">
              <div className="text-center">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block xl:inline">⚙️ How It Works</span>{" "}
                </h1>
                <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                  Give some chedda', get some chedda'
                </p>
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block xl:inline">🤝</span>{" "}
                </h1>
                <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                  Make the world a lil' better.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </Layout>
  );
}

const lendees = [
  {
    id: 1,
    name: "Yänjaa",
    image: "https://link.us1.storjshare.io/raw/jx3y3skg2hjy4suzwskjmhjbfv5a/cakes/bubbles.jpeg",
    path: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    mission: "buy a new ergonomic keyboard",
    why: "pursue the dream of becoming a pro gamer.",
    wallet: "0x96dC73c8B5969608C77375F085949744b5177660"
  },
  {
    id: 2,
    name: "Tom",
    image: "https://pbs.twimg.com/profile_images/1237550450/mstom_400x400.jpg",
    // path: "lendee?q=Tom"
    wallet: "0x89AC334A1C882217916CB90f2A45cBA88cE35a52"
  },
  {
    id: 3,
    name: "Alisha",
    // path: "lendee?q=Alisha"
    image: "https://storage.googleapis.com/ethglobal-api-production/users/zo2qy/avatar/1649223233324_NlMd5T05_400x400.jpeg",
    wallet: "0x96dC73c8B5969608C77375F085949744b5177660"
  },
  {
    id: 4,
    name: "Arnaud",
    // path: "lendee?q=Arnaud"
    image: "https://pbs.twimg.com/profile_images/1477979534184091657/1hKY6dFC_400x400.jpg",
    wallet: "0x89AC334A1C882217916CB90f2A45cBA88cE35a52"
  },
]
