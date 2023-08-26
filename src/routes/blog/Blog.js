import { useEffect, useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './Header';
import FeaturedPost from './FeaturedPost';
import GetDB from '../../conponents/GetDB';
import Article from './Article';


const defaultTheme = createTheme();

export default function Blog() {

  const sections = ['Tourism', 'Tax', 'Employment', 'Anime', 'Low', 'Manner', 'Safety', 'Economy'];
  const [ blogData, setBlogData ] = useState(null);
  const [ mainContent, setMainContent ] = useState(null);

  function showOtherSection(section){
    const lowerCaseOfSection = section.toLowerCase(); //”data.users.小文字” なので小文字にそろえる
    const sectionData = Object.values(blogData.users[lowerCaseOfSection]);
    setMainContent(
      sectionData.map((data) => (
        <FeaturedPost key={data.title} data={data} showArticle={showArticle} /> //WARING titleが被ったときにkeyが唯一ではなくなる
      ))
    )
    console.log(mainContent)
  }

  function showArticle(data){
    setMainContent(
      <Article data={data}/>
    )
  }

  function showSearchedArticles(words){
    const keys = ["article", "title", "description"];
const sections = ["tourism", "tax", "employment", "anime", "low", "manner", "safety", "economy"]

let result = [];

sections.forEach(section => {
    const data = blogData.users[section];
    let sectionDataSources = [];

    Object.keys(data).forEach(key => {
        let filteredData = {};

        keys.forEach(k => filteredData[k] = data[key][k]);

        filteredData['id'] = key
        filteredData['section'] = section;
        sectionDataSources.push(filteredData);
    });

    result = result.concat(sectionDataSources);
});

console.log("result", result);

const wordsArray = words.split(" "); // 文字列をスペースで区切って配列に変える

const filteredResult = result.filter(item => { 
  for (const word of wordsArray) { 
    if (item && (item.title?.includes(word) || item.description?.includes(word))) { 
      return true; 
    }
  }
  return false; 
});
  console.log("filterdResult", filteredResult);
  setMainContent(
    filteredResult.map((data) => (
      <FeaturedPost key={data.title} data={data} showArticle={showArticle} /> //WARING titleが被ったときにkeyが唯一ではなくなる
    ))
  )
  }

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
  //↓blogDataを定義後mainContentを定義
  useEffect(() => {
    if(blogData){
      const tourismData = Object.values(blogData.users.tourism);
      console.log("tourismData", tourismData)
      setMainContent(
      tourismData.map((data) => (
        <FeaturedPost key={data.title} data={data} showArticle={showArticle} /> //WARING titleが被ったときにkeyが唯一ではなくなる
      ))
    )
    }
  }, [blogData]);


  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Container maxWidth="lg">
      <Header sections={sections} title="For immigre" showOtherSection={showOtherSection} showSearchedArticles={showSearchedArticles} />
        <main>
          <Grid container spacing={5} sx={{ mt: 3 }}>
          {mainContent}
          </Grid>
        </main>
      </Container>
    </ThemeProvider>
  );
}
