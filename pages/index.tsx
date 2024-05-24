import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Content from "../components/Content";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>City Scape Apartment - Indonesia</title>
        <meta
          name="description"
          content="Discover the perfect blend of comfort and convenience in this spacious 2-bedroom apartment. Located in a prime neighborhood, this well-appointed unit offers a comfortable living space with two bedrooms, a modern bathroom, and a cozy living room."
        />
        <link rel="icon" href="/images/favicon.ico" />
      </Head>

      <Header />
      <main className="flex-grow p-8 bg-gray-100">
        <h1 className="text-3xl font-bold mb-4">
          City Scape Apartment - Indonesia
        </h1>
        <Content />
        {/* Add the rest of your content here */}
      </main>
      <Footer />
    </div>
  );
};

export default Home;
