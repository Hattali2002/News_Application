import React, { useState } from 'react'
import Navbar from './Component/Navbar';
import News from './Component/News';
import About from './Component/About';
import Contact from './Component/Contact';
import { Routes, Route } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'

export default function App() {
  const [progress, setProgress] = useState(0);
  const [apikey, setApikey] = useState(process.env.REACT_APP_NEWS_API);
  const [pageSize, setPageSize] = useState(6);

  const toggle = (progress) => {
    setProgress(progress);
  }
  return (
    <>
      <LoadingBar
        color='#f11946'
        progress={progress}
      />
      <Navbar />
      <div className="container">
        <Routes>
          <Route exact path="/" element={<News setProgress={toggle} key="general" pageSize={pageSize} country={"in"} apiKey={apikey} category={"general"} />} />
          <Route exact path="/business" element={<News setProgress={toggle} key="business" pageSize={pageSize} country={"in"} apiKey={apikey} category={"business"} />} />
          <Route exact path="/entertainment" element={<News setProgress={toggle} key="entertainment" pageSize={pageSize} country={"in"} apiKey={apikey} category={"entertainment"} />} />
          <Route exact path="/health" element={<News setProgress={toggle} key="health" pageSize={pageSize} country={"in"} apiKey={apikey} category={"health"} />} />
          <Route exact path="/science" element={<News setProgress={toggle} key="science" pageSize={pageSize} country={"in"} apiKey={apikey} category={"science"} />} />
          <Route exact path="/sports" element={<News setProgress={toggle} key="sports" pageSize={pageSize} country={"in"} apiKey={apikey} category={"sports"} />} />
          <Route exact path="/technology" element={<News setProgress={toggle} key="technology" pageSize={pageSize} country={"in"} apiKey={apikey} category={"technology"} />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  )

}
