import SeoUpdater from './components/seo-updater-helmet'

const App = () => {

  const headerTags = {
    title: 'React Helmet', 
    keywords: 'react, react helmet, seo', 
    titleTemplate: "Example Site - %s"
  }

  return (
    <div className="bg-slate-500 h-screen flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold mb-3">
        React Helmet for SEO
      </h1>
      <h2 className="mb-3">
        See "head" section in inspector of your browser at elements tab.
      </h2>
      <h3 className="mb-3">
        Meta tags with "data-react-helmet" attribute are created by Helmet.
      </h3>
      <a className="hover:font-bold" href="https://www.npmjs.com/package/react-helmet" target="_blank">Go to react helmet npm web page</a>
      <SeoUpdater headerTags={headerTags}/>
      <SeoUpdater headerTags={headerTags}/>
    </div>
  );
}

export default App;
