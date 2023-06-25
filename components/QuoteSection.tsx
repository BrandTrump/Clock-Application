import { useEffect, useState } from "react";

type Quote = {
  content: string;
  author: string;
};

function QuoteSection() {
  const [quote, setQuote] = useState<Quote>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://api.quotable.io/random")
      .then((response) => response.json())
      .then((data) => {
        setQuote(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <div>
        {isLoading ? <p>Loading...</p> : <p>&quot;{quote?.content}&quot;</p>}
      </div>
      <h1>{quote?.author}</h1>
    </>
  );
}

export default QuoteSection;
