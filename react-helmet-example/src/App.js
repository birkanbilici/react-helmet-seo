import SeoUpdater from './components/seo-updater-helmet'

const App=()=> {

  const headerTags = {
    title: 'React Helmet Example App', 
    keywords: 'react, react helmet, seo', 
    titleTemplate: "My Site - %s"
  }

  return (
    <div className="App">
      <SeoUpdater headerTags={headerTags}/>
    </div>
  );
}

export default App;
