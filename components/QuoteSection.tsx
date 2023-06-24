import { useEffect, useState } from "react";

type Advice = {
  id: number;
  advice: string;
};

function QuoteSection() {
  const [advice, setAdvice] = useState<Advice>({ id: 0, advice: "" });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://api.adviceslip.com/advice")
      .then((response) => response.json())
      .then((data) => {
        setAdvice(data.slip);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <div>
        {isLoading ? <p>Loading...</p> : <p>&quot;{advice.advice}&quot;</p>}
      </div>
      <h1>Ada Lovelace</h1>
    </>
  );
}

export default QuoteSection;
