import MapCompoent from './components/Map/MapComponent';

const App = () => {
  return (
    <div className="App">
      <div style={
        {
          height: '400px',
          width: '600px',
          border: '2px solid black',
          zIndex: 200,
        }
      }>
        <MapCompoent />
      </div>
    </div>
  );
};

export default App;
