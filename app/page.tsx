"use client";
import {
  ClockInformation,
  MainContainer,
} from "@/components/styles/HomePage.styled";

export default function Home() {
  return (
    <MainContainer>
      <ClockInformation>
        <div>
          <div>
            <p>&quot;This is an inspirational quote from...&quot;</p>
          </div>
          <h1>Ada Lovelace</h1>
        </div>

        <div>
          <h2>Good Morning, It&apos;s currently</h2>
          <h1>
            11:37 <span>BST</span>
          </h1>
          <h2>In London, UK</h2>
          <button>More</button>
        </div>
      </ClockInformation>
    </MainContainer>
  );
}
