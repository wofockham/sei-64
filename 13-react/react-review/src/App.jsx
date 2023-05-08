import AboutMe from './components/AboutMe';
import ReadingList from './components/ReadingList';

const books1 = [
  {
      title: 'The Design of EveryDay Things',
      author: 'Don Norman',
      alreadyRead: false
  },
  {
      title: 'The Most Human Human',
      author: 'Brian Christian',
      alreadyRead: true
  }
];

const books2 = [
  {
      title: 'Of Grammatology',
      author: 'Jacques Derrida',
      alreadyRead: false
  },
  {
      title: 'Song Cycle',
      author: 'Richard Henderson',
      alreadyRead: true
  }
];



function App() {

  return (
    <div>
      <AboutMe nickname="The Blade" favourites="skateboard fails, hotdogs" hometown="Sydney" />
      <AboutMe nickname="Igor" favourites="wheelchair fails" hometown="Penrith" />

      <ReadingList books={ books1 }/>
      <ReadingList books={ books2 }/>
    </div>
  )
}

export default App
