import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { useGetPokemonQuery } from "../../common/apiSlice";
import Pagination from "./Pagination/Pagination";
import PokemonCard from "./PokemonCard/PokemonCard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/cjs/Col";

export default function PokemonsList() {
  const [page, setPage] = useState(
    "https://pokeapi.co/api/v2/pokemon/?limit=10"
  );
  const { data, error, isLoading } = useGetPokemonQuery(page);
  const [prevPageUrl, setPrevPageUrl] = useState();
  const [nextPageUrl, setNextPageUrl] = useState();

  useEffect(() => {
    setPrevPageUrl(data?.previous);
    setNextPageUrl(data?.next);
  }, [data]);

  const observer = useRef();
  const lastPokemonCardRef = useCallback(
    (node) => {
      if (isLoading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          setPage(data.next);
        }
      });
      if (node) observer.current.observe(node);
    },
    [data]
  );

  const newPokemonElement = useMemo(() => {
    if (data) {
      return data.results.map((p, index) => {
        if (data.results.length === index + 1) {
          return (
            <Col key={p.name}>
              <PokemonCard callback={lastPokemonCardRef} pokemonLink={p.url} />
            </Col>
          );
        } else {
          return (
            <Col key={p.name}>
              <PokemonCard pokemonLink={p.url} />
            </Col>
          );
        }
      });
    }
    return null;
  }, [data]);
  const pokemonElement = useRef([]);

  useEffect(() => {
    if (newPokemonElement) {
      pokemonElement.current.push(newPokemonElement);
    }
  }, [newPokemonElement]);
  return (
    <>
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading & !pokemonElement.current.length ? (
        <>Loading...</>
      ) : pokemonElement.current.length ? (
        <>
          <h3>Total pokemon count: {data.count}</h3>
          <Container>
            <Row>{pokemonElement.current}</Row>
          </Container>
          <Pagination
            prevPageUrl={prevPageUrl ? prevPageUrl : null}
            nextPageUrl={nextPageUrl ? nextPageUrl : null}
            setPage={setPage}
          />
        </>
      ) : null}
    </>
  );
}
