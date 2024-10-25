"use client";

import { useObserver } from "@/hooks/hooks";
import axios from "axios";
import { useCallback, useEffect, useRef } from "react";
import { useInfiniteQuery } from "react-query";
import { Box } from "@chakra-ui/react";
const OFFSET = 10;

const getPokemonList = ({ pageParam = OFFSET }) =>
  axios
    .get("https://pokeapi.co/api/v2/pokemon", {
      params: {
        limit: OFFSET,
        offset: pageParam,
      },
    })
    .then((res) => res?.data);
const InfiniteScroll = () => {
  const bottom = useRef<HTMLDivElement>(null);

  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery("pokemonList", getPokemonList, {
    getNextPageParam: (lastPage) => {
      const { next } = lastPage;

      if (!next) return false;

      return Number(new URL(next).searchParams.get("offset"));
    },
  });

  // useObserver로 넘겨줄 callback, entry로 넘어오는 HTMLElement가
  // isIntersecting이라면 무한 스크롤을 위한 fetchNextPage가 실행될 것이다.
  const onIntersect = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const entry = entries[0];

      // 만약 타겟 요소가 화면에 있고, 다음 페이지가 있으며, 로딩 중이 아닐 때만 호출
      if (entry.isIntersecting && hasNextPage && !isFetchingNextPage) {
        console.log("Intersection observed, fetching next page...");
        fetchNextPage(); // 다음 페이지 로드
      }
    },
    [hasNextPage, isFetchingNextPage, fetchNextPage] // 의존성 배열
  );
  console.log("아래", bottom);
  // useObserver로 bottom ref와 onIntersect를 넘겨 주자.
  useObserver({
    target: bottom,
    onIntersect,
  });
  return (
    <div>
      {status === "loading" && <p>불러오는 중</p>}
      {status === "error" && <p>{error.message}0</p>}
      {status === "success" && (
        <Box
          bg="green"
          w="100%"
          maxH={"180px"}
          p={4}
          color={"white"}
          overflowY={"auto"}
        >
          {data.pages.map((group, index) => (
            <div key={index}>
              {group.results.map((pokemon) => (
                <p key={pokemon.name}>{pokemon.name}</p>
              ))}
            </div>
          ))}
        </Box>
      )}
      <div ref={bottom} />
      {isFetchingNextPage && <p>계속 불러오는 중</p>}
    </div>
  );
};

export default InfiniteScroll;
