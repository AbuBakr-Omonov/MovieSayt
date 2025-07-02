import { useMovie } from '@/api/hooks/useMovie'
import MovieView from '@/components/movieView/MovieView'
import SwiperItem from '@/components/SwiperItem/SwiperItem'
import View from '@/components/view/View'
import React from 'react'

const Home = () => {

  const {getMovies}  = useMovie()
  const {data,isLoading} = getMovies({ page: 1, without_genres: "18,36,27,10749"})
  console.log(data?.results);
  
  return (
    <>
    <SwiperItem/>
     <View/>
     <MovieView data={data?.results.slice(0,8)} loading={isLoading}  count={8}/>
    </>
  )
}

export default React.memo(Home)