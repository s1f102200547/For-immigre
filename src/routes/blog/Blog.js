import { useEffect, useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './Header';
import FeaturedPost from './FeaturedPost';
import { feature1 } from './feature1';
import { feature2 } from './feature2';
import GetDB from '../../conponents/GetDB';
import MakeDatas from './MakeDatas';


const defaultTheme = createTheme();

export default function Blog() {

  const [ tourismDatas, setTourismDatas ] = useState([]);
  const [ taxDatas, setTaxDatas ] = useState([])
  const [ employmentDatas, setEmploymentDatas ] = useState([])
  const [ animeDatas, setAnimeDatas ] = useState([])
  const [ lowDatas, setLowDatas ] = useState([])
  const [ mannerDatas, setMannerDatas ] = useState([])
  const [ safetyDatas, setSafetyDatas ] = useState([])
  const [ economyDatas, setEconomyDatas ] = useState([])
  const [ blogData, setBlogData ] = useState(null);

  useEffect(() => {
    GetDB()
    .then((data) => {
      console.log("getDB success!", data);
      setBlogData(data);
    })
    .catch(() => {
      console.log("db error");
    })
  }, []);

  useEffect(() => {
    if(blogData){
      setTourismDatas(MakeDatas(blogData.users.tourism))
      setTaxDatas(MakeDatas(blogData.users.tax))
      setEmploymentDatas(MakeDatas(blogData.users.employment))
      setAnimeDatas(MakeDatas(blogData.users.anime))
      setLowDatas(MakeDatas(blogData.users.low))
      setMannerDatas(MakeDatas(blogData.users.manner))
      setSafetyDatas(MakeDatas(blogData.users.safety))
      setEconomyDatas(MakeDatas(blogData.users.economy))
    }
  }, [blogData])

  const sections = ['Tourism', 'Tax', 'Employment', 'Anime', 'Low', 'Manner', 'Safety', 'Economy'];

  const [ blogPage, setBlogPage ] = useState(feature1);
  const [ posts, setPosts ] = useState(
    blogPage.map((post) => (
      <FeaturedPost key={post.title} post={post} />
    ))
  );

  function changeBlogPage(section){
    console.log(section.feature);
    setBlogPage(section.feature)
  }

  useEffect(() => {
    setPosts(
      blogPage.map((post) => (
        <FeaturedPost key={post.title} post={post} />
      ))
    )
  }, [blogPage]);


  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Container maxWidth="lg">
      <Header sections={sections} title="Blog" changeBlogPage={changeBlogPage}/>
        <main>
          <Grid container spacing={5} sx={{ mt: 3 }}>
          {posts}
          </Grid>
        </main>
      </Container>
    </ThemeProvider>
  );
}
