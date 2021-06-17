import { useCallback, useState } from "react";

export const useFetchContent = () => {

  const [imgList, setImgList] = useState([]);
  const [page, setPage] = useState(1)
  const [value, setValue] = useState('')
  const [isReset, setIsReset]=useState(false)

  const search = useCallback(async (value, valueReset) => {

    let response = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}&name=${value}`)
    let data = await response.json();
    setValue(value)
    
    setIsReset(valueReset)
    isReset ? setImgList((prevImg) => [ ...data.results]):
    setImgList((prevImg) => [...prevImg, ...data.results])

  }, [page, isReset]);


  const fetchMore = useCallback(() => {

    setPage((page) => page + 1);
    search(value, false)

  }, [search, page, value]);



  return [imgList, search, fetchMore];
};
