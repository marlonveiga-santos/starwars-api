import React, { useState, useEffect } from "react";
import { nestByPage, nestByQuery } from "../../utils/api";
import Loading from "../Loading";
import { StyledPanelArea } from "../../styles/commomStyles";
import Select from "../Select";
import { FieldArea } from "./style";
import Search from "../SearchField";

export default function Main(props) {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState(false);
  const [query, setQuery] = useState("");
  const results = data.results;
  const path = props;
  const list = [];

  useEffect(() => {
    setLoading(true);
    if (query === "") {
      nestByPage(setData, path.path, page);
      return setLoading(false);
    } else {
      nestByQuery(setData, path.path, query, page);
      setSearch(false);
      return setLoading(false);
    }
  }, [path, page, search, query]);

  for (const item in results) {
    list.push(Object.entries(results[item]));
  }

  return loading === true || list[0] === undefined ? (
    <StyledPanelArea>
      <Loading />
    </StyledPanelArea>
  ) : (
    <>
    <FieldArea>
      <Select 
        counter={data.count}
        onChange={(e) => {
          setPage(e.target.value);
        }}
      />
      <Search
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        onClick={() => {
          setPage(1);
          setSearch(true);
          console.log(search);
        }}
      />
    </FieldArea>
      {props.children(list)}
    </>
  );
}